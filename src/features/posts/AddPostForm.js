import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { selectAllUsers } from "../users/usersSlice"
import { useAddNewPostMutation } from "../api/apiSlice"

const AddPostForm = ({setIsAddPostLoading}) => {
  const users = useSelector(selectAllUsers)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const [addNewPost, { isLoading }] = useAddNewPostMutation()

  useEffect(()=>{
    setIsAddPostLoading(isLoading)
  },[isLoading])

  // Since this is a fake API, the new post won't persist if we reload the page
  const canSave = [title, content, userId].every(Boolean) && !isLoading

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if (canSave) {
      try {
        // dispatch returns the final action, but not pending, fulfilled or failed, 
        // because createAsyncThunk handle that internally. So we need to unwrap it
        await addNewPost({ title, content, user: userId }).unwrap()
        setTitle('')
        setContent('')
        setUserId('')
      } catch (error) {
        console.error('Failed to save the post:', error)
      } finally {
      }
    }
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor='postTitle'>Post Title:</label>
        <input
          id='postTitle'
          type='text'
          placeholder='Your title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor='postAuthor'>Author:</label>
        <select id='postAuthor' value={userId} onChange={e => { setUserId(e.target.value) }}>
          <option value=''></option>
          {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
        </select>
        <label htmlFor='postContent'>Content:</label>
        <textarea id='Content' placeholder='Your post' value={content} onChange={e => setContent(e.target.value)}></textarea>
        <input type='submit' value={'Save Post'} />
      </form>
    </section>
  )
}

export default AddPostForm
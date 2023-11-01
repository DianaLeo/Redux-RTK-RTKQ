import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addNewPost } from "./postsSlice"
import { selectAllUsers } from "../users/usersSlice"

const AddPostForm = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectAllUsers)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  // Since this is a fake API, the new post won't persist if we reload the page
  const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle'

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    console.log('submit, cansave=',canSave);
    if (canSave) {
      try {
        setAddRequestStatus('pending')
        // dispatch returns the final action, but not pending, fulfilled or failed, 
        // because createAsyncThunk handle that internally. So we need to unwrap it
        await dispatch(addNewPost({ title, content, user: userId })).unwrap()
        setTitle('')
        setContent('')
        setUserId('')
      } catch (error) {
        console.error('Failed to save the post:', error)
      } finally {
        setAddRequestStatus('idle')
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
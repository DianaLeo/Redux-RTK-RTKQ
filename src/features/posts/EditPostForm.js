import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { postEdited, selectPostById } from './postsSlice'

const EditPostForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { postId } = useParams()
    const post = useSelector(state => selectPostById(state,postId))
    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (title && content) {
            dispatch(postEdited({
                id: postId,
                title,
                content
            }))
            navigate(`/posts/${postId}`)
        }
    }

    return (
        <section>
            <>
                <h2>Edit Post</h2>
                <form onSubmit={e=>onSubmitHandler(e)}>
                    <label htmlFor='postTitle'>Post Title:</label>
                    <input
                        id='postTitle'
                        type='text'
                        placeholder='Your title'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <label htmlFor='postContent'>Content:</label>
                    <textarea id='Content' placeholder='Your post' value={content} onChange={e => setContent(e.target.value)}></textarea>
                    <input type='submit' value={'Save Post'} />
                </form>
            </>

        </section>
    )
}

export default EditPostForm
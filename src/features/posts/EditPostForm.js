import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { useEditPostMutation, useGetPostQuery } from '../api/apiSlice'
import { Spinner } from '../../components/Spinner'

const EditPostForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { postId } = useParams()
    //const post = useSelector(state => selectPostById(state,postId))
    const {
        data: post,
        isFetching,
        isSuccess
    } = useGetPostQuery(postId)

    const [updatePost] = useEditPostMutation()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        if (isSuccess) {
            setTitle(post.title)
            setContent(post.content)
        }
    }, [isSuccess])
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if (title && content) {
            await updatePost({ id: postId, title, content })
            navigate(`/posts/${postId}`)
        }
    }

    let form
    if (isFetching) {
        form = <Spinner text='Loading...' />
    } else if (isSuccess) {
        form = (
            <form onSubmit={e => onSubmitHandler(e)}>
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
        )
    }

    return (
        <section>
            <>
                <h2>Edit Post</h2>
                {form}
            </>

        </section>
    )
}

export default EditPostForm
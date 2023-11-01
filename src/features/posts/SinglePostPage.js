import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Author from './Author'
import TimeAgo from './TimeAgo'
import { useGetPostQuery } from '../api/apiSlice'
import { Spinner } from '../../components/Spinner'

const SinglePostPage = () => {
  const { postId } = useParams()

  const {
    data: post,
    isFetching,
    isSuccess
  } = useGetPostQuery(postId)

  let content
  if (isFetching) {
    content = <Spinner text='Loading...' />
  } else if (isSuccess) {
    content = (
      <article className='post'>
        <h2>{post.title}</h2>
        <Author userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <p className='post-content'>{post.content}</p>
        <Link to={`/editPost/${postId}`} className='button muted-button'>Edit </Link>
      </article >
    )
  }
  return (
    <section>{content}</section >
  )
}

export default SinglePostPage
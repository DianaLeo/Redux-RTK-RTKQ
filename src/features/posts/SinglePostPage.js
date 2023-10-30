import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Author from './Author'
import TimeAgo from './TimeAgo'
import { selectPostById } from './postsSlice'

const SinglePostPage = () => {
  const { postId } = useParams()
  const post = useSelector(state=>selectPostById(state,postId))
  console.log('postId',postId,'post',post);

  return (
    <section>
      {post ? (
        <article className='post'>
          <h2>{post.title}</h2>
          <Author userId={post.userId}/>
          <TimeAgo timestamp={post.date}/>
          <p className='post-content'>{post.content}</p>
          <Link to={`/editPost/${postId}`} className='button muted-button'>Edit </Link>
        </article>
      ) : (
        <h2>Post not found</h2>
      )}
    </section>
  )
}

export default SinglePostPage
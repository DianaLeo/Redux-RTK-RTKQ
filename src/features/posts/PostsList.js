import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Author from './Author'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButton'
import { selectAllPosts, selectPostById, selectPostIds } from './postsSlice'
import {Spinner} from '../../components/Spinner'

// Taking ID as the argument rather than POST can improve the performance
// because IDs won't change (unless the sorting function changes)
// but POST can changes a lot, because it is a reference, any field change will cause POST change
// How to get the sorted ID? by createEntityAdapter
const PostExcerpt = ({postId})=>{
  const post = useSelector(state=>selectPostById(state,postId))

  return (
    <article className='post-excerpt' key={postId}>
          <h3>{post.title}</h3>
          <Author userId={post.user} />
          <TimeAgo timestamp={post.date} />
          <p className='post-content'>{post.content.substring(0, 100)}</p>
          <Link to={`posts/${postId}`} className='button muted-button'>View </Link>
          <Link to={`editPost/${postId}`} className='button muted-button'>Edit </Link>
          <ReactionButtons post={post} />
        </article>
  )
}

const PostsList = () => {
  const orderedPostIds = useSelector(selectPostIds)
  const postStatus = useSelector(state => state.posts.status)
  const postError = useSelector(state=>state.posts.error)

  let content

  if (postStatus==='loading') {
    content = <Spinner text='Loading...' />
  } else if (postStatus==='succeeded') {
    content = orderedPostIds.map(postId => (
        <PostExcerpt key={postId} postId={postId} />
      ))
  } else if (postStatus==='failed'){
    content = <div>{postError}</div>
  }

  return (
    <section className='posts-list'>
      <h2>Posts</h2>
      {content}
    </section>
  )
}

export default PostsList
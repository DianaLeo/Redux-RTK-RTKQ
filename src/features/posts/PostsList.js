import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Author from './Author'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButton'
import { fetchPosts, selectAllPosts } from './postsSlice'
import {Spinner} from '../../components/Spinner'

const PostExcerpt = ({post})=>{
  return (
    <article className='post-excerpt' key={post.id}>
          <h3>{post.title}</h3>
          <Author userId={post.user} />
          <TimeAgo timestamp={post.date} />
          <p className='post-content'>{post.content.substring(0, 100)}</p>
          <Link to={`posts/${post.id}`} className='button muted-button'>View </Link>
          <Link to={`editPost/${post.id}`} className='button muted-button'>Edit </Link>
          <ReactionButtons post={post} />
        </article>
  )
}

const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)
  const postStatus = useSelector(state => state.posts.status)
  const postError = useSelector(state=>state.posts.error)


  // useEffect(() => {
  //   if (postStatus === 'idle') {
  //     dispatch(fetchPosts())
  //   }
  // }, [postStatus,dispatch])

  let content

  if (postStatus==='loading') {
    content = <Spinner text='Loading...' />
  } else if (postStatus==='succeeded') {
    const orderedPosts = posts.toSorted((a, b) => b.date.localeCompare(a.date))
    content = orderedPosts.map((post) => (
        <PostExcerpt key={post.id} post={post} />
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
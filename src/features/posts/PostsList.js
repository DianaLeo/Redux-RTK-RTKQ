import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Author from './Author'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButton'
import { Spinner } from '../../components/Spinner'
import { apiSlice, useAddNewPostMutation, useGetPostsQuery } from '../api/apiSlice'
import classnames from 'classnames'
import { createSelector } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

const PostExcerpt = ({ post }) => {
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

const PostsList = ({isAddPostLoading}) => {
  const {
    data: posts = [],
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery()

  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => b.date.localeCompare(a.date))
  }, [posts])

  // Why I can't get 'isLoading' for useAddNewPostMutation for a second time?
  // Why this is always false here?
  // when inside AddPostForm component, this value changes normally
  const [addNewPost, { isLoading: isAddNewPostLoading }] = useAddNewPostMutation()

  // If use this method, don't know mutations.ID
  //const isAddNewPostLoading = useSelector(state=>state.api.mutations.ID?.status)

  let content

  if (isLoading) {
    content = <Spinner text='Loading...' />
  } else if (isSuccess) {
    const renderedPosts = sortedPosts.map(post => (
      <PostExcerpt key={post.id} post={post} />
    ))    
    const containerClassname = classnames('posts-container', { disabled: isAddPostLoading || isFetching })
    content = <div className={containerClassname}>{renderedPosts}</div>
  } else if (isError) {
    content = <div>{error}</div>
  }

  return (
    <section className='posts-list'>
      <h2>Posts</h2>
      <p>{`isAddNewPostLoading:${isAddNewPostLoading}`}</p>
      {content}
    </section>
  )
}

export default PostsList
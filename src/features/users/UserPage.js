import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { selectUserById } from "./usersSlice"
import { useGetPostsQuery } from "../api/apiSlice"
import { useMemo } from "react"
import { createSelector } from "@reduxjs/toolkit"

const UserPage = () => {
    const { userId } = useParams()
  
    const user = useSelector(state => selectUserById(state, userId))
  
    //const postsForUser = useSelector(state => selectPostByUser(state, userId))
    const selectPostsForUser = useMemo(()=>{
      return createSelector(
        res=>res.data,
        (res,userId)=>userId,
        (data,userId)=>data.filter(post=>post.user===userId) ?? []
      )
    },[])

    const {postsForUser} = useGetPostsQuery(undefined,{
      selectFromResult:result=>({
        postsForUser: selectPostsForUser(result,userId)
      })
    })
  
    const postTitles = postsForUser.map(post => (
      <li key={post.id}>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </li>
    ))
  
    return (
      <section>
        <h2>{user.name}</h2>
  
        <ul>{postTitles}</ul>
      </section>
    )
  }

export default UserPage
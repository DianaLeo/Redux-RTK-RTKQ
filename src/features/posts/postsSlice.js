import { createAsyncThunk, createSelector, createSlice, nanoid } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const initialState = {
    posts: [],
    status: 'idle',
    error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await client.get('/fakeApi/posts')
    return response.data
})

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost)=>{
    const response = await client.post('/fakeApi/posts',initialPost)
    return response.data
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        // this is deleted when change to thunk
        // postAdded: {
        //     reducer: (state, action) => {
        //         state.posts.push(action.payload)
        //     },
        //     prepare: (title, content, userId, reactions) => {
        //         return {
        //             payload: {
        //                 id: nanoid(),
        //                 date: new Date().toISOString(),
        //                 title,
        //                 content,
        //                 userId,
        //                 reactions
        //             }
        //         }
        //     }
        // },
        postEdited: (state, action) => {
            const { id, title, content } = action.payload
            const post = state.posts.find(post => post.id === id)
            if (post) {
                console.log('post', post.title);
                post.title = title
                post.content = content
            }
        },
        reactionAdded: (state, action) => {//haven't updated to server
            console.log(action.payload);
            const { postId, reactionName } = action.payload
            const post = state.posts.find(post => post.id === postId)
            if (post) {
                post.reactions[reactionName]++
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled,(state,action)=>{
                state.status = 'succeeded'
                state.posts = state.posts.concat(action.payload)
            })
            .addCase(fetchPosts.rejected,(state,action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewPost.fulfilled,(state,action)=>{
                state.posts.push(action.payload)
            })
    }
})

export const selectAllPosts = state => state.posts.posts // the state here is the root state
export const selectPostById = (state, postId) => state.posts.posts.find(post => post.id === postId)
export const selectPostByUser = createSelector(
    [selectAllPosts, (state,userId)=>userId],
    (posts,userId)=>posts.filter(post=>post.user===userId)
)
export const { postAdded, postEdited, reactionAdded } = postsSlice.actions

export default postsSlice.reducer
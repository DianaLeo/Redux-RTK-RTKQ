import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit'
import { client } from '../../api/client'

// Taking ID as the argument rather than POST can improve the performance
// because IDs won't change (unless the sorting function changes)
// but POST can changes a lot, because it is a reference, any field change will cause POST change
// How to get the sorted ID? by createEntityAdapter
const postsAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.date.localeCompare(a.date)
})

// getInitialState returns an empty {ids: [], entities: {}} plus what we provided
const initialState = postsAdapter.getInitialState({
    status: 'idle',
    error: null
})

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await client.get('/fakeApi/posts')
    return response.data
})

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
    const response = await client.post('/fakeApi/posts', initialPost)
    return response.data
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postEdited: (state, action) => {
            const { id, title, content } = action.payload
            const post = state.entities[id]
            if (post) {
                post.title = title
                post.content = content
            }
        },
        reactionAdded: (state, action) => {
            const { postId, reactionName } = action.payload
            const post = state.entities[postId]
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
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Use the `upsertMany` reducer as a mutating update utility
                postsAdapter.upsertMany(state, action.payload)
                //state.posts = state.posts.concat(action.payload)
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            // Use the `addOne` reducer for the fulfilled case
            .addCase(addNewPost.fulfilled, postsAdapter.addOne)
    }
})

export const {
    selectAll: selectAllPosts,//rename the selectors
    selectById: selectPostById,
    selectIds: selectPostIds
} = postsAdapter.getSelectors(state => state.posts)

// memorized selector to improve performance when immutably update the state
// filter will return a new array -> reference changes -> re-render
export const selectPostByUser = createSelector(
    [selectAllPosts, (state,userId)=>userId],
    (posts,userId)=>posts.filter(post=>post.user===userId)
)

export const { postAdded, postEdited, reactionAdded } = postsSlice.actions

export default postsSlice.reducer
/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define our single API slice object
export const apiSlice = createApi({
    // The cache reducer expects to be added at `state.api` (already default - this is optional)
    reducerPath: 'api',
    // All of our requests will have URLs starting with '/fakeApi'
    baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
    // A root tagTypes field in the API slice object, declaring an array of string tag names for data types such as 'Post'
    tagTypes: ['Post'],
    // The "endpoints" represent operations and requests for this server
    endpoints: builder => ({
        // The `getPosts` endpoint is a "query" operation that returns data
        getPosts: builder.query({
            // The URL for the request is '/fakeApi/posts'
            query: () => '/posts',
            // A providesTags array in query endpoints, listing a set of tags describing the data in that query
            providesTags: (result = [], error, arg) => [
                'Post',
                ...result.map(({ id }) => ({ type: 'Post', id }))
            ]
        }),
        // read the post entry from the cache in the store
        getPost: builder.query({
            query: postId => `/posts/${postId}`,
            providesTags: (result, error, arg) => [{ type: 'Post', id: arg }]
        }),
        addNewPost: builder.mutation({
            query: initialPost => ({
                url: '/posts',
                method: 'POST',
                body: initialPost
            }),
            // An invalidatesTags array in mutation endpoints, listing a set of tags that are invalidated every time that mutation runs
            invalidatesTags: ['Post']
        }),
        editPost: builder.mutation({
            query: post => ({
                url: `/posts/${post.id}`,
                method: 'PATCH',
                body: post
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'Post', id: arg.id }]
        }),
        addReaction: builder.mutation({
            query: ({ postId, reaction }) => ({
                url: `posts/${postId}/reactions`,
                method: 'POST',
                body: { reaction }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Post', id: arg.postId }
            ]
        })

    }),
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const {
    useGetPostsQuery,
    useGetPostQuery,
    useAddNewPostMutation,
    useEditPostMutation,
    useAddReactionMutation
} = apiSlice
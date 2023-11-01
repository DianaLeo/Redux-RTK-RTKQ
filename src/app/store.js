import { configureStore } from '@reduxjs/toolkit';
//import postsReducer from '../features/posts/postsSlice'
//import usersReducer from '../features/users/usersSlice'
import notificationReducer from '../features/notifications/notificationsSlice'
import newsReducer from '../features/news/newsSlice'
import { apiSlice } from '../features/api/apiSlice';

export default configureStore({
  reducer: {
    //posts: postsReducer,
    //users: usersReducer,
    notifications: notificationReducer,
    news: newsReducer,
    [apiSlice.reducerPath]:apiSlice.reducer
  },
  middleware:getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})

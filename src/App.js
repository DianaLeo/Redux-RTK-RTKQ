import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'

import Navbar from './app/Navbar'
import PostsList from './features/posts/PostsList'
import AddPostForm from './features/posts/AddPostForm'
import SinglePostPage from './features/posts/SinglePostPage'
import { Spinner } from './components/Spinner'
import EditPostForm from './features/posts/EditPostForm'
import UserList from './features/users/UserList'
import UserPage from './features/users/UserPage'
import NotificationsList from './features/notifications/NotificationList'
import NewsList from './features/news/NewsList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={(
            <div>
              <AddPostForm />
              <PostsList />
            </div>
          )} />
          <Route path='posts/:postId' element={<SinglePostPage />} />
          <Route path='editPost/:postId' element={<EditPostForm />} />
          <Route path='users' element={<UserList />} />
          <Route path='users/:userId' element={<UserPage />} />
          <Route path='notifications' element={<NotificationsList />} />
          <Route path='news' element={<NewsList />} />
        </Route>
        <Route path='*' element={<Spinner text='Not found' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

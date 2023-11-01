import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'

import { worker } from './api/server'
import { extendedApiSlice } from './features/users/usersSlice'
import { fetchNews } from './features/news/newsSlice'

// Wrap app rendering so we can wait for the mock API to initialize
async function start() {
  // Start our mock API server
  if (process.env.NODE_ENV === "development") {
    await worker.start({ onUnhandledRequest: 'bypass' })
  }

  store.dispatch(extendedApiSlice.endpoints.getUsers.initiate())
  //store.dispatch(fetchPosts())
  store.dispatch(fetchNews())

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

start()

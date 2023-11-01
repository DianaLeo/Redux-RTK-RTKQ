import { Outlet, Link } from 'react-router-dom'
import { fetchNotifications, selectAllNotifications } from '../features/notifications/notificationsSlice'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
  const dispatch = useDispatch()
  const notifications = useSelector(selectAllNotifications)
  const numUnreadNotifications = notifications.filter(n=>!n.read).length

  let unreadNotificationsBadge

  if (numUnreadNotifications > 0) {
    unreadNotificationsBadge = (
      <span className="badge">{numUnreadNotifications}</span>
    )
  }

  return (
    <>
      <nav>
        <section>
          <h1>Redux Essentials Example</h1>
          <div className="navContent">
            <div className="navLinks">
              <Link to={'/'}>Home</Link>
              <Link to={'/users'}>Users</Link>
              <Link to={'/notifications'}>Notifications {unreadNotificationsBadge}</Link>
              <Link to={'/news'}>News</Link>
            </div>
            <button className="button" onClick={() => {
              dispatch(fetchNotifications())
            }}>
              Refresh Notifications
            </button>
          </div>
        </section>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar

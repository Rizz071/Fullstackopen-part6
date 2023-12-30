import { useSelector } from 'react-redux'

const Notification = () => {

  const notifications = useSelector(({ notification }) => notification.notifications)
  let visible = useSelector(({ notification }) => notification.visible)




  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    visibility: visible
  }

  return (
    <div style={style}>
      {notifications.map(notification => <p key={Math.random(1000)} style={{ margin: '0', fontSize: '0.8em' }}>{notification}</p>)}
    </div>
  )
}

export default Notification
import { useContext } from "react"
import NotificationContext from "./NotificationContext"



const Notification = () => {
  const [notification, dispatchNotification, visibility, dispatchVisibility] = useContext(NotificationContext)


  console.log(visibility)


  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
    visibility: visibility
  }



  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification

import { createContext, useReducer } from 'react'


const reducerNotification = (state = '', action) => {
    switch (action.type) {
        case "ERROR":
            return action.payload
        case "VOTED":
            return `anecdote ${action.payload} voted`
        case "CREATED":
            return `new anecdote ${action.payload} was created`

        default:
            return state
    }
}

const reducerVisibility = (state = 'hidden', action) => {
    switch (action.type) {
        case "SET_VISIBLE":
            return 'visible'
        case "SET_HIDDEN":
            return `hidden`

        default:
            return state
    }
}

const NotificationContext = createContext()


export const NotificationContextProvider = (props) => {
    const [notification, dispatchNotification] = useReducer(reducerNotification, '')
    const [visibility, dispatchVisibility] = useReducer(reducerVisibility, 'hidden')

    return (
        <NotificationContext.Provider value={[notification, dispatchNotification, visibility, dispatchVisibility]}>
            {props.children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext







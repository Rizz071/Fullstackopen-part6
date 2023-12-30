import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    notifications: [],
    visible: 'hidden'
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        sendMessage(state, action) {
            state.visible = 'visible'
            if (state.notifications.length > 2) state.notifications.shift()
            state.notifications.push(action.payload)
        },
        hideMessages(state) {
            state.visible = 'hidden'
        }

    }
})


export const { sendMessage, hideMessages } = notificationSlice.actions
export default notificationSlice.reducer
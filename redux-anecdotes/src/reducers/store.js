import { configureStore } from '@reduxjs/toolkit'

import anecdoteSlice from './anecdoteReducer'
import filterSlice from './filterReducer'
import notificationSlice from './notificationReducer'


const store = configureStore({
    reducer: {
        anecdotes: anecdoteSlice,
        filter: filterSlice,
        notification: notificationSlice
    }
})

export default store
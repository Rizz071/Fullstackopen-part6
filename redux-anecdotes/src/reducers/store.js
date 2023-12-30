import { configureStore } from '@reduxjs/toolkit'

import anecdoteSlice from './anecdoteReducer'
import filterSlice from './filterReducer'


const store = configureStore({
    reducer: {
        anecdotes: anecdoteSlice,
        filter: filterSlice
    }
})

export default store
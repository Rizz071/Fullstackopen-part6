import { createSlice } from "@reduxjs/toolkit"

const initialState = { string: '' }

const filterSlice = createSlice({
    name: 'filterAnecdotes',
    initialState,
    reducers: {
        setFilterString(state, action) {
            return { string: action.payload.string }
        }
    }
})


export const { setFilterString } = filterSlice.actions
export default filterSlice.reducer
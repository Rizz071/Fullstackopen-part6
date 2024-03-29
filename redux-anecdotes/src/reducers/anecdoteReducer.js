import { createSlice } from "@reduxjs/toolkit"
import anecdotesService from '../services/anecdotes'

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }


// const initialState = anecdotesAtStart.map(asObject)


const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {

    vote(state, action) {

      //Modifying Vote counter
      state.forEach(anecdote => {
        if (anecdote.id === action.payload.id) anecdote.votes += 1
        return anecdote
      })

      //Modifying order of entities in array
      state = [...state.sort((a, b) => b.votes - a.votes)]

    },
    addAnecdote(state, action) {
      return state.concat(action.payload.newAnecdote)
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      state.push(...action.payload)
    }
  }
})


export const { vote, addAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions



export const initializeNotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = id => {
  return async dispatch => {
    await anecdotesService.voteAnecdote(id)
    dispatch(vote({ id: id }))
  }
}


export default anecdoteSlice.reducer

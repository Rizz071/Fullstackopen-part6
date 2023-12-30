

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}


//Action creator
const vote = (id) => {
  console.log('vote', id)

  return (
    {
      type: 'VOTE',
      payload: { id }
    }
  )
}


//Action creator
const addAnecdote = (newAnecdote) => {
  return (
    {
      type: 'ADD_NEW',
      payload: {
        newAnecdote
      }
    })
}


//Sorting by votes
const getInOrderByVotes = (arr) => {
  return arr.sort((a, b) => b.votes - a.votes)
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'VOTE':
      return getInOrderByVotes(state.map(anecdote => {
        if (anecdote.id === action.payload.id) anecdote.votes += 1
        return anecdote
      }))

    case 'ADD_NEW':
      return state.concat(asObject(action.payload.newAnecdote))


    default:
      return state
  }
}

export { anecdoteReducer, vote, addAnecdote }
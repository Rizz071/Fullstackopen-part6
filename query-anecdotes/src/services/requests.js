import axios from 'axios'

export const getAllAnecdotes = () =>
    axios.get('http://localhost:3001/anecdotes').then(res => res.data)

export const createAnecdote = newAnecdote =>
    axios.post('http://localhost:3001/anecdotes', newAnecdote).then(res => res.data)

export const voteAnecdote = async (id) => {
    const anecdote = await axios.get(`http://localhost:3001/anecdotes/${id}`)
    const result = await axios.put(`http://localhost:3001/anecdotes/${id}`, { ...anecdote.data, votes: anecdote.data.votes + 1 })
    return result.data
}
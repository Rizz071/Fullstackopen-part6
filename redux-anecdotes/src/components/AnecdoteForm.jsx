import { useDispatch } from 'react-redux'
import { addAnecdote } from "../reducers/anecdoteReducer"

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const handleAnecdoteSubmit = (event) => {
        event.preventDefault()

        dispatch(addAnecdote({ newAnecdote: event.target.anecdote.value }))
    }

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={handleAnecdoteSubmit}>
                <div>Input new anecdote: <input name='anecdote' /></div>
                <button type='submit'>create</button>
            </form>
        </>
    )
}



export default AnecdoteForm
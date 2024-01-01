import { useDispatch } from 'react-redux'
import { createAnecdote } from "../reducers/anecdoteReducer"
import { pushNotification } from "../reducers/notificationReducer"

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const handleAnecdoteSubmit = async (event) => {
        event.preventDefault()


        // const newAnecdote = await anecdoteService.createNew(event.target.anecdote.value)
        dispatch(createAnecdote(event.target.anecdote.value))

        event.target.anecdote.value = ''


        dispatch(pushNotification('New anecdote added!'))
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
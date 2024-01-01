import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { pushNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(({ anecdotes, filter }) => anecdotes.filter(anecdote => anecdote.content.includes(filter.string)))

    const dispatch = useDispatch()

    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id} style={{ marginBottom: '5px' }}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => {

                            dispatch(voteAnecdote(anecdote.id))

                            dispatch(pushNotification('New vote added!'))

                        }}>vote</button>
                    </div>
                </div>)
            }
        </div >
    )
}



export default AnecdoteList
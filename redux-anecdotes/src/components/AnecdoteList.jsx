import { useSelector, useDispatch } from 'react-redux'
import { vote } from "../reducers/anecdoteReducer"
import { sendMessage, hideMessages } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(({ anecdotes, filter }) => anecdotes.filter(anecdote => anecdote.content.includes(filter.string)))

    const dispatch = useDispatch()

    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => {

                            dispatch(vote({ id: anecdote.id }))

                            dispatch(sendMessage('New vote added!'))
                            setTimeout(() => {
                                dispatch(hideMessages())
                            }, 5000)

                        }}>vote</button>
                    </div>
                </div>)}
        </div>
    )
}



export default AnecdoteList
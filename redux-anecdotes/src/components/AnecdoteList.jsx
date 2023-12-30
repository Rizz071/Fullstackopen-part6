import { useSelector, useDispatch } from 'react-redux'
import { vote } from "../reducers/anecdoteReducer"

const AnecdoteList = () => {
    const anecdotes = useSelector(({ anecdotes, filter }) => anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.string)))
    // const filter = useSelector(state => state.filter)

    // console.log('filter: ', filter.string)

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
                        <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
                    </div>
                </div>)}
        </div>
    )
}



export default AnecdoteList
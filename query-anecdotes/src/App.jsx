import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { getAllAnecdotes, voteAnecdote } from './services/requests'
import NotificationContext from './components/NotificationContext'
import { useContext } from 'react'



const App = () => {
  const [notification, dispatchNotification, visibility, dispatchVisibility] = useContext(NotificationContext)


  const queryClient = useQueryClient()

  const newAnecdoteMutation = useMutation({
    mutationFn: voteAnecdote,
    onSuccess: (anecdote) => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })

      dispatchVisibility({ type: 'SET_VISIBLE' })
      dispatchNotification({ type: 'VOTED', payload: anecdote.content })
      setTimeout(() => {
        dispatchVisibility({ type: 'SET_HIDDEN' })
      }, 5000)
    }
  })


  const handleVote = (anecdote) => {
    console.log('vote')

    newAnecdoteMutation.mutate(anecdote.id)
  }

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAllAnecdotes
  })


  if (result.isLoading) {
    return <div>loading data...</div>
  }

  if (result.isError) {
    return <div>anectode service not available due to problems on server...</div>
  }

  if (result.isSuccess) {

    const anecdotes = result.data

    return (
      <div>
        <h3>Anecdote app</h3>

        <Notification />
        <AnecdoteForm />

        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
          </div>
        )}
      </div>
    )
  }

  // const anecdotes = [
  //   {
  //     "content": "If it hurts, do it more often",
  //     "id": "47145",
  //     "votes": 0
  //   },
  // ]


}

export default App

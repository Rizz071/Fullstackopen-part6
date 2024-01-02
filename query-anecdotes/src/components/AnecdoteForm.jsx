import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAllAnecdotes, createAnecdote } from '../services/requests'
import { useContext } from 'react'
import NotificationContext from './NotificationContext'


const AnecdoteForm = () => {
  const [notification, dispatchNotification, visibility, dispatchVisibility] = useContext(NotificationContext)


  const queryClient = useQueryClient()

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (anecdote) => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })

      dispatchVisibility({ type: 'SET_VISIBLE' })
      dispatchNotification({ type: 'CREATED', payload: anecdote.content })
      setTimeout(() => {
        dispatchVisibility({ type: 'SET_HIDDEN' })
      }, 5000)

    },
    onError: (error) => {
      console.log(error)

      let error_text = ''
      if (error.response.data.error === 'too short anecdote, must have length 5 or more') {
        error_text = error.response.data.error
      } else {
        error_text = error.message
      }

      dispatchVisibility({ type: 'SET_VISIBLE' })
      dispatchNotification({ type: 'ERROR', payload: error_text })
      setTimeout(() => {
        dispatchVisibility({ type: 'SET_HIDDEN' })
      }, 5000)
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('new anecdote')

    newAnecdoteMutation.mutate({ content, votes: 0 })
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm

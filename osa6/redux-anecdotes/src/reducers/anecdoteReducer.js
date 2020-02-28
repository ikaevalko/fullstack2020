import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'VOTE':
      const id = action.data
      const anecdote = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdote,
        votes: anecdote.votes + 1
      }
      const updated = state.map(a =>
          a.id !== id ? a : changedAnecdote
        )
      return updated.sort((a, b) => b.votes - a.votes)
    case 'CREATE':
      return state.concat(action.data)
    case 'INIT':
      return action.data.sort((a, b) => b.votes - a.votes)
    default:
      return state
  }
}

export const vote = (anecdote) => {
  return async dispatch => {
    const changed = await anecdoteService.vote(anecdote)
    dispatch({
      type: 'VOTE',
      data: changed.id
    })
  }
}

export const createAnecdote = (data) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(data)
    dispatch({
      type: 'CREATE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      data: anecdotes
    })
  }
}

export default reducer
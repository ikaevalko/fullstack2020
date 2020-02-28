const notificationReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET':
      return action.message
    case 'REMOVE':
      return ''
    default:
      return state
  }
}

let timeoutID

export const setNotification = (message, timeout) => {
  return dispatch => {
    dispatch({
      type: 'SET',
      message
    })

    if (timeoutID) {
      clearTimeout(timeoutID)
    }

    timeoutID = setTimeout(() => {
      dispatch(removeNotification())
    }, timeout)
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVE'
  }
}

export default notificationReducer
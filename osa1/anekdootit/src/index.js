import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>
        {text}
      </button>
    </>
  )
}

const Anecdote = ({ text, votes }) => {
  return (
    <>
      {text}<br />
      has {votes} votes
    </>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(props.anecdotes.length).fill(0))

  const setRandom = () => {
    setSelected(Math.floor(Math.random() * Math.floor(props.anecdotes.length)))
  }

  const addVote = anecdote => {
    const copy = [...votes]
    copy[anecdote] += 1
    setVotes(copy)
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <Anecdote text={props.anecdotes[selected]} votes={votes[selected]} /><br />
      <Button handleClick={() => addVote(selected)} text='vote' />
      <Button handleClick={() => setRandom()} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
      <Anecdote text={props.anecdotes[votes.indexOf(Math.max(...votes))]} 
                votes={votes[votes.indexOf(Math.max(...votes))]} />
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
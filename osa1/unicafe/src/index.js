import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = (props) => {
  const sum = props.good + props.neutral + props.bad

  if (props.good !== 0 || props.neutral !== 0 || props.bad !== 0) {
    return (
      <>
        <table>
          <tbody>
            <StatisticsLine text='good' value={props.good} />
            <StatisticsLine text='neutral' value={props.neutral} />
            <StatisticsLine text='bad' value={props.bad} />
            <StatisticsLine text='all' value={sum} />
            <StatisticsLine text='average' value={(props.good - props.bad) / sum} />
            <StatisticsLine text='positive' value={props.good * 100 / sum + ' %'} />
          </tbody>
        </table>
      </>
    )
  }

  return (
    <>
      No feedback given
    </>
  )
}

const StatisticsLine = ({ text, value }) => {
  return (
    <>
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <Header text={'give feedback'} />
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Header text={'statistics'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
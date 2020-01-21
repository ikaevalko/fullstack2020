import React from 'react'

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </>
  )
}

const Header = ({ name }) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part => 
        <Part key={part.id} part={part} />)
      }
      <Total parts={parts} />
    </>
  )
}

const Part = ({ part }) => {
	return (
		<>
			<p>{part.name} {part.exercises}</p>
		</>
	)
}

const Total = ({ parts }) => {
	return (
		<>
			<b>
        total of {parts.reduce((sum, cur) => sum + cur.exercises, 0)} exercices
      </b>
		</>
	)
}

export default Course
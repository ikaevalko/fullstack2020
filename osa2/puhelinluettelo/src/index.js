import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Person = ({ person }) => {
  return (
    <>
      {person.name} {person.number}
    </>
  )
}

const PersonForm = (props) => {
  return (
    <>
      <form onSubmit={props.addPerson}>
        name: <input value={props.newName} onChange={props.handleNameChange} /><br />
        number: <input value={props.newNumber} onChange={props.handleNumberChange} /><br />
        <button type="submit">add</button>
      </form>
    </>
  )
}

const Persons = ({ persons }) => {
  return (
    <>
      {persons.map((person) => 
        <Person key={person.name} person={person} />
      )}
    </>
  )
}

const Filter = (props) => {
  return (
    <>
      filter shown with <input value={props.filter} onChange={props.handleFiltering} />
    </>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()

    let nameExists = false

    persons.forEach(person => {
      if(person.name === newName) {
        alert(`${newName} is already added to phonebook`)
        nameExists = true
      }
    })

    if(!nameExists) {
      setPersons(persons.concat({name: newName, number: newNumber}))
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFiltering = (event) => {
    setFilter(event.target.value)
  }

  return (
    <>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFiltering={handleFiltering} />

      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} 
                  handleNameChange={handleNameChange}
                  handleNumberChange={handleNumberChange}
                  newName={newName}
                  newNumber={newNumber} />

      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))

export default App
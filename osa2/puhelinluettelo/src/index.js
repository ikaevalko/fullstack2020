import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import personService from './services/persons'

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

const Persons = ({ persons, handleRemove }) => {
  return (
    <>
      {persons.map(person =>
        <div key={person.name}>
          <Person person={person} />
          <button onClick={() => handleRemove(person)}>
            delete
          </button>
        </div>
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

const Notification = ({ message }) => {

  const notificationStyle = {
    background: 'lightgreen',
    fontSize: 16,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  if (message === null) {
    return null
  }

  return (
    <div style={notificationStyle}>
      {message}
    </div>
  )
}

const Error = ({ message }) => {

  const errorStyle = {
    background: '#ff4d4d',
    fontSize: 16,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  if (message === null) {
    return null
  }

  return (
    <div style={errorStyle}>
      {message}
    </div>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ notification, setNotification ] = useState(null)
  const [ error, setError ] = useState(null)
  const [ isError, setIsError ] = useState(false)

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase()))

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  const addPerson = event => {
    event.preventDefault()

    let nameExists = false

    persons.forEach(person => {
      if(person.name === newName) {
        nameExists = true

        if(window.confirm(`${newName} is already added to phonebook. Replace the old number with a new one?`)) {

          const changedPerson = {...person, number: newNumber}

          personService
            .replace(changedPerson)
            .then(returnedPerson => {
              setPersons(persons.map(person => 
                person.id !== changedPerson.id
                ? person
                : returnedPerson
              ))
            })
            .catch(e => {
              setIsError(true)
              setError(`Information of ${changedPerson.name} has already been removed from server`)

              setTimeout(() => {
                setError(null)
              }, 5000)
            })

          setIsError(false)
          setNotification(`Replaced number of ${changedPerson.name}`)

          setTimeout(() => {
            setNotification(null)
          }, 5000)
        }
      }
    })

    if(!nameExists) {
      const newPerson = {
        name: newName,
        number: newNumber
      }

      personService
        .create(newPerson)
        .then(returnedPerson => setPersons(persons.concat(returnedPerson)))

      setIsError(false)
      setNotification(`Added ${newName}`)

      setTimeout(() => {
        setNotification(null)
      }, 5000)
    }
    setNewName('')
    setNewNumber('')
  }

  const removePerson = personToRemove => {
    if(window.confirm(`Delete ${personToRemove.name} ?`)) {
      
      personService
        .remove(personToRemove.id)

      setPersons(persons.filter(person => person.id !== personToRemove.id))

      setNotification(`Deleted ${personToRemove.name}`)

      setTimeout(() => {
        setNotification(null)
      }, 5000)
    }
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
      {isError
        ? <Error message={error} />
        : <Notification message={notification} />
      }
      
      <Filter filter={filter} handleFiltering={handleFiltering} />

      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} 
                  handleNameChange={handleNameChange}
                  handleNumberChange={handleNumberChange}
                  newName={newName}
                  newNumber={newNumber} />

      <h2>Numbers</h2>
      <Persons persons={personsToShow} handleRemove={removePerson} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App
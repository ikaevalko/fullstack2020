import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const Country = (props) => {
  return (
    <div>
      <h1>{props.country.name}</h1>
      capital {props.country.capital}<br />
      population {props.country.population}
      <h2>languages</h2>
      <ul>
        {props.country.languages.map(language => 
          <li key={language.name}>{language.name}</li>
        )}
      </ul>
      <br />
      <img src={props.country.flag} width='100' alt='' />
    </div>
  )
}

const App = () => {

  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter ] = useState('')

  const countriesToShow = countries.filter(
    country => country.name.toLowerCase().includes(filter.toLowerCase()))

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => setCountries(response.data))
  }, [])

  const handleFiltering = (event) => {
    setFilter(event.target.value)
  }

  return (
    <>
      find countries <input value={filter} onChange={handleFiltering} /><br />
      {countriesToShow.length > 10 &&
        'Too many matches, specify another filter'
      }
      {countriesToShow.length > 1 && countriesToShow.length < 11 &&
        countriesToShow.map(country => 
          <div key={country.name}>
            {country.name}
            <button onClick={() => setFilter(country.name)}>
              show
            </button>
          </div>
        )
      }
      {countriesToShow.length < 2 &&
        countriesToShow.map(country => 
          <Country key={country.name} country={country} />)
      }
    </>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))
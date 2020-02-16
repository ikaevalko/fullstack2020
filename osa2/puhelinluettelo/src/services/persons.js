import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
  return axios
    .get(baseUrl)
    .then(response => response.data)
}

const create = newPerson => {
  return axios
    .post(baseUrl, newPerson)
    .then(response => response.data)
}

const remove = personId => {
  axios.delete(`${baseUrl}/${personId}`)
}

const replace = person => {
  return axios
    .put(`${baseUrl}/${person.id}`, person)
    .then(response => response.data)
}

export default {getAll, create, remove, replace}
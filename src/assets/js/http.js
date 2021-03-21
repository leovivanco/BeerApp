import axios from 'axios'
const URL = 'https://api.punkapi.com/v2/beers'

const axiosInstance = axios.create({
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept'
  }
})

export const getBeers = () => axiosInstance(URL)
export const getBeersById = (id) => axiosInstance(`${URL}/${id}`)

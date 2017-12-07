import axios from 'axios'

export default {
  getExchangeRates: () => {
    return axios.get('https://blockchain.info/es/ticker').then(response => {
      return response.data
    })
  }
}

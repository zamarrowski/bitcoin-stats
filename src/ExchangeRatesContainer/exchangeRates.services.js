import axios from 'axios'

export default {
  getExchangeRates: () => {
    return axios.get('https://blockchain.info/es/ticker').then(response => {
      return response.data
    })
  },
  convertToBTC: (value, currency) => {
    return axios.get(`https://blockchain.info/tobtc?currency=${currency}&value=${value}`).then(response => {
      return response.data
    })
  }
}

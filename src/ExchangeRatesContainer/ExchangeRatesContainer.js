import React, { Component } from 'react'
import Ionicon from 'react-ionicons'

import { Container } from './styles'
import ExchangeRate from './../ExchangeRate/ExchangeRate'
import TitleSection from './../common/TitleSection'
import colors from './../styles/colors'
import exchangeRatesServices from './exchangeRates.services'

class ExchangeRatesContainer extends Component {

  constructor() {
    super()
    this.state = {
      oldExchangeRates: null,
      newExchangeRates: null,
      toBTC: {}
    }
  }

  componentDidMount() {
    this._getExchanges()
    //setInterval(() => {
    //  this._getExchanges()
    //}, 5000)

  }

  render() {
    return(
      <div>
      <TitleSection>
        <Ionicon icon="md-globe"
          color={colors.main}
          style={{verticalAlign: "bottom", marginRight: "5px"}}
          fontSize="1.2em"
        />
        Exchange rates
      </TitleSection>
      <Container>
        {Object.keys(this.state.newExchangeRates || {}).map((key, index) => (
          <ExchangeRate name={key}
            newInfo={this.state.newExchangeRates[key] || {}}
            oldInfo={this.state.oldExchangeRates[key] || {}}
            key={index}
            toBTC={this.state.toBTC[key]}
            onTypeQuantity={this._getExchange.bind(this)}
          />
        ))}
      </Container>
      </div>
    )
  }

  _getExchange(value, currency) {
    value = Number(value)
    if (value) {
      exchangeRatesServices.convertToBTC(value, currency).then(response => {
        let toBTC = Object.assign({}, this.state.toBTC)
        toBTC[`${currency}`] = response
        this.setState({ toBTC })
      })
    }
  }

  _getExchanges() {
    exchangeRatesServices.getExchangeRates().then(exchangeRates => {
      if (!this.state.newExchangeRates) {
        this.setState({ newExchangeRates: exchangeRates, oldExchangeRates: exchangeRates })
      } else {
        this.setState((state) => {
          return {
            newExchangeRates: exchangeRates,
            oldExchangeRates: state.newExchangeRates
          }
        })
      }
    })
  }

}

export default ExchangeRatesContainer

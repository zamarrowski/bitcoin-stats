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
      exchangeRates: {}
    }
  }

  componentDidMount() {
    exchangeRatesServices.getExchangeRates().then(exchangeRates => this.setState({ exchangeRates }))
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
        {Object.keys(this.state.exchangeRates).map((key, index) => (
          <ExchangeRate name={key} info={this.state.exchangeRates[key]} key={index}/>
        ))}
      </Container>
      </div>
    )
  }
}

export default ExchangeRatesContainer

import React, { Component } from 'react'
import Paper from 'material-ui/Paper'

import { ExchangeRateContainer } from './styles'

class ExchangeRate extends Component {
  render() {
    return(
      <ExchangeRateContainer>
        <Paper zDepth={1}>
          <h1>Cambio</h1>
        </Paper>
      </ExchangeRateContainer>
    )
  }
}

export default ExchangeRate

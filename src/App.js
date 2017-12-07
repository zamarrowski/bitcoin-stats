import React, { Component } from 'react'

import AppContainer from './common/AppContainer'
import Header from './Header/Header'
import ExchangeRatesContainer from './ExchangeRatesContainer/ExchangeRatesContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <AppContainer>
          <ExchangeRatesContainer/>
        </AppContainer>
      </div>
    )
  }
}

export default App

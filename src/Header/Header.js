import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'

import { BitcoinIcon, PageTitle } from './styles'
import bitcoinImage from './../images/icon_bitcoin.png'

class Header extends Component {
  render() {
    return (
      <div>
        <AppBar
          title={
            <div>
              <BitcoinIcon src={bitcoinImage}/>
              <PageTitle>Bitcoin stats</PageTitle>
            </div>
          }
          showMenuIconButton={false}
        />
      </div>
    )
  }
}

export default Header

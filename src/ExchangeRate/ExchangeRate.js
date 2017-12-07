import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Ionicon from 'react-ionicons'

import { ExchangeRateContainer, MoneyTitle, Label, Value } from './styles'
import colors from './../styles/colors'

const getIcon = (newValue, lastValue) => {
  if (newValue > lastValue) {
    return 'ios-arrow-dropup-circle'
  } else if (newValue < lastValue) {
    return 'ios-arrow-dropdown-circle'
  }
}

const getColor = (newValue, lastValue) => {
  if (newValue > lastValue) {
    return colors.secondary
  } else if (newValue < lastValue) {
    return colors.red
  }
}

export default props =>
  <ExchangeRateContainer>
    <Paper style={{padding: '10px'}} zDepth={1}>
      <MoneyTitle>
        {props.newInfo.symbol} - {props.name}
        <Ionicon
          fontSize="1.3em"
          style={{ marginLeft: '5px', verticalAlign: 'bottom'}}
          icon={getIcon(props.newInfo.last, props.oldInfo.last)}
          color={getColor(props.newInfo.last, props.oldInfo.last)}
        />
      </MoneyTitle>
      <div>
        <Label>Value: </Label> <Value>{props.newInfo['last']}{props.newInfo.symbol}</Value>
      </div>
      <div>
        <p>Convert {props.name} to Bitcoin:</p>
        <TextField
           hintText="Quantity"
           fullWidth={true}
           onChange={(e, value) => props.onTypeQuantity(value, props.name)}
         /><br />
         In BTC {props.toBTC}
      </div>
    </Paper>
  </ExchangeRateContainer>

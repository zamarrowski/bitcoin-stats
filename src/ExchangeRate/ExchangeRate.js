import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'

import { ExchangeRateContainer, MoneyTitle, Label, Value } from './styles'

export default props =>
  <ExchangeRateContainer>
    <Paper style={{padding: '10px'}} zDepth={1}>
      <MoneyTitle>{props.newInfo.symbol} - {props.name}</MoneyTitle>
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

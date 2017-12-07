import styled from 'styled-components'

import colors from './../styles/colors'

export const ExchangeRateContainer = styled.div`
  width: 32%;
  margin-bottom: 20px;
`
export const MoneyTitle = styled.h3`
  text-align: center;
  padding-bottom: .3em;
  color: ${colors.main};
  border-bottom: 1px solid ${colors.main};
`

export const Label = styled.label`
  color: ${colors.main};
  font-weight: 800;
  font-size: 1.3em;
`

export const Value = styled.span`
  font-weight: 800;
  font-size: 1.3em;
`

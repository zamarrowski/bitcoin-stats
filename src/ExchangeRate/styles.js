import styled from 'styled-components'

import colors from './../styles/colors'

export const ExchangeRateContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: 900px) {
    width: 48%;
  }

  @media (min-width: 1024px) {
    width: 32%;
  }

  @media (min-width: 1200px) {
    width: 24%;
  }
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

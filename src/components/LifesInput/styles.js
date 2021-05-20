import styled from '@emotion/styled'
import {colors} from 'config/styles'

export const Label = styled.label`
  display: block;
  text-align: center;
  font-size: 20px;
  font-weight: 100;
`

export const RangeContainer = styled.div`
  display: flex;
  margin: 1rem 0;
  justify-content: center;
`

export const RangeOfLifes = styled.input`
  margin-right: 1rem;
`

export const NumberOfLife = styled.span`
  padding: .25rem;
  border-radius: 50%;
  background-color: ${colors.secondary};
  font-size: 14px;
  font-weight: 600;
  width: 1rem;
  height: 1rem;
  text-align: center;
  color: ${colors.background}
`
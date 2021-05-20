import styled from '@emotion/styled'
import {colors} from 'config/styles'

export const Label = styled.label`
  display: block;
  text-align: center;
  font-size: 20px;
  font-weight: 100;
`

export const NameInput = styled.input`
  display: block;
  margin: 1rem auto;
  outline: none;
  border: 1px solid ${colors.secondary};
  padding: .5rem;
  border-radius: 25px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  text-align: center;

  :focus {
    box-shadow: 0 0 0 4px #65adde40; 
  }
`
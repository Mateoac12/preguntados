import styled from '@emotion/styled'
import {colors} from 'config/styles'

export const ButtonSubmit = styled.button`
  display: block;
  margin: 1rem auto;
  padding: .5rem;
  font-size: 22px;
  outline: none;
  border: none;
  border-radius: 1rem;
  min-width: 40%;
  background-color: ${colors.secondary};
  color: ${colors.background};
  cursor: pointer;
  transform: scale(1);
  transition: transform .2s;

  :hover {
    transform: scale(1.1);
  }
`
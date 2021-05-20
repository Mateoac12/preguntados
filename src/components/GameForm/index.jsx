import React from 'react'
import { useLocation } from 'wouter'

import LifesInput from 'components/LifesInput'
import UsernameInput from 'components/UsernameInput'

import { ButtonSubmit } from './styles'

const GameForm = () => {
  const [, setLocation] = useLocation()

  const handlePlayGame = (e) => {
    e.preventDefault()
    setLocation('/play')
  }

  return <form onSubmit={handlePlayGame}>
    <LifesInput />
    <UsernameInput />
    <ButtonSubmit>Jugar!</ButtonSubmit>
  </form>
}

export default GameForm
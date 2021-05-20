import React from 'react'
import { GameContext } from 'context/gameContext'

import { Label, NameInput } from './styles'

const UsernameInput = () => {
  const { name, setName } = React.useContext(GameContext)

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  return <>
    <Label htmlFor="player-name">Cómo te quieres llamar?</Label>
    <NameInput type="text" id="player-name" value={name} onChange={handleChangeName} />
  </>
}

export default React.memo(UsernameInput)
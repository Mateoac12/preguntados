import { GameContext } from 'context/gameContext'
import React from 'react'

import { Label, RangeOfLifes, NumberOfLife, RangeContainer } from './styles'

const LifesInput = () => {
  const { lifes, setLifes } = React.useContext(GameContext)

  const handleChangeLifes = (e) => {
    setLifes(e.target.value)
  }

  return <>
    <Label>Elige tus vidas!</Label>
    <RangeContainer>
      <RangeOfLifes type="range" min="1" max="5" step="1" value={lifes} onChange={handleChangeLifes} />
      <NumberOfLife>{lifes}</NumberOfLife>
    </RangeContainer>
  </>
}

export default React.memo(LifesInput)
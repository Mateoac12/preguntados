import React from 'react'
import { GameContext } from 'context/gameContext'
import { LifeContext } from 'context/lifeContext'

const SingleAnswer = ({ answer, correct }) => {
  const { setLifes } = React.useContext(GameContext)
  const { setPoints } = React.useContext(LifeContext)

  const handleClickAnswer = () => {
    correct
      ? setPoints(lastPoint => lastPoint + 1)
      : setLifes(lastLife => lastLife - 1)
  }

  return <>
    <button onClick={handleClickAnswer}>{answer}</button>
  </>
}

export default SingleAnswer
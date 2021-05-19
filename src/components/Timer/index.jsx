import { GameContext } from 'context/gameContext'
import React, { useState, useEffect, useContext } from 'react'

const Timer = ({ question }) => {
  const [timer, setTimer] = useState(10)
  const { setLifes, lifes } = useContext(GameContext)

  useEffect(() => {
    setTimer(10)
  }, [question])

  useEffect(() => {
    handleStartTimer()
  }, [])

  const handleStartTimer = () => {
    setInterval(() => {
      setTimer(lastTime => lastTime - 1)
    }, 1000)
  }

  if (timer === 0) {
    setTimer(10)
    setLifes(lifes - 1)
  }


  return <h2>Timer: {timer} </h2>

}

export default Timer
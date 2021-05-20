import React from 'react'
import { useLocation } from 'wouter'

import { GameContext } from 'context/gameContext'
import { LifeContext } from 'context/lifeContext'

import UseQuestions from 'hooks/useQuestions'

import TableGame from 'components/TableGame'
import Timer from 'components/Timer'

const Quiz = () => {
  const [, setLocation] = useLocation()
  const { question, answer } = UseQuestions()
  const { lifes } = React.useContext(GameContext)
  const { points } = React.useContext(LifeContext)

  lifes === 0 && setLocation('/game-over')

  return <>
    <Timer question={question} />
    <TableGame
      answer={answer}
      question={question}
    />
    <h2>Lifes: {lifes}</h2>
    <h2>Points: {points}</h2>
  </>
}

export default Quiz
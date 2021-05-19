import ButtonsAnswer from 'components/ButtonsAnswer'
import Timer from 'components/Timer'
import { GameContext } from 'context/gameContext'
import { LifeContext } from 'context/lifeContext'
import UseQuestions from 'hooks/useQuestions'
import React from 'react'
import { useLocation } from 'wouter'

const Quiz = () => {
  const { question, answer } = UseQuestions()
  const { points } = React.useContext(LifeContext)
  const { lifes } = React.useContext(GameContext)
  const [, setLocation] = useLocation()

  if (lifes === 0) {
    setLocation('/game-over')
  }

  return <>
    <Timer question={question} />
    <h1>{question}</h1>
    <h2>Lifes: {lifes}</h2>
    <h2>Points: {points}</h2>
    <ButtonsAnswer
      answers={answer}
    />
  </>
}

export default Quiz
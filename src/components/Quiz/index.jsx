import ButtonsAnswer from 'components/ButtonsAnswer'
import { LifeContext } from 'context/lifeContext'
import UseQuestions from 'hooks/useQuestions'
import React from 'react'

const Quiz = () => {
  const { question, answer } = UseQuestions()
  const { life, points } = React.useContext(LifeContext)

  return <>
    <h1>{question}</h1>
    <h2>Lifes: {life}</h2>
    <h2>Points: {points}</h2>
    <ButtonsAnswer
      answers={answer}
    />
  </>
}

export default Quiz
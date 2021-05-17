import ButtonsAnswer from 'components/ButtonsAnswer'
import UseQuestions from 'hooks/useQuestions'
import React from 'react'

const Quiz = () => {
  const { question, answer } = UseQuestions()
  const correctAnswer = answer[0]

  return <>
    <h1>{question}</h1>
    <ButtonsAnswer
      answers={answer}
      correctAnswer={correctAnswer}
    />
  </>
}

export default Quiz
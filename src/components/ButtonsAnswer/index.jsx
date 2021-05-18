import SingleAnswer from 'components/SingleAnswer'
import React from 'react'

const ButtonsAnswer = ({ answers }) => {
  const correctAnswer = answers[0]

  const checkedCorrectAnswer = (answer) => {
    return correctAnswer === answer
  }

  return <>
    {
      answers.map(answer => (
        <SingleAnswer
          correct={checkedCorrectAnswer(answer)}
          answer={answer}
          key={answer}
        />
      ))
    }
  </>
}

export default ButtonsAnswer
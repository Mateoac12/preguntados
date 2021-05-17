import SingleAnswer from 'components/SingleAnswer'
import React from 'react'

const ButtonsAnswer = ({ answers, correctAnswer }) => {
  console.log({ answers })

  const checkedCorrectAnswer = (answer) => {
    return correctAnswer === answer
  }

  return <>
    {
      answers.sort().map(answer => (
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
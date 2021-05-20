import React from 'react'

import ButtonsAnswer from 'components/ButtonsAnswer'


const TableGame = ({ question, answer }) => {
  return <>
    <h1>{question}</h1>
    <ButtonsAnswer
      answers={answer}
    />
  </>
}

export default TableGame
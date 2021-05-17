import React, { useState } from 'react'

const SingleAnswer = ({ answer, correct }) => {
  const [life, setLife] = useState(3)

  console.log(correct)

  const handleClickAnswer = () => {
    alert(correct)
    setLife(lastLife => lastLife - 1)
  }

  return <>
    <h1>{life}</h1>
    <button onClick={handleClickAnswer}>{answer}</button>
  </>
}

export default SingleAnswer
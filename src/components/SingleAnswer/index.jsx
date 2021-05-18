import React from 'react'
import { LifeContext } from 'context/lifeContext'

const SingleAnswer = ({ answer, correct }) => {
  const { setLife, setPoints } = React.useContext(LifeContext)

  const handleClickAnswer = () => {
    correct
      ? setPoints(lastPoint => lastPoint + 1)
      : setLife(lastLife => lastLife - 1)
  }

  return <>
    <button onClick={handleClickAnswer}>{answer}</button>
  </>
}

export default SingleAnswer
import { LifeContext } from 'context/lifeContext'
import React, { useContext, useEffect, useState } from 'react'

const Timer = () => {
  const [time, setTime] = useState(5)
  const { setLife } = useContext(LifeContext)

  useEffect(() => {
    if (time === 0) {
      setTime(5)
      setLife(lastLife => lastLife - 1)
    } else {
      setTimeout(() => {
        setTime(lastTime => lastTime - 1)
      }, 1000)
    }
  }, [time, setLife])

  return <p>{time}</p>
}

export default Timer
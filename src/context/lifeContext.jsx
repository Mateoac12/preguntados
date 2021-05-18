import React, { useEffect, useState } from 'react'

const INITIAL_LIFE = 3

export const LifeContext = React.createContext({ error: "Not permission" })

const LifeContextProvider = ({ children }) => {
  const [life, setLife] = useState(INITIAL_LIFE)
  const [points, setPoints] = useState(0)

  useEffect(() => {
    if (life === 0) console.log("Perdiste 😯")
  }, [life])

  return <LifeContext.Provider value={{ life, setLife, points, setPoints }}>
    {children}
  </LifeContext.Provider>
}

export default LifeContextProvider


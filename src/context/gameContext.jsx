import React, { useState } from 'react'

export const GameContext = React.createContext({ error: 'Not permission' })

const GameContextProvider = ({ children }) => {
  const [name, setName] = useState('Preguntillas')
  const [lifes, setLifes] = useState(1)

  return <GameContext.Provider value={{
    name,
    setName,
    lifes,
    setLifes
  }}>
    {children}
  </GameContext.Provider>
}

export default GameContextProvider
import React, { useState } from 'react'

export const LifeContext = React.createContext({ error: "Not permission" })

const LifeContextProvider = ({ children }) => {
  const [points, setPoints] = useState(0)

  return <LifeContext.Provider value={{ points, setPoints }}>
    {children}
  </LifeContext.Provider>
}

export default LifeContextProvider


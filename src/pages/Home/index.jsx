import React from 'react'
import { useLocation } from 'wouter'

import { GameContext } from 'context/gameContext'

const Home = () => {
  const { lifes, setLifes, name, setName } = React.useContext(GameContext)
  const [, setLocation] = useLocation()

  const handleChangeLifes = (e) => {
    setLifes(e.target.value)
  }

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handlePlayGame = (e) => {
    e.preventDefault()
    setLocation('/play')
  }

  return <>
    <h1>Hola Preguntados! 🙌</h1>
    <h2>Me pregunto, como quieres jugar? 🤔</h2>
    <form onSubmit={handlePlayGame}>
      <label>Elige tus vidas!</label>
      <input type="range" min="1" max="5" step="1" value={lifes} onChange={handleChangeLifes} />
      <p>{lifes}</p>

      <label htmlFor="player-name">Como te quieres llamar?</label>
      <input type="text" id="player-name" value={name} onChange={handleChangeName} />
      <button>Jugar!</button>
    </form>
  </>
}

export default Home
import React from 'react'

import HomeTitle from 'components/HomeTitle'
import GameForm from 'components/GameForm'

import { HomeBox } from './styles'

const Home = () => {
  return <HomeBox>
    <HomeTitle />
    <GameForm />
  </HomeBox>
}

export default Home
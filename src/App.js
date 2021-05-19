import React, { Suspense } from 'react'
import { Route } from 'wouter'

import LifeContextProvider from 'context/lifeContext';
import GameContextProvider from 'context/gameContext';

import './App.css';

const Home = React.lazy(() => import('pages/Home'))
const Game = React.lazy(() => import('pages/Game'))
const GameOver = React.lazy(() => import('pages/GameOver'))

function App() {
  return (
    <div className="App">
      <GameContextProvider>
        <LifeContextProvider>
          <Suspense fallback={null}>
            <Route
              path='/'
              component={Home}
              />
            <Route
              path="/play"
              component={Game}
              />
            <Route
              path="/game-over"
              component={GameOver}
            />
          </Suspense>
        </LifeContextProvider>
      </GameContextProvider>
    </div>
  );
}

export default App;

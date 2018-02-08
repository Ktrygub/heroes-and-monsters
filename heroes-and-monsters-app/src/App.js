import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import StartPage from './components/pages/StartPage'
import InitPage from './components/pages/InitPage'
import GamePage from './components/pages/GamePage'

const App = () => (
  <div className="ui container">
    <header className="App-header">
      <h1 className="App-title">Heroes & Monsters</h1>
    </header>

    <BrowserRouter basename="/">
      <Switch>
        <Route path="/" exact component={StartPage} />
        <Route path="/init" exact component={InitPage} />
        <Route path="/game" exact component={GamePage} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App

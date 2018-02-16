import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
// import { Container } from 'semantic-ui-react'

import StartPage from './components/pages/StartPage'
import InitPage from './components/pages/InitPage'
import GamePage from './components/pages/GamePage'
import TopNavigation from './components/navigation/TopNavigation'

const App = () => (
  <React.Fragment>
    <TopNavigation />

    <div>
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/" exact component={StartPage} />
          <Route path="/init" exact component={InitPage} />
          <Route path="/game" exact component={GamePage} />
        </Switch>
      </BrowserRouter>
    </div>

    {/* Footer
     <Segment
      inverted
      vertical
      style={{ margin: '2em 0em 0em', padding: '1em 0em' }}
    >
      <Container textAlign='center'>
        <List horizontal inverted divided link>
          <List.Item as='a' href='/'>Site Map</List.Item>
          <List.Item as='a' href='/'>Contact Us</List.Item>
          <List.Item as='a' href='/'>Terms and Conditions</List.Item>
          <List.Item as='a' href='/'>Privacy Policy</List.Item>
        </List>
      </Container>
    </Segment> */}
  </React.Fragment>
)

export default App

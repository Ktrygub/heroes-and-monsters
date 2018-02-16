import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  Button,
  Icon,
  Divider,
  Segment,
  Header,
  Container
} from 'semantic-ui-react'

import { initGame } from '../../redux/actions/actions'

class StartPage extends React.Component {
  onClick = () => {
    this.props.initGame()
    this.props.history.push('/init')
  }

  status = this.props.gameStatus

  render() {
    return (
      <Container text style={{ marginTop: '7em' }}>
        <div className="ui container">
          {this.status !== 'FINISHED' ? (
            <div>
              <Header as="h2" color="blue" textAlign="center">
                Welcome page will be here...
              </Header>
              <Segment textAlign="center" padded="very">
                <p>first time playing</p>
                <h1>Your first game starts now!</h1>
                <Divider horizontal>Or</Divider>
                <p>if finished previous game</p>
                <h1>Results/Statistic of previous game will be here.</h1>
                <h1>Wanna start new game?</h1>
              </Segment>
            </div>
          ) : (
            <div>
              <Segment textAlign="center" padded="very">
                <h1>Results/Statistic of previous game will be here.</h1>
                <h1>Wanna start new game?</h1>
              </Segment>
            </div>
          )}

          <br />
          <Segment basic textAlign="center" padded="very">
            <Button
              secondary
              icon
              size="massive"
              labelPosition="right"
              onClick={this.onClick}
            >
              New Game Settings
              <Icon name="settings" />
            </Button>
          </Segment>
        </div>
      </Container>
    )
  }
}
StartPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  initGame: PropTypes.func.isRequired,
  gameStatus: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  gameStatus: state.game.status || ''
})

export default connect(mapStateToProps, { initGame })(StartPage)

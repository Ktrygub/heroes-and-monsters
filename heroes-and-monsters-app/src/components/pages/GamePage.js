import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Button,
  Icon,
  Message,
  Divider,
  Segment,
  Header,
  Container
} from 'semantic-ui-react'
import { endGame } from '../../redux/actions/actions'

class GamePage extends React.Component {
  onClick = () => {
    this.props.endGame(this.props.game)
    this.props.history.push('/')
  }

  render() {
    return (
      <Container text style={{ marginTop: '7em' }}>
        <div className="ui container">
          <div>
            <Segment textAlign="center" padded="very">
              <Header as="h1" color="blue" textAlign="center">
                Game process will be here
              </Header>
            </Segment>

            <Message size="big">
              Your journey has started, fight monsters
            </Message>
            <Divider horizontal>Or</Divider>
            <Segment textAlign="center" padded="very">
              <p> ..... logs here .... </p>
              <Message size="big" info>
                Petro attacked, done 3 damage to Skeleton
              </Message>
              <Divider horizontal>Or</Divider>
              <Message size="big" negative>
                Monster attacked, done 6 damage to Rogue
              </Message>
              <Divider horizontal>Or</Divider>
              <Message size="big" info>
                Petro attacked, Skeleton killed
              </Message>
              <Divider horizontal>Or</Divider>
              <Message size="big" positive>
                Hero win
              </Message>
              <Divider horizontal>Or</Divider>
              <Message size="big" positive>
                Hero win
              </Message>
              <Divider horizontal>Or</Divider>
              <Message size="big" positive>
                Hero win
              </Message>
              <Divider horizontal>Or</Divider>
              <Message size="big" positive>
                Hero win
              </Message>
              <Divider horizontal>Or</Divider>
              <Message size="big" positive>
                Hero win
              </Message>
              <Divider horizontal>Or</Divider>
              <Message size="big" positive>
                Hero win
              </Message>
            </Segment>

            <Segment basic textAlign="center" padded="very">
              <p>when game finished button RESULT appears </p>
              <Button
                secondary
                size="massive"
                icon
                labelPosition="right"
                onClick={this.onClick}
              >
                Game Results
                <Icon name="checkmark" />
              </Button>
            </Segment>
          </div>
        </div>
      </Container>
    )
  }
}
GamePage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  endGame: PropTypes.func.isRequired,
  game: PropTypes.shape({}).isRequired
}

const mapStateToProps = state => ({
  game: state.game
})
export default connect(mapStateToProps, { endGame })(GamePage)

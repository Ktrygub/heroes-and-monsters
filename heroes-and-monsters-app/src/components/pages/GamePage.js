import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { endGame } from '../../redux/actions/actions'

class GamePage extends React.Component {
  state = {
      status: 'Idle',
      hero: {},
      monsters: []
  }

  render() {
    return (
      <div>
        <h1>Game process here</h1>
        <p> ..... logs here .... </p>
        <div>
          <p>when game finished button RESULT appears </p>
          <button
            onClick={() => {
              this.state.status = 'finished'
              this.props.endGame(this.state)
            }}
          >
            <Link style={{ textDecoration: 'none' }} to="/">
              Results
            </Link>
          </button>
        </div>
      </div>
    )
  }
}
GamePage.propTypes = {
  endGame: PropTypes.func.isRequired
  // history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired
}

// const mapStateToProps = state => ({
//   isVerified: state.user.isVerified
// })
export default connect(null, { endGame })(GamePage)

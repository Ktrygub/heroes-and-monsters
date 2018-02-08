import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class InitPage extends React.Component {
  state = {
    status: 'idle'
    //   hero: {},
    //   monsters: []
  }
  render() {
    return (
      <div>
        <h1>Game Settings</h1>
        <p> ..... lots of settings here ....  status: {this.state.status}, hero: {}, monsters: [] </p>
        <div>
          <p>when all settings done start button appear/become active</p>
          <button>
            <Link style={{ textDecoration: 'none' }} to="/game">
              Start Game
            </Link>
          </button>
        </div>
      </div>
    )
  }
}
// InitPage.propTypes = {
// history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired
// }

// const mapStateToProps = state => ({
//   isVerified: state.user.isVerified
// })
export default connect(null, null)(InitPage)

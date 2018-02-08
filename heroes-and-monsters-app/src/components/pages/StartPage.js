import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const StartPage = ({ isFirstGame }) => (
  <div>
    {isFirstGame ? (
      <div>
        <h1 style={{ color: 'red' }}>Welcome! Your first game starts now!</h1>
      </div>
    ) : (
      <div>
        <h1 style={{ color: 'red' }}>
          Representation of Results of previous game here. And wanna start new game?
        </h1>
      </div>
    )}

    <div>
      <br />
      <button>
        <Link style={{ textDecoration: 'none' }} to="/init">
          Game Settings
        </Link>
      </button>
    </div>
  </div>
)
StartPage.propTypes = {
  isFirstGame: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isFirstGame: state.game.status !== 'finished'
})

export default connect(mapStateToProps)(StartPage)

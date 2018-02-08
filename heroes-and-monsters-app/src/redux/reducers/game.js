// import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../../types'

const game = (state = {}, action = {}) => {
  switch (action.type) {
    case 'GAME_FINISHED':
      return action.results

    default:
      return state
  }
}

export default game

export const gameFinished = results => ({ type: 'GAME_FINISHED', results })

export const endGame = results => dispatch => {
  dispatch(gameFinished(results))
}

export const logout = () => dispatch => {
  dispatch(gameFinished())
}

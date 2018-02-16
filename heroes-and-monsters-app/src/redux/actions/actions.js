export const gameFinished = results => ({ type: 'GAME_FINISHED', results })

export const gameInitiated = () => ({ type: 'GAME_INITIATED' })

export const gameStarted = () => ({ type: 'GAME_STARTED' })

export const addHero = hero => ({ type: 'ADD_HERO', hero })

export const addMonster = monster => ({ type: 'ADD_MONSTER', monster })

export const endGame = results => dispatch => {
  dispatch(gameFinished(results))
}

export const initGame = () => dispatch => {
  dispatch(gameInitiated())
}

export const startGame = () => dispatch => {
  dispatch(gameStarted())
}

export const createHero = hero => dispatch => {
  dispatch(addHero(hero))
}

export const createMonster = monster => dispatch => {
  dispatch(addMonster(monster))
}

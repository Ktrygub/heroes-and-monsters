const game = (state = { hero: {}, monsters: [] }, action = {}) => {
  switch (action.type) {
    case 'GAME_FINISHED':
      return { ...action.results, status: 'FINISHED' }
    case 'GAME_INITIATED':
      return { hero: {}, monsters: [], status: 'INIT' }
    case 'GAME_STARTED':
      return { ...state, status: 'IN PROGRESS' }
    case 'ADD_MONSTER':
      return { ...state, monsters: [...state.monsters, action.monster] }
    case 'ADD_HERO':
      return { ...state, hero: action.hero }
    default:
      return state
  }
}
export default game

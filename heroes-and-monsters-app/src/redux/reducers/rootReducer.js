import { combineReducers } from 'redux'
import game from './game'
import database from './database'

const rootReducer = combineReducers({ game, database })

export default rootReducer

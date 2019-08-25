import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { scoreConfigReducer } from './config/reducers'
import { scoreStateReducer } from './score/reducers'

const rootReducer = combineReducers({
  score: scoreStateReducer,
  config: scoreConfigReducer
})

export type AppState = ReturnType<typeof rootReducer>
const store = createStore(rootReducer, composeWithDevTools())

export default store

import { combineReducers } from 'redux'
import subscribeReducer from './subscribers/reducer'
import viewsReducer from './views/reducer'
import commentsReducer from './comments/reducer'

const rootReducer = combineReducers({
  views : viewsReducer,
  subs : subscribeReducer,
  comments : commentsReducer
})

export default rootReducer
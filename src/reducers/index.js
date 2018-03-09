import { combineReducers } from 'redux'

import posts from './post'
import comments from './comments'

export default combineReducers({
  posts, comments
})

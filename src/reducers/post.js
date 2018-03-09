import { FETCH_POSTS } from '../actions'

function posts(state=[], action) {
  const { posts } = action
  switch(action.type) {
    case FETCH_POSTS:
      return posts.filter(post => !(post.deleted))
    default:
      return state
  }
}

export default posts

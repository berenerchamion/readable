import { FETCH_POSTS,
          FETCH_POST,
          ADD_POST
        } from '../actions'

function posts(state=[], action) {
  const { posts, post, postData } = action
  switch(action.type) {
    case FETCH_POSTS:
      return posts.filter(post => !(post.deleted))
    case FETCH_POST:
      return post
    case ADD_POST:
      console.log('Reducer Post' + JSON.stringify(action))
      return state.concat([postData])
    default:
      return state
  }
}

export default posts

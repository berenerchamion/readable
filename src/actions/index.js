import { fetchPosts } from '../utils/ReadableAPI'

export const FETCH_POSTS = 'FETCH_POSTS'

export const fetchAllPosts = () => {
  return (dispatch) => {
    fetchPosts().then(posts => {
      dispatch({ type: FETCH_POSTS, posts })
    })
  }
}

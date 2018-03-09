import { fetchPosts,
          fetchPost
        } from '../utils/ReadableAPI'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POST = 'FETCH_POST'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'

//Post related APIs - I suppose I could break this up into separate files...

//Get all the posts
export const fetchAllPosts = () => {
  return (dispatch) => {
    fetchPosts().then(posts => {
      dispatch({ type: FETCH_POSTS, posts })
    })
  }
}

//Get one post by id
export const fetchOnePost = (id) => {
  return (dispatch) => {
    fetchPost(id).then(post => {
      dispatch({type: FETCH_POST, post })
    })
  }
}

export const addPost = () => {
  return (dispatch) => {
    addPost().then(post => {
      dispatch({ type: ADD_POST, post })
    })
  }
}


//Comments related APIs
export const ADD_COMMENT = 'ADD_COMMENT'

//Categories related APIs
export const GET_CATEGORIES = 'GET_CATEGORIES'

//Voting related APIs
export const VOTE_FOR = 'VOTE_FOR'
export const VOTE_AGAINST = 'VOTE_AGAINST'

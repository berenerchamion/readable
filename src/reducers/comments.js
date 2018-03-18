import {
        FETCH_COMMENTS,
        ADD_COMMENT,
        EDIT_COMMENT,
        DELETE_COMMENT,
        VOTE_FOR_COMMENT
        } from '../actions'

function comments(state={}, action) {
  const { comment, postData, comments } = action
  console.log(action)
  switch(action.type) {
    case FETCH_COMMENTS:
      return{
        ...state,
        [action.postId]: comments
      }
    case ADD_COMMENT:
      return state
    case EDIT_COMMENT:
      return state
    case DELETE_COMMENT:
      return state
    case VOTE_FOR_COMMENT:
      console.log("commentId: " + postData.commentId + " postId: " + postData.postId + " voteTpye: " + postData.voteType)
      return state
    default:
      return state
  }
}

export default comments

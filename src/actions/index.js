export const ADD_POST = 'ADD_POST'
export const GET_POSTS = 'GET_POSTS'
export const DELETE_POST = 'DELETE_POST'

export function addPost ({title, body, author, category}) {
  return {
    type: ADD_POST,
    title,
    body,
    author,
    category
  }
}

export function getPosts(){
  return {
    type: GET_POSTS,
  }
}

export function deletePost ({id}) {
  return {
    type: DELETE_POST,
    id
  }
}

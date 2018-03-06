export const ADD_PPOST = 'ADD_POST'
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

export function deletePost ({id}) {
  return {
    type: DELETE_POST,
    id
  }
}

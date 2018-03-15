const api = process.env.REACT_APP_READABLE_API_URL

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

  const headers ={
    'Accept': 'application/json',
    'Authorization': token,
    'Content-Type': 'application/json'
  }

  export const fetchPosts = () => {
    return fetch(`${api}/posts`, { headers })
         .then((res) => res.json())
  }

  export const fetchPost = (id) => {
    return fetch(`${api}/posts/${id}`, { headers })
         .then((res) => res.json())
  }

  export const addPost = (postData) => {
    return fetch (`${api}/posts`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(postData)
    })
  }

  export const editPost = (postData) => {
    console.log("url" + `${api}/posts/${postData.id}`+ JSON.stringify({title: postData.title, body: postData.body}))
    return fetch (`${api}/posts/${postData.id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({title: postData.title, body: postData.body})
    })
  }

  export const fetchCategories = () => {
      return fetch(`${api}/categories`, { headers })
           .then((res) => res.json())
    }

export const fetchComments = () => {

}

export const editComments = () => {

}

export const deleteComments = () => {

}

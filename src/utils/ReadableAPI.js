const api = process.env.REACT_APP_READABLE_API_URL 

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

  const headers ={
    'Accept': 'application/json',
    'Authorization': token
  }

  export const getPosts = () =>
    fetch(`${api}/posts`, { headers }).then(res => {
      if (!res.ok) {
        throw res
      } else{
          return res.json()
      }
    })

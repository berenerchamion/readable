export function formatTimestamp(t){
  let d = new Date(t)
  return d.toLocaleString()
}

//Grabbed this function from stack overflow...I don't think this is cheating since its not react code.
//https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
export function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}

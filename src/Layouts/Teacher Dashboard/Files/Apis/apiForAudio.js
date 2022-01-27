//getting API for showing all the data
export const getAudioFile = () => fetch("http://localhost:7000/api/files").then(res => res.json())

//getting API for inserting the data
export const createAudioFile = (todo) => fetch(`http://localhost:7000/api/files`, {
  method: "POST",
  body: todo
})  

export const createAudioFileSpecificTest = (todo, id) => fetch(`http://localhost:7000/api/files/specific/${id}`, {
  method: "POST",
  body: todo
})  


//getting API for updating specific data
export const updateRegistrations = (todo, id) => fetch(`http://localhost:7000/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getRegisteration = (id) => fetch(`http://localhost:7000/${id}`).then(res => res.json())
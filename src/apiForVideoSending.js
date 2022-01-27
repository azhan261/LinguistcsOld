//getting API for showing all the data
export const getRegistrations = () => fetch("http://localhost:7000/").then(res => res.json())

//getting API for inserting the data
export const createRegistrations = (todo) => fetch("http://localhost:7000/students/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
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
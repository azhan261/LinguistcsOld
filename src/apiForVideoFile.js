
//getting API for inserting the data
export const createTodoForTeacher = (todo) => fetch("http://localhost:7000/teachers/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for showing all the data
export const getClassSchedules = () => fetch("http://localhost:7000/class-scheduler").then(res => res.json())

//getting API for inserting the data
export const createClassSchedules = (todo) => fetch("http://localhost:7000/class-scheduler/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateClassSchedules = (todo, id) => fetch(`http://localhost:7000/class-scheduler/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for deleting specific data
export const deleteClassSchedule = (todo, id) => fetch(`http://localhost:7000/class-scheduler/delete/${id}`).then(res => res.json())


//getting API for getting specific data
export const getClassSchedule = (id) => fetch(`http://localhost:7000/class-scheduler/${id}`).then(res => res.json())
//getting API for showing all the data
export const getRegistrations = () => fetch("http://localhost:7000/students").then(res => res.json())


export const getStudentsMale = () => fetch("http://localhost:7000/students/male").then(res => res.json())


export const getStudentsFemale = () => fetch("http://localhost:7000/students/female").then(res => res.json())


export const getStudentsFemaleSchoolsAdult = () => fetch("http://localhost:7000/students/female-schools-adult").then(res => res.json())

export const getStudentsFemaleSchoolsJunior = () => fetch("http://localhost:7000/students/female-schools-junior").then(res => res.json())

export const getStudentsMaleSchoolsAdult = () => fetch("http://localhost:7000/students/male-schools-adult").then(res => res.json())

export const getStudentsMaleSchoolsJunior = () => fetch("http://localhost:7000/students/male-schools-junior").then(res => res.json())

//getting API for inserting the data
export const createRegistrations= (todo) => fetch("http://localhost:7000/students/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateRegistration = (todo, id) => fetch(`http://localhost:7000/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getRegistration = (id) => fetch(`http://localhost:7000/students${id}`).then(res => res.json())
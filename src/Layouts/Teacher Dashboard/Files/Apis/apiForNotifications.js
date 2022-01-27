//getting API for showing all the data
export const getNotifications = () => fetch("http://localhost:7000/notifications").then(res => res.json())
export const getNotificationsResponses = () => fetch("http://localhost:7000/notifications-response").then(res => res.json())

//getting API for inserting the data
export const createNotifications = (todo) => fetch("http://localhost:7000/notifications/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const createNotificationsResponses = (todo) => fetch("http://localhost:7000/notifications-response/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  


//getting API for updating specific data
export const updateNotification = (todo, id) => fetch(`http://localhost:7000/notifications/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const updateNotificationResponse = (todo, id) => fetch(`http://localhost:7000/notifications-response/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
//getting API for deleting specific data
export const deleteNotification = (todo, id) => fetch(`http://localhost:7000/notifications/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const deleteNotificationResponse = (todo, id) => fetch(`http://localhost:7000/notifications-response/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getNotification = (id) => fetch(`http://localhost:7000/${id}`).then(res => res.json())
export const getNotificationResponse = (id) => fetch(`http://localhost:7000/${id}`).then(res => res.json())
//getting API for showing all the data
export const getAnswers = () => fetch("http://localhost:7000/answers").then(res => res.json())

export const getAnswersMCQ = () => fetch("http://localhost:7000/answers/MCQ-answers").then(res => res.json())
export const getAnswersBlanks = () => fetch("http://localhost:7000/answers/Blanks-answers").then(res => res.json())
export const getAnswersPronunciation = () => fetch("http://localhost:7000/answers/Pronunciation-answers").then(res => res.json())
export const getAnswersQA = () => fetch("http://localhost:7000/answers/QA-answers").then(res => res.json())
export const getAnswersHandWriting = () => fetch("http://localhost:7000/answers/HandWriting-answers").then(res => res.json())

//getting API for inserting the data
export const createAnswers = (todo) => fetch("http://localhost:3005/answers/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateAnserReview = (todo, id) => fetch(`http://localhost:7000/answers/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getAnswer = (id) => fetch(`http://localhost:7000/${id}`).then(res => res.json())
export const getAnswerSpecific = (id) => fetch(`http://localhost:7000/answers/specific/${id}`).then(res => res.json())
export const getAnswerSpecificById = (id) => fetch(`http://localhost:7000/answers/specific/id/${id}`).then(res => res.json())
export const getAnswerSpecificQuestion = (id) => fetch(`http://localhost:7000/answers/specific/question/${id}`).then(res => res.json())

//const people = []
//push
//server is going to work with DB
//POST = method helps us to create resource on the server in the DB
//const url = 'https://solar-poised-salad.glitch.me/todos'

// 

// const a = {
//   id: 1,
//   title: 'test'
// }

// const convertToJson = JSON.stringify(a)
// const converToObject = JSON.parse(convertToJson)
// console.log(a);
// console.log(JSON.stringify(a));
// console.log(convertToJson);

// const getTodo = () => {
//     fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((console) => console.log(console.error()))
//   }


// const todo = {
//   title: 'React',
//   isComplete: false
// }

// const  addTodo = () => {
//   fetch(url,{
//     method: 'POST',
// headers:{
//   'Content-Type': 'application/json'
// },

// body: JSON.stringify(todo)
//   })
//   .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((console) => console.log(console.error()))
// }

// const getBtn = document.querySelector('#get')
// const createBtn = document.querySelector('#post')

// getBtn.addEventListener('click',()=>{
//   getTodo()
// })
// createBtn.addEventListener('click', ()=>{
//   addTodo()
// })


// const getData = () => {
//   fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     const {
//       picture: { large },
//       name: { title, first, last },
//       email,
//   cell,
//   location:{ timezone: { description },
//   },
//   } = data.results[0];
//   }
//   .catch((console) => console.log(console.error()))
// }

// const inputName = document.querySelector('#name')
// const inputEmail = document.querySelector('#email')
// const addBtn = document.querySelector('#add')

// const  addData = () => {
//   const data = {
//     fullname: inputName.value,
//     email: inputEmail.value,
//     isActive: true
//     }
//     console.log(data);
// fetch(url,{
//   method: 'POST',
// headers:{
// 'Content-Type': 'application/json'
// },

// body: JSON.stringify(data)
// })
// .then((response) => response.json())
//   .then((data) => 
  
//   console.log(data))
//   .catch((console) => console.log(console.error()))
// }

// addBtn.addEventListener('click',()=>{
//   addData()
// getData()
// })

//const url = 'https://solar-poised-salad.glitch.me/students'

// const getData = function(){
//   fetch(url)
// .then((result)=> result.json())
// .then((data)=> {
//   const students = data.students
//   for (let key in students) {
//     const user = students[key]
//     console.log(user);
//   const {
//     fullname,
//     email,
//     isActive,
// } = user
// console.log(students);
// const usertemplate = `
// <div> 
// <h2>${fullname}</h2>
// <p>Email: ${email}</p>
// </div>`
// document.body.insertAdjacentHTML("beforeend", usertemplate)
// }})

// .catch((error)=>console.log(error))
//   }
// getData()

const inputName = document.querySelector('#name')
const inputEmail = document.querySelector('#email')
const isActive = document.querySelector('#active')
const addBtn = document.querySelector('#add')
const updateBtn = document.querySelector('#update')
const ul = document.querySelector('ul')

const url = 'https://solar-poised-salad.glitch.me/students'
const getData = function(){
  ul.innerHTML = ""
  fetch(url)
.then((result)=> result.json())
.then((data)=> {
  
  const result = data.filter((el) => el.fullname !== "" && el.email !== "")
result.forEach(element => {
  let {fullname, email, isActive,} = element
    console.log(fullname, email, isActive);
    const user = `
    <li>${fullname}</li>
    <li>Email: ${email}</li>
    <li> ${isActive ? '🟢' : '🔴'}</li>
  `
    ul.insertAdjacentHTML("beforeend", user)
})
})
.catch((error)=>console.error(error))
}
getData()
function addStudent (){
 
  const data = {
    fullname: inputName.value,
    email: inputEmail.value,
isActive: isActive.checked ? true : false,
  }
console.log(data);
  fetch(url, {
    method: 'POST',
    headers:{
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((response) => response.json())
  .then((data) =>{
    inputName.value = ""
    inputEmail.value = ""
    getData()
  })
  .catch((error) => console.log(error))
}
addBtn.addEventListener('click', addStudent)
  const updateStudent = () =>{
    const studentData = {
      fullname: 'Ryan Reynolds',
    email: 'Reynolds@mail2024.com',
    };
  fetch(url + "/24",{
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json', 
  },
    body: JSON.stringify(studentData)
  })
  .then((res) => res.json())
  .then((data) =>{
    console.log(data);
    getData()
  })
 .catch((error) => console.log(error))
  }
 updateBtn.addEventListener('click', 
 {
  updateStudent
 })

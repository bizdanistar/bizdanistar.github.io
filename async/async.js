

//Promise - is an object that tells us that the asynhronouns operation was successful or not

// const getUsers = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     if(people.length !== 0){
//       resolve(people)
//     }else {
//       reject({status: 404, massege: 'Users not foun'})
//     }
//   })
// })
// //console.log(getUsers);doesnt work
// getUsers.then((sucsseful)=>{
// console.log(sucsseful);
// })
// .catch((failed)=>{
//   console.log(failed);
// })

// fetch('https://jsonplaceholder.typicode.com/todos')//fetch('https://jsonplaceholder.typicode.com/todos', {method: 'GET'})
// .then(result =>{
//   return result.json()
// })
// .then((data)=>{
//   console.log(data);
// })
// .catch((error)=>{
//   console.log(error);
// })

// fetch("https://unsplash.com/photos/shallow-focus-photography-of-white-shih-tzu-puppy-running-on-the-grass-qO-PIF84Vxg")
// .then(result =>result.json())
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))

// const button = document.querySelector('button')
// button.addEventListener('click', function(){
// const pic = "https://unsplash.com/photos/shallow-focus-photography-of-white-shih-tzu-puppy-running-on-the-grass-qO-PIF84Vxg"
// document.querySelector('img').setAttribute("src", pic)
// })


// const button = document.querySelector('button')
//   button.addEventListener('click', function(){
//     fetch("https://dog.ceo/api/breeds/image/random")
// .then((result) =>result.json())
// .then((data)=>
// document.querySelector('img').setAttribute("src", data.message))
// .catch((error)=>console.log(error))
//     })












const getuser = function(){
  fetch("https://randomuser.me/api/?results=5") 
.then((result)=> result.json())
.then((data)=> {
  const {
    picture: { large },
    name: { title, first, last },
    email,
cell,
location:{ timezone: { description },
},
} = data.results[0];

const usertemplate = `
<div class='user-card'> 
<img src="${large}" class="user-photo" alt="Profile Picture" class="profile-pic">
<h2 class="user-name">${title} ${first} ${last}</h2>
<p class="user-bio"><i class="fa-solid fa-location-dot"></i>${description}</p>
<div class="contact-info">
<p class="user-email"><i class="fa-regular fa-envelope"></i>Email: ${email}</p>
<p class="user-phone"><i class="fa-solid fa-phone"></i>Phone: ${cell}</p>
</div>
</div>`
document.body.insertAdjacentHTML("beforeend", usertemplate)
})
.catch((error)=>console.log(error))
  }
getuser()






////////////////////
const getuser = function(){
  fetch("https://randomuser.me/api/?results=10") 
.then((result)=> result.json())
.then(getdata)
.catch((error)=>console.log(error))
  }
getuser()


function getdata(data) {
  let {
    picture: { large },
    name: { title, first, last },
    email,
cell,
location:{ timezone: { description },
},
} = data.results[0];
console.log(data.results);


const usertemplate = `
<div class='user-card'> 
<img src="${large}" class="user-photo" alt="Profile Picture" class="profile-pic">
<h2 class="user-name">${title} ${first} ${last}</h2>
<p class="user-bio"><i class="fa-solid fa-location-dot"></i>${description}</p>
<div class="contact-info">
<p class="user-email"><i class="fa-regular fa-envelope"></i>Email: ${email}</p>
<p class="user-phone"><i class="fa-solid fa-phone"></i>Phone: ${cell}</p>
</div>
</div>`
document.body.insertAdjacentHTML("beforeend", usertemplate)
}
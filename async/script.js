const getuser = function(){
  fetch("https://randomuser.me/api/?results=16") 
.then((result)=> result.json())
.then((data) => {
  let rest = data.results
  for (let key in rest) {
  const findItem = rest[key]
  let {
    picture: { large },
    name: { title, first, last },
    email,
cell,
location:{ timezone: { description },
},
} = findItem
const usertemplate = `
<div class="main">
<div class='user-card'> 
<img src="${large}" class="user-photo" alt="Profile Picture" class="profile-pic">
<h2 class="user-name">${title} ${first} ${last}</h2>
<p class="user-bio"><i class="fa-solid fa-location-dot"></i>${description}</p>
<div class="contact-info">
<p class="user-email"><i class="fa-regular fa-envelope"></i>Email: ${email}</p>
<p class="user-phone"><i class="fa-solid fa-phone"></i>Phone: ${cell}</p>
</div>
</div>
</div>`
document.body.insertAdjacentHTML("beforeend", usertemplate)
  }
})
.catch((error)=>console.log(error))
  }
getuser()
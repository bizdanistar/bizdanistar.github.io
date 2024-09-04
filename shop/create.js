let dropdown = document.getElementsByClassName("dropdown-btn");
const form = document.querySelector('form')
const url = 'https://solar-poised-salad.glitch.me/nazgul/'
const submitBtn = document.querySelector('#submit-btn')
const nameInput = document.querySelector('#fname')
const descriptionInput = document.querySelector('#description')
const imageUrl = document.querySelector('#image-url')
const price = document.querySelector('#price')
const category = document.querySelector('#category')
const subcategory = document.querySelector('#subcategory')


async function addProduct() {
  try {
   const res = await axios.post(url, {
    productTitle: nameInput.value,
    description: descriptionInput.value,
    imageUrl: imageUrl.value,
    category: category.value,
    subcategory: subcategory.value,
    price: price.value,
})

console.log(res);
}
  catch(error){
    console.error(error)} 
  }

  submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    addProduct() 
    nameInput.value = ''
    descriptionInput.value = ''
    imageUrl.value = ''
    category.value = ''
    subcategory.value = ''
   price.value = ''
  })



 





  








let i;
  
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
const url = 'https://solar-poised-salad.glitch.me/nazgul/'
const productGrid = document.querySelector('.productGrid')

const saveBtn = document.querySelector('#save')
let title = document.querySelector('#title')
let description = document.querySelector('#description')
let imageUrl = document.querySelector('#image-url')
let category = document.querySelector('#category')
let subcategory = document.querySelector('#subcategory')
let price = document.querySelector('#price')
let productId = null
async function renderProduct(product) {
    productGrid.innerHTML = ''
product.forEach(product => {
  const displayProduct = ` 
   <div class="item">
      <div class="img">
        <img src="${product.imageUrl}" alt="">
      </div>
      <div class="price">
      <p>${product.productTitle}</p>
      <p>${product.description}</p>
      <span>${product.category} > ${product.subcategory} </span>
      <p> <span>${product.price}</span></p>
      <div class="priceBtn">
        <button class='edit' data-index='${product.id}'><i class="fa-solid fa-pen"></i>Edit</button>
        <button class="delete" data-id='${product.id}'><i class="fa-solid fa-trash"></i>Delete</button>
      </div>
      </div>
    </div>
`    
productGrid.insertAdjacentHTML('beforeend', displayProduct)
});
attachEventListeners() 

}


const getData = async () => {
  try {
    const { data } = await axios(url);
    renderProduct(data)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
getData()

async function getProduct() {
  try {
    const res = await axios(`${url}/${productId}`);
    const item = res.data

    title.value = item.productTitle
      description.value = item.description
      imageUrl.value = item.imageUrl
      category.value =  item.category
      subcategory.value = item.subcategory
      price.value =  item.price
 
  } catch (error) {
    console.error('Error fetching product:', error);
  }
}

function attachEventListeners() {
 const editBtns = document.querySelectorAll('.edit');
editBtns.forEach(btn => {
  btn.addEventListener('click', async function(e) {
    productId = e.currentTarget.dataset.index;
    console.log(productId);
    getProduct()
    openNav()
  });
});


  // const deleteBtns = document.querySelectorAll('.delete');
  // deleteBtns.forEach(btn => {
  //   btn.addEventListener('click', async function(e) {
  //    productId = this.getAttribute('data-id');
  //     // productId = e.currentTarget.dataset.index;
  //     console.log('Delete button clicked for product ID:', productId);
  //     const response = await axios(`${url}/${productId}`)
  //     try {
  
     
  //     } catch (error) {
        
  //     }
     
  //   });
  // });
}






saveBtn.addEventListener('click', async function () {
  const res = {
    productTitle: title.value,
    description: description.value,
    imageUrl: imageUrl.value,
    category: category.value,
    subcategory: subcategory.value,
    price: price.value,
  }
    try {
      const response = await axios.patch(`${url}/${productId}`, res)
   
     console.log(res);
        document.querySelector('.modul').style.display = 'none'
        getData()
       
      } catch (error) {
        console.error('Error updating product:', error);
      }
    });
  

function openNav() {
  document.querySelector('.modul').style.display = 'block'
}

document.querySelector('.close').addEventListener('click', function(){
  document.querySelector('.modul').style.display = 'none'
})



let dropdown = document.getElementsByClassName("dropdown-btn");
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

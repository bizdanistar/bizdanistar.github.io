const url = 'https://solar-poised-salad.glitch.me/nazgul/';
const productGrid = document.querySelector('.productGrid');
let shopCart = JSON.parse(localStorage.getItem("cart")) || [];


async function renderProduct(products) {
  productGrid.innerHTML = ''; 

  products.forEach(product => {
    const displayProduct = ` 
      <div class="item">
        <div class="img">
          <img src="${product.imageUrl}" alt="">
        </div>
        <div class="price">
          <p>${product.productTitle}</p>
          <p>${product.description}</p>
          <span>${product.category} > ${product.subcategory}</span>
          <p><span>$${product.price}</span></p>
          <div class="priceBtn">
            <button class='cart' data-index='${product.id}'><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
          </div>
        </div>
      </div>
    `;
    productGrid.insertAdjacentHTML('beforeend', displayProduct); 
  });
}


const getData = async () => {
  try {
    const response = await axios(url);
    const products = response.data;
    renderProduct(products);
    attachEventListeners(products); 
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
getData();


function attachEventListeners(products) {
  const cartBtns = document.querySelectorAll('.cart');
  cartBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      const prodID = parseInt(e.currentTarget.dataset.index, 10);
      const addedToCart = products.find(product => product.id === prodID);
          shopCart.push(addedToCart); 
          localStorage.setItem("cart", JSON.stringify(shopCart)); 
          alert("Product added to cart!");
        })
      })
    }



function cartButton() {
  document.querySelector(".cartPage").addEventListener("click", function () {
    location.href = `cart.html`; 
  });
}
cartButton();


const searchInput = document.querySelector('#search');
const searchBtn = document.querySelector('#searchBtn');

searchBtn.addEventListener('click', async () => {
  const searchTerm = searchInput.value.toLowerCase();
  
  try {
    const response = await axios(url); 
    const data = response.data; 

    if (searchTerm) {
      const filteredProducts = data.filter(product =>
        product.productTitle.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.subcategory.toLowerCase().includes(searchTerm)
      );
      console.log(filteredProducts);
      renderProduct(filteredProducts); 
    } else {
      renderProduct(data); 
    }
  } catch (error) {
    console.error('Error fetching data for search:', error);
  }
});
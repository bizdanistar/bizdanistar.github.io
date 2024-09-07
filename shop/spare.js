const url = 'https://solar-poised-salad.glitch.me/nazgul/';
const productGrid = document.querySelector('.productGrid');
const subcategoryDropdown = document.querySelector('#subcategoryBtn');
const searchInput = document.querySelector('#search');
const searchButton = document.querySelector('#searchButton');

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
          <p class='title'>${product.productTitle}</p>
          <p class='description'>${product.description}</p>
          <span>${product.category} > ${product.subcategory}</span>
          <p class='priceP'><span>$${product.price}</span></p>
          <div class="priceBtn">
            <button class='edit' data-index='${product.id}'><i class="fa-solid fa-pen"></i> Edit</button>
            <button class="delete" data-id='${product.id}'><i class="fa-solid fa-trash"></i> Delete</button>
          </div>
        </div>
      </div>
    `;
    productGrid.insertAdjacentHTML('beforeend', displayProduct);
  });

  attachEventListeners(); 
}


const getData = async () => {
  try {
    const { data } = await axios(url);
    renderProduct(data); 
    attachSubcategoryFilter(data); 
    attachSearchFilter(data); 
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
getData();


function filterProductsBySubcategory(products, selectedSubcategory) {
  if (selectedSubcategory === 'all') {
    return products;
  }
  return products.filter(product => product.subcategory.toLowerCase() === selectedSubcategory.toLowerCase());
}


function attachSubcategoryFilter(products) {
  subcategoryDropdown.addEventListener('change', function () {
    const selectedSubcategory = subcategoryDropdown.value;
    const filteredProducts = filterProductsBySubcategory(products, selectedSubcategory);
    renderProduct(filteredProducts); 
  });
}


function filterProductsBySearch(products, searchTerm) {
  if (!searchTerm) {
    return products; 
  }
  
  return products.filter(product => 
    product.productTitle.toLowerCase().includes(searchTerm.toLowerCase()) || 
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
}


function attachSearchFilter(products) {
  searchButton.addEventListener('click', function () {
    const searchTerm = searchInput.value.trim();
    const filteredProducts = filterProductsBySearch(products, searchTerm);
    renderProduct(filteredProducts); 
  });
}


function attachEventListeners() {
  const editBtns = document.querySelectorAll('.edit');
  editBtns.forEach(btn => {
    btn.addEventListener('click', async function (e) {
      let productId = e.currentTarget.dataset.index;
      console.log(productId);
      getData();
      openNav();
    });
  });

  const deleteBtns = document.querySelectorAll('.delete');
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', async function (e) {
      let productId = this.getAttribute('data-id');
      console.log('Delete button clicked for product ID:', productId);

      try {
        const response = await axios.delete(`${url}/${productId}`);
        console.log(response);
        getData();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    });
  });
}

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

  function openNav() {
    document.querySelector('.modul').style.visibility = 'visible'
  }
  function closeNav() {
    document.querySelector('.close').addEventListener('click', function(){
      document.querySelector('.close').style.visibility = 'hidden'
    })
    
  }



  const url = 'https://solar-poised-salad.glitch.me/nazgul/';
const productGrid = document.querySelector('.productGrid');
const subcategoryDropdown = document.querySelector('#subcategoryBtn');
const searchInput = document.querySelector('#search');
const searchButton = document.querySelector('#searchButton');
let shopCart = JSON.parse(localStorage.getItem("cart")) || [];

// Modal Elements
const modal = document.querySelector('.modul');
const titleInput = document.querySelector('#title');
const descriptionInput = document.querySelector('#description');
const imageUrlInput = document.querySelector('#image-url');
const categoryInput = document.querySelector('#category');
const subcategoryInput = document.querySelector('#subcategory');
const priceInput = document.querySelector('#price');
const saveButton = document.querySelector('#save');

let currentProductId = null;  // Stores the ID of the product being edited

async function renderProduct(products) {
  productGrid.innerHTML = ''; 
  products.forEach(product => {
    const displayProduct = ` 
      <div class="item">
        <div class="img">
          <img src="${product.imageUrl}" alt="">
        </div>
        <div class="price">
          <p class='title'>${product.productTitle}</p>
          <p class='description'>${product.description}</p>
          <span>${product.category} > ${product.subcategory}</span>
          <p class='priceP'><span>$${product.price}</span></p>
          <div class="priceBtn">
            <button class='edit' data-index='${product.id}'><i class="fa-solid fa-pen"></i> Edit</button>
            <button class="delete" data-id='${product.id}'><i class="fa-solid fa-trash"></i> Delete</button>
          </div>
        </div>
      </div>
    `;
    productGrid.insertAdjacentHTML('beforeend', displayProduct);
  });

  attachEventListeners(); 
}

const getData = async () => {
  try {
    const { data } = await axios(url);
    renderProduct(data); 
    attachSubcategoryFilter(data); 
    attachSearchFilter(data); 
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
getData();


async function getProduct(product) {
  try {
    const data = axios.patch(url)
    attachEventListeners(data)
  } catch (error) {
    console.log(error);
  }
}


function filterProductsBySubcategory(products, selectedSubcategory) {
  if (selectedSubcategory === 'all') {
    return products;
  }
  return products.filter(product => product.subcategory.toLowerCase() === selectedSubcategory.toLowerCase());
}

function attachSubcategoryFilter(products) {
  subcategoryDropdown.addEventListener('change', function () {
    const selectedSubcategory = subcategoryDropdown.value;
    const filteredProducts = filterProductsBySubcategory(products, selectedSubcategory);
    renderProduct(filteredProducts); 
  });
}

function filterProductsBySearch(products, searchTerm) {
  if (!searchTerm) {
    return products; 
  }
  return products.filter(product => 
    product.productTitle.toLowerCase().includes(searchTerm.toLowerCase()) || 
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

function attachSearchFilter(products) {
  searchButton.addEventListener('click', function () {
    const searchTerm = searchInput.value.trim();
    const filteredProducts = filterProductsBySearch(products, searchTerm);
    renderProduct(filteredProducts); 
  });
}

function attachEventListeners(product) {
  const editBtns = document.querySelectorAll('.edit');
  editBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      currentProductId = e.currentTarget.dataset.index;
      
      const productToEdit = product.find(product => product.id === currentProductId);
      // console.log(productToEdit);
      // console.log('clicked');
      openNav();
      if (currentProductId) {
        // Pre-fill modal inputs with existing product details
        titleInput.value = currentProductId.productTitle;
        descriptionInput.value = currentProductId.description;
        imageUrlInput.value = currentProductId.imageUrl;
        categoryInput.value = currentProductId.category;
        subcategoryInput.value = currentProductId.subcategory;
        priceInput.value = currentProductId.price;

         // Show the modal
      }
    });
  });

  const deleteBtns = document.querySelectorAll('.delete');
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', async function (e) {
      const productId = this.getAttribute('data-id');
      console.log('Delete button clicked for product ID:', productId);

      try {
        await axios.delete(`${url}/${productId}`);
        getData();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    });
  });
}

// Handle saving edited product details
saveButton.addEventListener('click', async function () {
  const updatedProduct = {
    productTitle: titleInput.value,
    description: descriptionInput.value,
    imageUrl: imageUrlInput.value,
    category: categoryInput.value,
    subcategory: subcategoryInput.value,
    price: priceInput.value
  };

  try {
    await axios.put(`${url}/${currentProductId}`, updatedProduct);
    closeNav();  // Close the modal
    getData();  // Reload the updated data
  } catch (error) {
    console.error('Error updating product:', error);
  }
});

function openNav() {
  modal.style.visibility = 'visible';
}

function closeNav() {
  modal.style.visibility = 'hidden';
}

// Close the modal when clicking the close button
document.querySelector('.close').addEventListener('click', closeNav);


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
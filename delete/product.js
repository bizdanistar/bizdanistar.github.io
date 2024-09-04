const productList = document.querySelector('.productList');
const form = document.querySelector('form');
const addBtn = document.querySelector('#add');
const updateBtn = document.querySelector('#update');

// Modal elements
const showModal = document.querySelector('.modal');
let imageUrlModal = document.querySelector('#image-url-modal');
let productTitleModal = document.querySelector('#product-title-modal');
let descriptionModal = document.querySelector('#description-modal');
let priceModal = document.querySelector('#price-modal');
const saveBtn = document.querySelector('.save');

// API URL
const url = 'https://solar-poised-salad.glitch.me/nazgul';

let itemId = null;

// Function to render the products
function renderProduct(products) {
  productList.innerHTML = ''; 
  products.forEach((product) => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.innerHTML = `
      
        <div class="item">
          <div class="img">
            <img class="image" src="${product.imageUrl}" alt="${product.title}" />
          </div>
          <div class="price">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p class='price1'>$${product.price}</p>
            <div class="priceBtn">
              <button data-index="${product.id}" class='edit buttons'><i class="fa-solid fa-pen"></i> Edit</button>
              <button data-index="${product.id}" class='delete buttons'><i class="fa-solid fa-trash"></i> Delete</button>
            </div>
          </div>
        </div>
    
    `;
    productList.appendChild(productItem);
  });

  attachEventListeners();
}

// Function to get product data
async function getProduct() {
  try {
    const res = await fetch(`${url}/${itemId}`);
    const data = await res.json();

    imageUrlModal.value = data.imageUrl;
    productTitleModal.value = data.title;
    descriptionModal.value = data.description;
    priceModal.value = data.price;
  } catch (error) {
    console.error('Error fetching product:', error);
  }
}

// Function to get and render data
const getData = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    renderProduct(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

function attachEventListeners() {
  const editBtns = document.querySelectorAll('.edit');
  editBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      itemId = e.currentTarget.dataset.index;
      getProduct();
      showModal.style.display = 'block';
    });
  });

  const deleteBtns = document.querySelectorAll('.delete');
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const itemId = e.currentTarget.dataset.index;
      const confirmation = confirm('Are you sure that you want to delete this product?');
      if (confirmation) {
        deleteProduct(itemId);
      }
    });
  });
}

// Save button event listener
saveBtn.addEventListener('click', async function () {
  const updatedData = {
    imageUrl: imageUrlModal.value,
    title: productTitleModal.value,
    description: descriptionModal.value,
    price: parseFloat(priceModal.value),
  };

  try {
    const res = await fetch(`${url}/${itemId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    if (res.ok) {
      getData(); 
      showModal.style.display = 'none';
    } else {
      console.error('Failed to update the item');
    }
  } catch (error) {
    console.error('Error updating product:', error);
  }
});

// Delete product function
async function deleteProduct(id) {
  try {
    const res = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      getData(); 
    } else {
      console.error('Failed to delete the item');
    }
  } catch (error) {
    console.error('Error deleting product:', error);
  }
}

// Close modal event listeners
document.querySelector('.close').addEventListener('click', () => {
  showModal.style.display = 'none';
  resetModalFields();
});



// Function to reset modal fields
function resetModalFields() {
  imageUrlModal.value = '';
  productTitleModal.value = '';
  descriptionModal.value = '';
  priceModal.value = '';
}

// Initialize the app by fetching and rendering data
getData();

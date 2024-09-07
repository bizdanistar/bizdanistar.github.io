console.log(location.href);
const url = `https://solar-poised-salad.glitch.me/nazgul/`;
let shopCart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(shopCart);

async function getProduct() {
    try {
        const response = await axios.get(url);
        renderCart();
    } catch (error) {
        console.log(error);
    }
}

getProduct();

function renderCart() {
    const cartDiv = document.querySelector('.cartDiv');
    const itemCountDiv = document.querySelector('.itemCount');
    const totalSumDiv = document.querySelector('.totalSum');
    
    cartDiv.innerHTML = ''; 
    let totalItems = 0;
    let totalSum = 0; 

    let productMap = new Map();


    shopCart.forEach(product => {
        if (productMap.has(product.id)) {
            // If product already exists, increase the quantity
            let existingProduct = productMap.get(product.id);
            existingProduct.quantity += 1;
            productMap.set(product.id, existingProduct);
        } else {
            // If product does not exist, add it with a quantity of 1
            productMap.set(product.id, { ...product, quantity: 1 });
        }
    });

    // Now render the unique products in the cart
    productMap.forEach((product, productId) => {
        totalItems += product.quantity; // Increment the total item count
        totalSum += parseInt(product.price) * product.quantity; // Add the price times quantity to the total sum
        
        const displayProduct = ` 
            <div class="item" data-id="${productId}">
                <div class="img">
                    <img src="${product.imageUrl}" alt="">
                </div>
                <div class="price">
                    <p>${product.productTitle}</p>
                    <p>${product.description}</p>
                    <span>${product.category} > ${product.subcategory}</span>
                    <p>Price: $<span>${product.price}</span></p>
                    <p>Quantity: <span>${product.quantity}</span></p>
                    <p>Total: $<span>${(product.price * product.quantity).toFixed(2)}</span></p>
                    <div class="priceBtn">
                        <button class='cart-delete' data-id='${productId}'>
                            <i class="fa-solid fa-trash"></i> Delete
                        </button>
                    </div>
                </div>
            </div>
        `;
        cartDiv.insertAdjacentHTML('beforeend', displayProduct);
    });

    // Update the item count and total sum display
    itemCountDiv.textContent = `Total Items: ${totalItems}`;
    totalSumDiv.textContent = `Total Price: $${totalSum.toFixed(2)}`;

    // Attach delete functionality to each delete button
    document.querySelectorAll('.cart-delete').forEach(button => {
        button.addEventListener('click', deleteProduct);
    });
}

// Function to delete a product from the cart
function deleteProduct(event) {
    const productId = event.target.closest('button').dataset.id; // Get product id from the button
    shopCart = shopCart.filter(product => product.id !== productId); // Remove all instances of the product with the id
    localStorage.setItem("cart", JSON.stringify(shopCart)); // Update localStorage
    renderCart(); // Re-render the cart to reflect changes
}

  // Product Data
  const productData = {
    ornamental: {
        name: 'Ornamental Plants',
        items: [
            {
                name: 'Portulaca Grandiflora',
                price: 12,
                image: 'Ornamental plants/PortulacaGrandiflora.png',
            },
             {
                name: 'Bougainvillea',
                price: 10,
                image: 'Ornamental plants/Bougainvillea.png',
            },
             {
                name: 'jasmine',
                 price: 18,
                 image: 'Ornamental plants/jasmine.png',
             },
            {
                 name: 'golden barrel cactus',
                price: 18,
                 image: 'Ornamental plants/Golden_Barrel_Cactus-removebg-preview.png',
            },
             {
                name: 'monstera',
                 price: 25,
                 image: 'Ornamental plants/Monstera.png',
             },
               {
                 name: 'hardy kiwi vine',
                 price: 25,
                 image: 'Ornamental plants/Hardy Kiwi Vine.jpg',
              },
            {
                name: 'Snake Plant',
                price: 15,
                image: 'Ornamental plants/Snake Plant.png',
            },
             {
               name: 'Giant Taro',
               price: 20,
               image: 'Ornamental plants/Giant Taro.png',
            },
            {
               name: 'Tulip Purple Prince',
               price: 22,
               image: 'Ornamental plants/Purple_Prince_Tulips-removebg-preview.png',
             },
        ],
    },
    gardening: {
        name: 'Gardening Tools',
        items: [
            {
                name: 'Pot',
                price: 15,
                image: 'gardening tools/flower_pot-removebg-preview.png',
            },
            {
                name: 'Axe',
                price: 25,
                image: 'gardening tools/axe-removebg-preview.png',
            },
            {
                name: 'Shovel',
                price: 35,
                image: 'gardening tools/shovel-removebg-preview.png',
            },
             {
               name: 'Lawn Mower',
               price: 150,
               image: 'gardening tools/lawn_mower-removebg-preview.png'
             },
             {
               name: 'Watering Can',
               price: 18,
               image: 'gardening tools/watering_can-removebg-preview.png'
             },
             {
               name: 'Garden Hose',
               price: 28,
                image: 'gardening tools/garden_hose-removebg-preview.png'
             },
             {
               name: 'Rake',
               price: 22,
               image: 'gardening tools/rake-removebg-preview.png'
             },
            {
               name: 'Hedge Shears',
               price: 30,
               image: 'gardening tools/hedge_shears-removebg-preview.png'
            },
            {
               name: 'Wheelbarrow',
               price: 70,
               image: 'gardening tools/wheelbarrow-removebg-preview.png'
            },
            {
               name: 'Gardening Gloves',
               price: 12,
               image: 'gardening tools/gardening_gloves-removebg-preview.png'
           },
          {
              name: 'Gardening Boots',
              price: 40,
              image: 'gardening tools/gardening_boots-removebg-preview.png'
          },
           {
               name: 'Urea Fertilizer',
               price: 20,
               image: 'gardening tools/urea_fertilizer-removebg-preview.png'
           }
        ],
    },
     saplings: {
        name: 'Tree Saplings',
         items: [
             {
                 name: 'Acacia',
                 price: 40,
                 image: 'trees/acacia_sapling-removebg-preview.png',
             },
             {
                 name: 'Baobab',
                price: 45,
                image: 'trees/Baobab-removebg-preview (1).png',
            },
             {
               name: 'Conocarpus',
                price: 38,
               image: 'trees/Conocarpus-removebg-preview.png',
             },
             {
                 name: 'Desert Dates',
                 price: 42,
                 image: 'trees/desert_dates-removebg-preview (1).png',
             },
            {
                 name: 'Ebony',
                price: 48,
                 image: 'trees/ebony-removebg-preview.png',
            },
            {
               name: 'Khaya',
               price: 50,
               image: 'trees/Khaya-removebg-preview.png',
             },
            {
                name: 'Lebbeck',
                price: 44,
                image: 'trees/Lebbeck-removebg-preview.png',
            },
            {
                name: 'Neem',
                price: 52,
                image: 'trees/neem_sapling-removebg-preview.png',
            },
             {
                 name: 'Tamarind',
                 price: 55,
                 image: 'trees/Tamarindus_indica_sapling-removebg-preview.png',
            },
        ],
   },
   
};


// Get DOM elements
const categorySelect = document.getElementById('categorySelect');
const productGrid = document.getElementById('productGrid');
const cartTableBody = document.getElementById('cartTable').querySelector('tbody');
const totalAmountElement = document.getElementById('totalAmount');
const shoppingCart = []; // array to store shopping cart items

// Event listener for category selection
categorySelect.addEventListener('change', () => {
    productGrid.innerHTML = ''; // clear previous products

    // Check if the selected category exists
    if (productData[categorySelect.value]) {
        productData[categorySelect.value].items.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            // Add to cart container
            const addToCartContainer = document.createElement('div');
            addToCartContainer.classList.add('add-to-cart-container');

            const quantityInput = document.createElement('input');
            quantityInput.type = 'number';
            quantityInput.value = '1';
            quantityInput.min = '1';
            quantityInput.classList.add('quantity-input');

            const addToCartButton = document.createElement('button');
            addToCartButton.classList.add('add-to-cart-button');
            addToCartButton.textContent = 'Add to Cart';

            addToCartButton.addEventListener('click', () => {
                const quantity = parseInt(quantityInput.value, 10);
                if (quantity > 0) {
                 addToCart(product.name, product.price, quantity);
                }
                
            });

            addToCartContainer.appendChild(quantityInput);
            addToCartContainer.appendChild(addToCartButton);

            // Added HTML to the card
            productCard.innerHTML = `
                <img class="product-image" src="${product.image}" alt="${product.name}">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
            `;
            productCard.appendChild(addToCartContainer);
            productGrid.appendChild(productCard);
        });
    }
});

// Function to add product to shopping cart
function addToCart(productName, productPrice, quantity) {
    const existingCartItem = shoppingCart.find(item => item.name === productName);
    if (existingCartItem) {
        existingCartItem.quantity += quantity; // increment quantity if item already in cart
    } else {
        shoppingCart.push({ name: productName, price: productPrice, quantity: quantity }); // add a new item if not already in the cart
    }
    renderCart(); // update cart display
}

 // Function to display the shopping cart
function renderCart() {
    cartTableBody.innerHTML = ''; // Clear previous cart items
    let cartTotal = 0; // initialize the cart total

    // Iterate over cart items to build the table
    shoppingCart.forEach(item => {
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td><button class="remove-item-button" onclick="removeFromCart('${item.name}')">Remove</button></td>
        `;
        cartTableBody.appendChild(tableRow); // add row to table
        cartTotal += item.price * item.quantity; // calculate total
    });
     // Apply tax or discount
     let totalWithTaxDiscount = cartTotal;
    if(cartTotal < 200 && cartTotal > 0) {
       totalWithTaxDiscount = cartTotal * 1.15;
    } else if (cartTotal >= 200) {
       totalWithTaxDiscount = cartTotal * 0.85;
    }

    totalAmountElement.textContent = totalWithTaxDiscount.toFixed(2); // show the total amount
}

// Function to remove an item from the shopping cart
function removeFromCart(productName) {
   const itemIndex = shoppingCart.findIndex(item => item.name === productName);
   if (itemIndex !== -1) {
       if (shoppingCart[itemIndex].quantity > 1) {
           shoppingCart[itemIndex].quantity--; // decrement quantity if more than one
        } else {
            shoppingCart.splice(itemIndex, 1); // Remove the item if quantity is 1
        }
     renderCart(); // Update the cart display
   }
}

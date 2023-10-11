document.addEventListener('DOMContentLoaded', function () {
  renderCartItems();
  function renderCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;

    // Clears the cart container every time the function is called
    const cartPage=document.getElementById("cart").innerHTML = "";
   
    //renders each item in cart
    cart.forEach(product => {
      const cartPage=document.getElementById("cart");
      cartPage.classList.add('cartPage');

      const productDetails = document.createElement('div');
      productDetails.classList.add('prodDetails');

      const prodDetailsImage=document.createElement('div');
      cartPage.classList.add('prodDetailsImage');

      const prodDetailsContent=document.createElement('div');
      cartPage.classList.add('prodDetailsContent');


      const img = document.createElement('img');
      img.classList.add("checkout-img");
      img.setAttribute('src', product.image);
      prodDetailsImage.appendChild(img);

      const h5 = document.createElement('h5');
      h5.innerHTML = product.title;
      h5.classList.add('prodTitle')
      prodDetailsContent.appendChild(h5);

      const h6 = document.createElement('h6');
      if (typeof product.price === "number") {
        h6.innerHTML = ` Price $${product.price.toFixed(2)}`;
        totalPrice += product.price * (product.quantity || 1);
      } else {
        h6.innerHTML = ` Price: $${0}`;
      }
      prodDetailsContent.appendChild(h6);
      
      cartPage.classList.add('prodDetailsImage');
      
      const quantityContainer = document.createElement('div');
      quantityContainer.classList.add('quantity-container');

      const minusButton = createButton('-', () => updateQuantity(product, -1));
      prodDetailsContent.appendChild(minusButton);

      // Create a single quantityElement for each cart item
      const quantityElement = document.createElement('span');
      quantityElement.textContent = product.quantity || 1;
      prodDetailsContent.appendChild(quantityElement);

      const plusButton = createButton('+', () => updateQuantity(product, 1));
      prodDetailsContent.appendChild(plusButton);

      prodDetailsContent.appendChild(quantityContainer);

      // Remove button
      const removeButton = createButton('Remove', () => removeFromCart(product));
      removeButton.classList.add('removeButton')
      prodDetailsContent.appendChild(removeButton);


      const cartContainer = document.getElementById('cart');
      cartContainer.classList.add("cartContainer");
      cartContainer.appendChild(productDetails);
      productDetails.appendChild(prodDetailsImage);
      productDetails.appendChild(prodDetailsContent);

    });
    // Render total price
    const cartContainer = document.getElementById('cart');
    const totalPriceElement = document.createElement('div');
    totalPriceElement.classList.add('total-price');
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
    cartContainer.appendChild(totalPriceElement);

    // Store total price in the local storage
    localStorage.setItem("totalPrice", totalPrice.toFixed(2));
    const placeOrder = createButton('Place Order', () => address());
    placeOrder.classList.add("placeOrder","btn",
    "btn-primary",
    "col-12",
    "mx-auto",
    "mt-auto",
    "pink-btn");
     cartContainer.appendChild(placeOrder);

  }

  function address() {
    window.location.href = "address.html";
  }



  function createButton(text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', onClick);
    return button;
  }


  function updateQuantity(product, change) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.map(item => {

      if (item.id === product.id) {
        item.quantity = (item.quantity || 1) + change;
      }
      return item;

    });

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    renderCartItems();

  }



  function removeFromCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.filter(item => item.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    renderCartItems();
  }

});
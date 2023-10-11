fetch('https://fakestoreapi.com/products/'.concat(localStorage.getItem('CurrId')))
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let productDetails = document.getElementById('productDetails')
        let productImage=document.createElement('div')
        productImage.classList.add("productImage")

        let productContent=document.createElement('div')
        productContent.classList.add("productContent")
        
        productDetails.appendChild(productImage)
        productDetails.appendChild(productContent)
        let img = document.createElement('img')
        img.setAttribute('src', data.image)
        img.classList.add("prod-img");
        productImage.appendChild(img)
       // productDetails.appendChild(img)

        let h5 = document.createElement('h5')
        h5.innerHTML = data.title;
        h5.classList.add("prod-title");
        productContent.appendChild(h5)
       // productDetails.appendChild(h5)

        let h6 = document.createElement('h6')
        h6.innerHTML = `$ ${data.price}`;
        h6.classList.add("prod-price");
        productContent.appendChild(h6)
       // productDetails.appendChild(h6)

        let p = document.createElement('p')
        p.innerHTML = data.description;
        p.classList.add("prod-desc");
        productContent.appendChild(p)
        //productDetails.appendChild(p)

        const cardButton = document.createElement("a");
        cardButton.classList.add(
            "btn",
            "btn-primary",
            "col-12",
            "mx-auto",
            "mt-auto",
            "pink-btn"
        );
        cardButton.textContent = "Add to Cart";
        productContent.appendChild(cardButton);
        //productDetails.appendChild(cardButton);
        cardButton.addEventListener('click', () => {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const productId = data.id;
            // Check if the product is already in the cart
            const productIndex = cart.findIndex(item => item.id === productId);
            if (productIndex === -1) {
                // Product is not in the cart, add it
                cart.push(data);
                localStorage.setItem('cart', JSON.stringify(cart));
                console.log("Product added to cart:", data);
            } else {
                console.log("Product already in the cart.");
            }
           alert("Product is added to cart. Continue shopping:)");
        });

    })
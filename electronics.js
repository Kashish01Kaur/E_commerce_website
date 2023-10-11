// Fetching all products
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 3 seconds
}
//Fetching Electronics
fetch("https://fakestoreapi.com/products/category/electronics")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then((data) => {
    console.log(data);

    const mainContainer = document.getElementById("electronics");
    const cardDeck = document.createElement("div");
    cardDeck.classList.add("card-deck");

    data.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.width = "18rem";
      card.style.margin = "1rem";

      const cardImage = document.createElement("img");
      cardImage.classList.add("card-img-top");
      cardImage.alt = "Product Image";
      cardImage.src = product.image;
     
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body", "d-flex", "flex-column");

      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = product.title;
      

      const cardPrice = document.createElement("p");
      cardPrice.classList.add("card-price");
      cardPrice.textContent = product.price;
      cardPrice.textContent = `$ ${product.price}`;
     
      const cardButton = document.createElement("a");
      cardButton.classList.add(
        "btn",
        "btn-primary",
        "col-12",
        "mx-auto",
        "mt-auto",
        "card-btn"
      );
      cardButton.href = "productDetails.html";
      cardButton.textContent = "View More";
     

      cardDeck.appendChild(card);
      card.appendChild(cardImage);
      card.appendChild(cardBody);
      cardBody.appendChild(cardButton);
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardPrice);

     
      cardButton.addEventListener('click',()=>{
        localStorage.setItem("CurrId",product.id)
      })
    });

    mainContainer.appendChild(cardDeck);
  })
  .catch((error) => console.error("FETCH ERROR:", error));



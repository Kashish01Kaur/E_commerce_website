const totalPrice = localStorage.getItem("totalPrice");
    const totalPriceElement = document.getElementById("totalPrice");
    totalPriceElement.textContent = `$${totalPrice}`;
function submitPayment() {
    const form = document.getElementById("paymentForm");
    const payment = form.elements["payment"].value;
    localStorage.setItem("payment", payment);
  
    // Show payment success message
    alert("Payment Successfully Made!Thank You for Shopping with us:)");
  
    // Add your code to confirm the order and redirect to the order confirmation page
    
}
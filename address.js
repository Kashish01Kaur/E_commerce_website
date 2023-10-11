function storeAddress() {
    const form = document.getElementById("addressForm");
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const address = form.elements["address"].value;
    const customer = { name, email, address };
    localStorage.setItem("customer", JSON.stringify(customer));
    window.location.href = "payment.html";
  }
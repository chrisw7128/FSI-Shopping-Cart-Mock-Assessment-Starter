let increase = document.getElementById("quantity-up");
let decrease = document.getElementById("quantity-down");

let product_quantity = 1;

let total_quantity = document.querySelector(".total-quantity");

increase.addEventListener("click", function () {
  console.log("plus one");
  product_quantity += 1;
  console.log(product_quantity);
  total_quantity.textContent = `Quantity: ${product_quantity}`;
});
decrease.addEventListener("click", function () {
  if (product_quantity > 0) {
    console.log("minus one");
    product_quantity -= 1;
    console.log(product_quantity);
  }
  total_quantity.textContent = `Quantity: ${product_quantity}`;
});

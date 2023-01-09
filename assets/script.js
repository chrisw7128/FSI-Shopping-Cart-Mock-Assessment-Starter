let increase = document.getElementById("quantity-up");
let decrease = document.getElementById("quantity-down");

let product_quantity = 0;

increase.addEventListener("click", function () {
  console.log("plus one");
  product_quantity += 1;
  console.log(product_quantity);
});
decrease.addEventListener("click", function () {
  console.log("minus one");
  product_quantity -= 1;
  console.log(product_quantity);
});

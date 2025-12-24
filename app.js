const products = [
  { id: 1, name: "Idli", price: 10 },
  { id: 2, name: "Dosa", price: 40 }
];

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || {};
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(id) {
  const cart = getCart();
  cart[id] = (cart[id] || 0) + 1;
  saveCart(cart);
  alert("Added to cart");
}

const productDiv = document.getElementById("products");

if (productDiv) {
  products.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p>${p.name} - ₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add</button>
    `;
    productDiv.appendChild(div);
  });
}

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
  renderProducts();
}

function renderProducts() {
  const cart = getCart();
  const productDiv = document.getElementById("products");
  productDiv.innerHTML = "";

  products.forEach(p => {
    const qty = cart[p.id] || 0;

    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <div>
        <strong>${p.name}</strong><br>
        ₹${p.price}
      </div>
   <div>
  <button onclick="addToCart(${p.id})">ADD</button>
  ${qty > 0 ? ` x ${qty}` : ""}
</div>

    `;
    productDiv.appendChild(div);
  });
}

renderProducts();

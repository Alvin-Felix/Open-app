const products = [
  { id: 1, name: "Idli", price: 10 },
  { id: 2, name: "Dosa", price: 40 }
];

const productDiv = document.getElementById("products");

if (productDiv) {
  products.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `${p.name} - ₹${p.price}`;
    productDiv.appendChild(div);
  });
}

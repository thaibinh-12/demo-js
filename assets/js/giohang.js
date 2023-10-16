var cartList = [];
var totalPrice = 0;

function addToCard(id, name, price, image) {
  document.getElementById("alert").style.display = "flex";
  setTimeout(() => {
    document.getElementById("alert").style.display = "none";
  }, 3000);

  var product = {
    id: id,
    name: name,
    price: price,
    quantity: 1,
    image: image,
  };
  cartList.push(product);
}

function renderCart() {
  document.getElementById("totalPrice").innerHTML = totalPrice;
  const productListContainer = document.getElementById("cart-list");
  productListContainer.innerHTML = "";
  cartList.forEach((product) => {
    const productDiv = document.createElement("cart-body");
    productDiv.innerHTML = `
                <div class="cart-item">
                    <div class="cart-product">
                        <img src="${product.image}" alt="">
                        <h5>${product.name}</h5>
                    </div>
                    <h5>$${product.price}</h5>
                    <div class="quantity quantity${product.id}">
                        <i class="fa-solid fa-minus" onclick="decreaseQuantity(${
                          product.id
                        })"></i>
                        <h5 id="quantity">${product.quantity}</h5>
                        <i class="fa-solid fa-plus" onclick="increaseQuantity(${
                          product.id
                        })"></i>
                    </div>
                    <h5>$${product.price * product.quantity}</h5>
                    <i class="fa-solid fa-trash icons" onclick="removeProduct(${
                      product.id
                    })"></i>
                </div>
            <hr>
          `;
    productListContainer.appendChild(productDiv);
  });
}

function showCart() {
  document.getElementById("cart").style.display = "block";
  calculator();
  renderCart();
}
function hiddenCart() {
  document.getElementById("cart").style.display = "none";
}

function increaseQuantity(id) {
  cartList.forEach((product) => {
    if (product.id === id) {
      product.quantity++;
      calculator();
      renderCart();
    }
  });
}

function decreaseQuantity(id) {
  cartList.forEach((product) => {
    if (product.id === id && product.quantity > 1) {
      product.quantity--;
      calculator();
      renderCart();
    }
  });
}

function removeProduct(id) {
  cartList = cartList.filter((product) => product.id !== id);
  calculator();
  renderCart();
}

function calculator() {
  totalPrice = 0;
  cartList.forEach((product) => {
    totalPrice += product.quantity * product.price;
  });
}

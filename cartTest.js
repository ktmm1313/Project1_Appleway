let carts = document.querySelectorAll(".add-cart");
//Array info
let items = [
  { name: "Object Onion Rings", price: 7, inCart: 0 },
  { name: "Scripts Chips & Sal", price: 6, inCart: 0 },
  { name: "camelCase Chili Fries", price: 8, inCart: 0 },
  { name: "Boolean Breadsticks", price: 5, inCart: 0 },
  { name: "Pig Latin Chops", price: 13, inCart: 0 },
  { name: "Kims Chicken Alfredo", price: 15, inCart: 0 },
  { name: "Katies Sirloin Steak Dinner", price: 19, inCart: 0 },
  { name: "Alessias Salmon Supreme", price: 17, inCart: 0 },
  { name: "BJs BLTA Salad", price: 9, inCart: 0 },
  { name: "Blairs Balsamic Glazed Caprese", price: 9, inCart: 0 },
  { name: "Tiias Tabbouleh Salad", price: 8, inCart: 0 },
  { name: "Detroit GC Deluxe Ceasar Salad", price: 5, inCart: 0 },
  { name: "Function(fruitFritters)", price: 5, inCart: 0 },
  { name: "Truthy Tiramisu", price: 6, inCart: 0 },
  { name: "Joes Smores", price: 4, inCart: 0 },
  { name: "Conditional Churros", price: 4, inCart: 0 }
];

//cart tracker for add to cart clicks
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(items[i]);
    totalCost(items[i]);
  });
}
//Checks local storage to get number of cart items if it exists
function onLoadCartNumbers() {
  let itemNumbers = localStorage.getItem("cartNumbers");

  if (itemNumbers) {
    document.querySelector(".cart span").textContent = itemNumbers;
  }
}

function cartNumbers(item) {
  let itemNumbers = localStorage.getItem("cartNumbers");
  itemNumbers = parseInt(itemNumbers);

  if (itemNumbers) {
    localStorage.setItem("cartNumbers", itemNumbers + 1);
    document.querySelector(".cart span").textContent = itemNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }

  setItems(item);
}

//adding the items to the cart
function setItems(item) {
  let cartItems = localStorage.getItem("itemsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[item.name] == undefined) {
      cartItems = {
        ...cartItems,
        [item.name]: item,
      }
    }
    cartItems[item.name].inCart += 1;
  } else {
    item.inCart = 1;
    cartItems = {
      [item.name]: item,
    }
  }
  localStorage.setItem("itemsInCart", JSON.stringify(cartItems));
}

function totalCost(item) {
  let cartCost = localStorage.getItem("totalCost");
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + item.price);
  } else {
    localStorage.setItem("totalCost", item.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("itemsInCart");
  cartItems = JSON.parse(cartItems);
  let lineItems = document.querySelector(".items");
  let cartCost = localStorage.getItem("totalCost");
  let subtotal = document.querySelector(".subtotal");

  if (cartItems && lineItems) {
    lineItems.innerHTML = '';
    Object.values(cartItems).map(itemList => {
      lineItems.innerHTML += `<div class = "item-container">
      <div class = "item">${itemList.name}</div>
      <div class = "price">$${itemList.price}.00</div>
      <div class = "quantity">${itemList.inCart} </div>
      <div class = "total">$${itemList.inCart * itemList.price}.00 </div> 
     </div> `;
    })
    // subtotal.innerHTML += `
    // <div class = "cartSubTotalContainer">
    //    <h4 class = "cartSubTotalTitle">
    //    Order SubTotal
    //    </h4>
    //    <h4 class = "cartSubTotal">
    //    $${cartCost}.00
    //    </h4>
    // `;
    // subtotal.innerHTML += `
    // <div class = "cartTaxContainer">
    //    <h4 class = "cartTaxTitle">
    //    Tax
    //    </h4>
    //    <h4 class = "cartTaxTotal">
    //    $${cartCost * .06}
    //    </h4>
    // `;
    // subtotal.innerHTML += `
    // <div class = "cartTotalContainer">
    //    <h4 class = "cartTotalTitle">
    //    Order Total
    //    </h4>
    //    <h4 class = "cartTotal">
    //    $${orderTotal}
    //    </h4>
    // `;

  }
}
onLoadCartNumbers();
displayCart();

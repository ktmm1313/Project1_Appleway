let carts = document.querySelectorAll(".add-cart");
//Array info
let item = [
    {name: 'Object Onion Rings',
    price: 6.99,
    inCart: 0},
    {name: 'Scripts Chips & Sal',
    price: 5.99,
    inCart: 0},
    {name: 'camelCase Chili Fries',
    price: 7.99,
    inCart: 0},
    {name: 'Boolean Breadsticks',
    price: 4.99,
    inCart: 0},
    {name: 'Pig Latin Chops',
    price: 12.99,
    inCart: 0},
    {name: 'Kims Chicken Alfredo',
    price: 14.99,
    inCart: 0},
    {name: 'Katies Sirloin Steak Dinner',
    price: 18.99,
    inCart: 0},
    {name: 'Alessias Salmon Supreme',
    price: 16.99,
    inCart: 0},
    {name:'BJs BLTA Salad',
    price: 8.99,
    inCart: 0},
    {name: 'Blairs Balsamic Glazed Caprese',
    price: 8.50,
    inCart: 0},
    {name: 'Tiias Tabbouleh Salad',
    price: 8.25,
    inCart: 0},
    {name: 'Detroit GC Deluxe Ceasar Salad',
    price: 4.99,
    inCart: 0},
    {name: 'Function(fruitFritters)',
    price: 4.99,
    inCart: 0},
    {name: 'Truthy Tiramisu',
    price: 5.50,
    inCart: 0},
    {name: 'Joes Smores',
    price: 3.99,
    inCart: 0},
    {name: 'Conditional Churros',
    price: 3.50,
    inCart: 0},
]

//cart tracker
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(item[i]);
        totalCost(item[i]);
    })
}

function onLoadCartNumbers() {
    let itemNumbers = localStorage.getItem('cartNumbers');

    if(itemNumbers) {
        document.querySelector('.cart span').textContent = itemNumbers;
    }
}

function cartNumbers(item) {
  let itemNumbers = localStorage.getItem('cartNumbers');

  itemNumbers = parseInt(itemNumbers);

if(itemNumbers) {
    localStorage.setItem('cartNumbers', itemNumbers + 1);
    document.querySelector('.cart span').textContent = itemNumbers + 1;
}else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
}

setItems(item);
}

function setItems(item) {
    let cartItems = localStorage.getItem('itemsInCart');
    cartItems = JSON.parse(cartItems);
    
    if(cartItems != null) {

        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [item.tag]: item
            }
        }
        cartItems[item.tag].inCart += 1;
    } else {
        item.inCart = 1;
        cartItems = {
            [item.tag]: item
        }
    }

    localStorage.setItem("itemsInCart", JSON.stringify
    (cartItems));
}
function totalCost(items) {
   // console.log("The products price is", item.price);
    let cartCost = localStorage.getItem('totalCost');
    cartCost = parseInt(cartCost);
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null) {
        localStorage.setItem("totalCost", cartCost + item.price);
    }else {
        localStorage.setItem("totalCost", item.price);
    }
}
onLoadCartNumbers();

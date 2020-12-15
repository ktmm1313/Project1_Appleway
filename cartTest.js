let carts = document.querySelectAll('.add-cart');
let item = [
    {
    //Array info
    name:
    tag:
    price:
    inCart: 0 //cart tracker
}
]

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function onLoadCartNumbers() {
    let itemNumbers = localStorage.getItem('cartNumbers');

    if(itemNumbers) {
        document.querySelector('cart span').textContent = itemNumbers;
    }
}

function cartNumbers() {
  let itemNumbers = localStorage.getItem('cartNumbers');

  itemNumbers = parseInt(itemNumbers);

if(itemNumbers) {
    localStorage.setItem('cartNumbers', itemNumbers + 1);
    document.querySelector('.cart span').textContent = itemNumbers + 1;
}else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
}

  
}
onLoadCartNumbers();

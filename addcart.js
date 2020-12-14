//in the add to cart function, add invoice.push to push item from array
let cart = [
    {name: 'Object Onion Rings',
    price: 6.99},
    {name: 'Scripts Chips & Salsa',
    price: 5.99},
    {name: 'camelCase Chili Fries',
    price: 7.99},
    {name: 'Boolean Breadsticks',
    price: 4.99},
    {name: 'Pig Latin Chops',
    price: 12.99},
    {name: 'Kims Chicken Alfredo',
    price: 14.99},
    {name: 'Katies Sirloin Steak Dinner',
    price: 18.99},
    {name: 'Alessias Salmon Supreme',
    price: 16.99},
    {name: 'BJs BLTA Salad',
    price: 8.99},
    {name: 'Blairs Balsamic Glazed Caprese',
    price: 8.50},
    {name: 'Tiias Tabbouleh Salad',
    price: 8.25},
    {name: 'Detroit GC Deluxe Ceasar Salad',
    price: 4.99},
    {name: 'Function(fruitFritters)',
    price: 4.99},
    {name: 'Truthy Tiramisu',
    price: 5.50},
    {name: 'Joes Smores',
    price: 3.99},
    {name: 'Conditional Churros',
    price: 3.50},
]

//Event Listener for Appetizers
document.getElementById("onionButton").addEventListener('click', function(){
    cart.push({name: 'Object Onion Rings',
    price: 6.99});
    console.log(cart[0]);
})

document.getElementById("salsaButton").addEventListener('click', function(){
    cart.push({name:'Script Chips & Salsa',
    price: 5.99});
    console.log(cart[1]);
})

document.getElementById("chiliButton").addEventListener('click', function(){
    cart.push({name: 'camelCase Chili Fries',
    price: 18.99});
    console.log(cart[2]);
})

document.getElementById("breadButton").addEventListener('click', function(){
    cart.push({name: 'Boolean Breadsticks',
    price: 16.99});
    console.log(cart[3]);
})


//Event Listener for Main Dishes

document.getElementById("chopButton").addEventListener('click', function(){
    cart.push({name: 'Pig Latin Chops',
    price: 12.99});
    console.log(cart[4]);
})

document.getElementById("chickenButton").addEventListener('click', function(){
    cart.push({name: 'Kims Chicken Alfredo',
    price: 14.99});
    console.log(cart[5]);
})

document.getElementById("steakButton").addEventListener('click', function(){
    cart.push({name: 'Katies Sirloin Steak Dinner',
    price: 18.99});
    console.log(cart[6]);
})

document.getElementById("salmonButton").addEventListener('click', function(){
    cart.push({name: 'Alessias Salmon Supreme',
    price: 16.99});
    console.log(cart[7]);
})


//Event Listener for Salads

document.getElementById("bltaButton").addEventListener('click', function(){
    cart.push({name: 'BJs BLTA Salad',
    price: 8.99});
    console.log(cart[8]);
})

document.getElementById("blairButton").addEventListener('click', function(){
    cart.push({name: 'Blairs Balsamic Glazed Caprese',
    price: 8.50});
    console.log(cart[9]);
})

document.getElementById("tiiaButton").addEventListener('click', function(){
    cart.push({name: 'Tiias Tabbouleh Salad',
    price: 8.25});
    console.log(cart[10]);
})

document.getElementById("gcButton").addEventListener('click', function(){
    cart.push({name: 'Detroit GC Deluxe Ceasar Salad',
    price: 4.99});
    console.log(cart[11]);
})

//Event Listerner for Desserts
document.getElementById("fritterButton").addEventListener('click', function(){
    cart.push({name: 'BJs BLTA Salad',
    price: 8.99});
    console.log(cart[12]);
})

document.getElementById("truthyButton").addEventListener('click', function(){
    cart.push({name: 'Truthy Tiramisu',
    price: 5.50});
    console.log(cart[13]);
})

document.getElementById("smoreButton").addEventListener('click', function(){
    cart.push({name: 'Joes Smores',
    price: 3.99});
    console.log(cart[14]);
})

document.getElementById("churroButton").addEventListener('click', function(){
    cart.push({name: 'Conditional Churros',
    price: 3.50});
    console.log(cart[15]);
});


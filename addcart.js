//in the add to cart function, add invoice.push to push item from array
let item = [
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
//Video 
let carts = document.querySelectorAll('.add-cart');
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function cartNumbers() {
    localStorage.setItem('cartNumbers', 1);

}

//Event Listener for Appetizers
document.getElementById("onionButton").addEventListener('click', function(){
    item.push({name: 'Object Onion Rings',
    price: 6.99});
    console.log(item[0]);
})

document.getElementById("salsaButton").addEventListener('click', function(){
    item.push({name:'Script Chips & Salsa',
    price: 5.99});
    console.log(item[1]);
})

document.getElementById("chiliButton").addEventListener('click', function(){
    item.push({name: 'camelCase Chili Fries',
    price: 18.99});
    console.log(item[2]);
})

document.getElementById("breadButton").addEventListener('click', function(){
    item.push({name: 'Boolean Breadsticks',
    price: 16.99});
    console.log(item[3]);
})


//Event Listener for Main Dishes

document.getElementById("chopButton").addEventListener('click', function(){
    item.push({name: 'Pig Latin Chops',
    price: 12.99});
    console.log(item[4]);
})

document.getElementById("chickenButton").addEventListener('click', function(){
    item.push({name: 'Kims Chicken Alfredo',
    price: 14.99});
    console.log(item[5]);
})

document.getElementById("steakButton").addEventListener('click', function(){
    item.push({name: 'Katies Sirloin Steak Dinner',
    price: 18.99});
    console.log(item[6]);
})

document.getElementById("salmonButton").addEventListener('click', function(){
    item.push({name: 'Alessias Salmon Supreme',
    price: 16.99});
    console.log(item[7]);
})


//Event Listener for Salads

document.getElementById("bltaButton").addEventListener('click', function(){
    item.push({name: 'BJs BLTA Salad',
    price: 8.99});
    console.log(item[8]);
})

document.getElementById("blairButton").addEventListener('click', function(){
    item.push({name: 'Blairs Balsamic Glazed Caprese',
    price: 8.50});
    console.log(item[9]);
})

document.getElementById("tiiaButton").addEventListener('click', function(){
    item.push({name: 'Tiias Tabbouleh Salad',
    price: 8.25});
    console.log(item[10]);
})

document.getElementById("gcButton").addEventListener('click', function(){
    item.push({name: 'Detroit GC Deluxe Ceasar Salad',
    price: 4.99});
    console.log(item[11]);
})

//Event Listerner for Desserts
document.getElementById("fritterButton").addEventListener('click', function(){
    item.push({name: 'BJs BLTA Salad',
    price: 8.99});
    console.log(item[12]);
})

document.getElementById("truthyButton").addEventListener('click', function(){
    item.push({name: 'Truthy Tiramisu',
    price: 5.50});
    console.log(item[13]);
})

document.getElementById("smoreButton").addEventListener('click', function(){
    item.push({name: 'Joes Smores',
    price: 3.99});
    console.log(item[14]);
})

document.getElementById("churroButton").addEventListener('click', function(){
    item.push({name: 'Conditional Churros',
    price: 3.50});
    console.log(item[15]);
});

//Things I Googled//
/*loadEventListerners ();
function loadEventListeners() {
    //when new food item is added
    food.addEventListener('click', buyFood);

function buyFood (e) {
    if(e.target.foodList.contains('add-cart')) {
        //read the food value
    const food = e.target.parentElement.parentElement;
        getFoodInfo(food);
        }
    }
}

function getFoodInfo (food) {
    //create an object with food data
    const foodInfo = {
        image: food.querySelector('img').src,
        title: food.querySelector('h3').textContent,
        price: course.querySelector('price').textContent,
        id: food.querySelector('a').getAttribute('data-id')
    }
    addToCart(foodInfo);
}

function addToCart(food) {
    const row = document.createElement('tr');

    row.innerHTML = `
<tr>
    <td>
        <img src="${food.image}" width="100">
    </td>
    <td>
        ${food.title}
    </td>
    <td>
        ${food.price}
    </td>
    <td>
        <a href="#" class="remove" data-id"${food.id}">X</a>
    </td>
</tr>
    `
    ;

    shippingCartContent.appendChild(row);
}
*/

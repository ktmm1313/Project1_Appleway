//in the add to cart function, add invoice.push to push item from array
let invoice = [
    {name: 'Pig Latin Chops',
    price: 12.99},
    {name: 'Kims Chicken Alfredo',
    price: 14.99},
    {name: 'Katies Sirloin Steak Dinner',
    price: 18.99},
    {name: 'Alessias Salmon Supreme',
    price: 16.99},
]

document.getElementById("chopButton").addEventListener('click', function(){
    invoice.push({name: 'Pig Latin Chops',
    price: 12.99});
    console.log(invoice);
})

document.getElementById("chickenButton").addEventListener('click', function(){
    invoice.push({name: 'Kims Chicken Alfredo',
    price: 14.99});
    console.log(invoice);
})

document.getElementById("steakButton").addEventListener('click', function(){
    invoice.push({name: 'Katies Sirloin Steak Dinner',
    price: 18.99});
    console.log(invoice);
})

document.getElementById("salmonButton").addEventListener('click', function(){
    invoice.push({name: 'Alessias Salmon Supreme',
    price: 16.99});
    console.log(invoice);
})

//in the add to cart function, add invoice.push to push item from array


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

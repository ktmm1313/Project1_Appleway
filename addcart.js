loadEventListerners ();

function loadEventListeners() {
    //when new food item is added
    courses.addEventListener('click', buyFood);

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

    row.innerHTML = ``
}
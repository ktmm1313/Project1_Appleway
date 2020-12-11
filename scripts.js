var products = [];
var cart = [];

function addProduct() {
    var productID = document.getElementById("produceID").nodeValue;
    var product_desc = document.getElementById("product_desc").nodeValue;
    var qty = document.getElementById("quantity").nodeValue;
    var price = document.getElementById("price").nodeValue;

    var newProduct = {
        product_id: null,
        product_desc: null,
        product_qty: 0,
        product_price: 0.00,
    };

    newProduct.product_id = productID;
    newProduct.product_desc = product_desc;
    newProduct.product_qty = qty;
    newProduct.product_price = price;

    products.push(newProduct);
}

function addCart(product_id) {

    for (var i = 0; i < products.length; i++) {
        if (products[i].product_id == product_id) {
            var cartItem = null;
            for (var k = 0; k < cart.length; k++) {
                if (cart[k].product.product_id == products[i].product_id) {
                    cartItem = cart[k];
                    cart[k].product_qty++;
                    break;
                }
            }
            if (cartItem == null) {
                
                var cartItem = {
                    product: products[i],
                    product_qty: products[i].product_qty 
                };
                cart.push(cartItem);
            }
        }
    }
}

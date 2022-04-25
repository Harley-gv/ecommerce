//  cart

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//abrir carrito de compras
cartIcon.onclick = () => {
    cart.classList.add("active");
}

//cerrar carrito de compras
closeCart.onclick = () => {
    cart.classList.remove("active");
}

//

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

// creando funciones
function ready() {

    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem)
    }
    //Quantity changes
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)

    }
}

// eliminar items del carrito
function removeCartItem(e) {
    var buttonClicked = e.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
//Quantity changes
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updatetotal()
}

//update total
function updatetotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-card');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price  = parseFloat(priceElement.innerText.replace("$", ""))
        var quantity = quantityElement.value;
        total = total + (price * quantity);

        document.getElementsByClassName('total-price')[0].innerText = "$" + total;
    }
}
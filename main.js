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

if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}else{
    ready();
} 

// creando funciones
function ready(){
  //eliminar items del carrito
  var removeCartButtons = document.getElementsByClassName('cart-remove');
  console.log(removeCartButtons)
  for (var i = 0; i < removeCartButtons.length; i++){
       var buttton = removeCartButtons[i];
       buttton.addEventListener('click',removeCartItem)
  }
}

//
function removeCartItem(e) {
    var butttonCliked =  e.target;
    butttonCliked.parentElement.remove()
}
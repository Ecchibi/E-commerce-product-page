const btnPlus = document.getElementById("plus");
const Qte = document.querySelector(".QuantitySelector-input");
const btnMinus = document.getElementById("minus");
const btnAddToCart = document.querySelector(".add-to-cart");
const price = document.getElementById("promo-price");
const notif = document.getElementById("notif");
 
//mode Objet :)
let basket = new Basket();

//======QUANTITé PRODUCT====
var i = 1;
btnPlus.addEventListener("click", () => {
   if(i <= 99){
   i++;
   Qte.value = i;
   }
});

btnMinus.addEventListener("click", () => {
   if(i > 1){
      i--;
      Qte.value = i;
   }
});



//====NOTIF PANIER + localStorage===

btnAddToCart.addEventListener("click", () => {
   const product = {id:"1","price":125.00};
   basket.add(product);
   // addBasket(product);
   // changeQuantity(product, Qte.value-1);
   basket.changeQuantity(product, Qte.value-1);
   // var nombreArticle = getNumberProduct()
   var nombreArticle = basket.getNumberProduct();
   notif.innerHTML = nombreArticle; 
 
   if(getComputedStyle(notif) == "flex") { //.style
      notif.style.display = "none";
   }else{
      notif.style.display = "flex"; //flex
   }

});



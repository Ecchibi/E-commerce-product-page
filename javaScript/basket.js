//========PANIER======

function saveBasket(basket){
   localStorage.setItem("basket",JSON.stringify(basket));//lolcalstorage = api navigatueur
   //on serialize avec JSON pour ne pas avoir objet objet
}

function getBasket(){
   let basket = (localStorage.getItem("basket"));
   if(basket == null){
      return [];
   }else{
      return JSON.parse(basket);
   }
}

function addBasket(product){
   let basket = getBasket();
   let foundProduct = basket.find(p => p.id == product.id); //je cherche un produit dont l'id est egal a l'id que je veux ajouter 
   if(foundProduct != undefined){
      foundProduct.quantity++
   }else{
      product.quantity = 1;
      basket.push(product);//ajoute le produit au tableau
   }
   saveBasket(basket);
}

function removeFromBasket(product){ //supp tout le panier
   let basket = getBasket();
   basket = basket.filter(p => p.id != product.id);
   saveBasket(basket);
}

function changeQuantity(product, quantity){
   let basket = getBasket();
   let foundProduct = basket.find(p => p.id == product.id);
   if(foundProduct != undefined){
      foundProduct.quantity += quantity;
      if(foundProduct.quantity <= 0){
         removeFromBasket(foundProduct);
      }else{
         saveBasket(basket);
      }
   }
  
}

function getNumberProduct(){
   let basket = getBasket();
   let number = 0;
   for(let product of basket){
      number += product.quantity;
   }
   return number;
}

function getTortalPrice(){ 
   let basket = getBasket();
   let price = 0;
   for(let product of basket){
      price += product.quantity * product.price;
   }
   return price;
}


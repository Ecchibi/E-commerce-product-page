//========ORIENTER OBJET PANIER======

class Basket{
   constructor(){
      let basket = (localStorage.getItem("basket"));
      if(basket == null){
         this.basket = [];
      }else{
         this.basket = JSON.parse(basket);
      }
   }
   save(){
      localStorage.setItem("basket",JSON.stringify(this.basket));//lolcalstorage = api navigatueur
      //on serialize avec JSON pour ne pas avoir objet objet
   }

   add(product){

      let foundProduct = this.basket.find(p => p.id == product.id); //je cherche un produit dont l'id est egal a l'id que je veux ajouter 
      if(foundProduct != undefined){
         foundProduct.quantity++
      }else{
         product.quantity = 1;
         this.basket.push(product);//ajoute le produit au tableau
      }
      this.save();
   }
   remove(product){ //supp tout le panier
      this.basket = this.basket.filter(p => p.id != product.id);
      this.save();
   }

   changeQuantity(product, quantity){
      let foundProduct = this.basket.find(p => p.id == product.id);
      if(foundProduct != undefined){
         foundProduct.quantity += quantity;
         if(foundProduct.quantity <= 0){
            this.remove(foundProduct);
         }else{
            this.save();
         }
      }
     
   }

   getNumberProduct(){
      let number = 0;
      for(let product of this.basket){
         number += product.quantity;
      }
      return number;
   }

   getTortalPrice(){ 
      let price = 0;
      for(let product of this.basket){
         price += product.quantity * product.price;
      }
      return price;
   }
}










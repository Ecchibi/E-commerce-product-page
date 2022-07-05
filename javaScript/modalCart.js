const modalCart = document.querySelector(".modal-cart");
const iconCart = document.querySelector(".cart");


iconCart.addEventListener("click",() =>{
      modalCart.classList.add("open");
});

modalCart.addEventListener("click",(e) =>{
      if(e.target.classList.contains('modal-cart')){
      modalCart.classList.remove("open");
}
});

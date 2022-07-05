const modalCart = document.querySelector(".modal-cart");
const iconCart = document.querySelector(".cart");

iconCart.addEventListener("click",() =>{
   // console.log(e.target);
   modalCart.classList.add("open");
});

iconCart.addEventListener("click",() =>{
      modalCart.classList.remove("open");
   
});

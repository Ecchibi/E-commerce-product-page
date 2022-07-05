const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const cross = document.querySelector(".cross-close-modal");
const previews2 = document.querySelectorAll(".choices-modal img");




previews.forEach(preview => {
   preview.addEventListener("click", () =>{
      modal.classList.add("open");
      original.classList.add("open");
      cross.classList.add("open");
      //Dynamic change images
      const originalSrc = preview.getAttribute("data-original");
      original.src =`images/${originalSrc}`
      //evite de mettre images/ ↑ dans img html
   });
});

modal.addEventListener("click", (e) => { //e = l'element
   // console.log(e);
   if(e.target.classList.contains('modal')){
      modal.classList.remove("open");
      original.classList.remove("open");
   }
});

cross.addEventListener("click", () => {
      modal.classList.remove("open");
      original.classList.remove("open");

});

previews2.forEach(preview => {
   preview.addEventListener("click", () =>{
      //Dynamic change images
      const originalSrc = preview.getAttribute("data-original");
      original.src =`images/${originalSrc}`
      //evite de mettre images/ ↑ dans img html
   });
});

// let imgActive = 0;
// for  (let i = 1; i< previews2.length; i +=1){
//    previews2[i].classList.add('hidden');
// }


// document.getElementById("icon-next").addEventListener('click', () =>{
//    previews2[imgActive].classList.add("hidden");
//    imgActive +=1;
//    previews2[imgActive].classList.remove("hidden");

// })

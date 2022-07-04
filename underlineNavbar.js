//============================
const collections = document.getElementById("collections");
let line2 = document.querySelector(".line2");
const men = document.getElementById("men");
let line3 = document.querySelector(".line3");
const women = document.getElementById("women");
let line4 = document.querySelector(".line4");
const about = document.getElementById("about");
let line5 = document.querySelector(".line5");
const contact = document.getElementById("contact");
let line6 = document.querySelector(".line6");



collections.addEventListener("mouseover", () => {
   // getComputedStyle(line2).display = "flex";
   line2.style.display = "block";
});

collections.addEventListener("mouseout", () => {
   // getComputedStyle(line2).display = "flex";
   line2.style.display = "none";
});

men.addEventListener("mouseover", () => {
   // getComputedStyle(line2).display = "flex";
   line3.style.display = "block";
});

men.addEventListener("mouseout", () => {
   // getComputedStyle(line2).display = "flex";
   line3.style.display = "none";
});

women.addEventListener("mouseover", () => {
   // getComputedStyle(line2).display = "flex";
   line4.style.display = "block";
});

women.addEventListener("mouseout", () => {
   // getComputedStyle(line2).display = "flex";
   line4.style.display = "none";
});

about.addEventListener("mouseover", () => {
   // getComputedStyle(line2).display = "flex";
   line5.style.display = "block";
});

about.addEventListener("mouseout", () => {
   // getComputedStyle(line2).display = "flex";
   line5.style.display = "none";
});


contact.addEventListener("mouseover", () => {
   // getComputedStyle(line2).display = "flex";
   line6.style.display = "block";
});


contact.addEventListener("mouseout", () => {
   // getComputedStyle(line2).display = "flex";
   line6.style.display = "none";
});

//============================
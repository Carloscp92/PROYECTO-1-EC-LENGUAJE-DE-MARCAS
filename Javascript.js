//===MENU BURGUER===

let burguer= document.querySelector(".burguer");
let nav= document.querySelector("nav");

burguer.addEventListener("click",()=>{

   nav.classList.toggle("visible");
})

//===POPUP COOKIES===

const popup = document.getElementById("cookiePopup");
const btn = document.getElementById("acceptCookies")

if(!localStorage.cookiesAccepted){
popup.classList.add("show");
}

btn.addEventListener("click",function(){
   localStorage.cookiesAccepted="true";
   popup.classList.remove("show");
})
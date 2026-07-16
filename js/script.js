window.addEventListener("scroll", function(){

const header = document.querySelector("header");

if(window.scrollY > 50){
header.style.background="#111";
}else{
header.style.background="#222";
}

});
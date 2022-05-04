const navbar = document.querySelector("#navbar_mobile");
const bars = document.querySelector(".fa-bars-staggered");
const close = document.querySelector(".fa-xmark");


bars.addEventListener('click', ()=>{
    navbar.style.width = "240px";
    navbar.style.boxShadow = "0 0 10px 5px rgba(0, 0, 0, 0.355)";
})

close.addEventListener('click', ()=>{
    navbar.style.width = "0px"; 
    navbar.style.boxShadow = "none";
})

window.addEventListener('scroll', ()=>{
    const header = document.querySelector('header');
    header.classList.toggle('scrolling-active', window.scrollY > 0);
})
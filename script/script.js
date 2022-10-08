var icon_bars = document.querySelector(".icon-bars");
var nav_none = document.querySelector(".nav-none");


icon_bars.addEventListener("click",()=>{
    nav_none.classList.toggle("nav-block")
})

window.onscroll = ()=>{
    nav_none.classList.remove("nav-block")

}
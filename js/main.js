const slides = document.getElementById("slides");
const allslides = document.querySelectorAll(".swiper-slide");
const items = document.querySelectorAll(".menu-tab")
const tabs = document.querySelector(".header-low");
 
window.onload = function loadSettings(){
    var ancho = slides.clientWidth + "px"
    for(var a=0; a < allslides.length; a++){
        allslides[a].style.width = ancho;
    }

}



 function update() {
    window.addEventListener("resize", function(){
        var ancho = slides.clientWidth + "px"
        allslides[0].clientWidth - slides.clientWidth;
        for(var a=0; a < allslides.length; a++){
            allslides[a].style.width = ancho;
        }

      })


}

update(); 

tabs.addEventListener("click", function(e){
    if(e.target.classList.contains("menu-tab") && !e.target.classList.contains("active")) {
        tabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
    }
})

function pixelChange(){

}

items.forEach((item, i) => {
    item.addEventListener("click", () => {
        var index = i;
        console.log(i)
        var pixel = -slides.clientWidth * index;
        console.log(slides.clientWidth  - pixel)
        slides.style.transform = "translateX(" + pixel + "px)"
       
    })
}); 




const typeTabs = document.querySelector(".type");
typeTabs.addEventListener("click", function(e){
    if(e.target.classList.contains("list-tab") && !e.target.classList.contains("active")) {
        const target = e.target.getAttribute("data-target");
        typeTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuType = document.querySelector(".menu-list-pizza");
        menuType.querySelector(".menu-type-content.active").classList.remove("active");
        menuType.querySelector(target).classList.add("active")
    }

})

var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    disableOnInterction: false,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
})

const images = document.querySelectorAll(".thumbnail-img")
const imageShow = document.querySelector(".agregar-imagen")
const contenedorShow = document.querySelector(".lightbox")

images.forEach(image => {
    image.addEventListener("click", ()=>{
       aparecerImagen(image.getAttribute("src"))
    })
} )

contenedorShow.addEventListener("click", (e)=>{
    if(e.target !== imageShow){
        contenedorShow.classList.toggle("show")
        imageShow.classList.toggle("showImage")
    }
} )

const aparecerImagen = (image) => {
    imageShow.src = image
    contenedorShow.classList.toggle("show")
    imageShow.classList.toggle("showImage")
    
}
const imagenes = document.querySelectorAll('.img-galeria')
const imagenLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light')
const closeLight = document.querySelector('.close')


imagenes.forEach(imagen => {
    imagen.addEventListener('click',()=>{ /* Una accion cada vez que de click*/
        aparecerImagen(imagen.getAttribute('src')); /*Cada que le das click es la direccion de su imagen */
    })
});

contenedorLight.addEventListener('click',(e)=>{
    if(e.target !== imagenLight){ /* Si es diferente a a imagen se cierra el programa */
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage')
        hamburguer.style.opacity = '1';
    }
})


const aparecerImagen = (imagen)=>{   /* FUNCION */
    imagenLight.src = imagen;
    contenedorLight.classList.toggle('show') /* Contender */
    imagenLight.classList.toggle('showImage') /* Agregar la imagen con el contendedor */
    hamburguer.style.opacity = '0'; /* Opacidad del menu*/
}
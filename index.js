



let boton = document.getElementById("boton");
/* miBoton.onclick = nuevo; */
boton.addEventListener("click", cambiarColorFondo,cambiarColorFondo);
function cambiarColorFondo() {
    
    var cambiar = document.getElementById("cambiar");
   
    cambiar.innerHTML = '<h3 style="color:#F93232;background-color: #100080">Felicidades sigue igual de aburrido, pero rojo</h3>';
    

}


let boton1 = document.getElementById("volver");
/* miBoton.onclick = nuevo; */
boton1.addEventListener("click", cambiartexto);
function cambiartexto() {
    
    var cambiar1 = document.getElementById("cambiar");
    cambiar1.innerHTML = '<h3>Si le das click al boton me voy a cambiar </h3>';


}


function animacion_con_canvas() 
// creamos la función  animacion_con_canvas
{

 const mi_canvas = document.getElementById("canvas");
 // el elemento bautizado "canvas"  sera usado para crear la animaciòn

 const contexto = mi_canvas.getContext("2d");
 // creamos el contexto para poder animar en canvas
 // canvas soporta animaciones en 2d y en 3d, en este ejemplo usaremos animaciones 2d


 let img_palomita = new Image();
 // creamos un objeto del tipo imagen
 //  Como todo objeto tiene propiedades métodos y eventos

 img_palomita.src="js.svg";
 // con la propiedad src definimos la imagen a cargar. DEBE ESCRIBIRSE LA RUTA CORRECTA A LA IMAGEN

 img_palomita.addEventListener('load', animar_imagen, false);
 // para poder mostrar la imagen, primero debe cargarse...
 // la imagen tienen el evento load, que se produce cuando la imagen se ha descargado en el navegador
 // el método EventListener permite verificar cuando la imagen se ha cargado
 // cuando la imagen se ha cargado ejecutaremos la función mostrar_imagen, que mostrará la imágen en el canvas
 // el método EventListener utiliza las variables (evento, función a ejecutar, indica si se desea iniciar el registro del evento)

 let xpos = 0;
 // posicion inicial de nuesto objeto a animar
 
 const velocidad = 0.16;

 // cuantos pixeles en 0.016 segundos avanzara nuestro objeto a animar
 // IMPORTANTE: requestAnimationFrame() se ejecuta 60 veces por segundo 
 // aqui el objeto se animará 10 pixeles por segundo
 // 0.16 = 10 pixeles por segundo / 60 veces por segundo que se ejecuta requestAnimationFrame()
 // si queremos que nuesto objeto se mueva más rápido o lento, solo tenemos que modificar la velocidad

 function animar_imagen() 
 // creamos la función  animar_imagen para mostrar y mover la imagen en el canvas
 // esta función se ejecuta cuando la imagen se ha cargado
 {

  const fx_animar_imagen = requestAnimationFrame(animar_imagen);
  // invocamos la función requestAnimationFrame
  // requestAnimationFrame intenta ejecutar una función 60 veces por segundo
  // en este caso ejecutará la función animar_imagen
  // el método requestAnimationFrame utiliza las variables (función a ejecutar)

  contexto.fillStyle = "#0b1270";
  // contexto es un objeto. Como todo objeto tiene propiedades métodos y eventos
  // aqui utilizamo la propiedad fillStyle para definir el color de fondo de objeto a dibujar 


  contexto.fillRect(0, 0, 450, 100);
  // aqui utilizamo el método fillRect para crear un rectángulo
  // el método fillRect utiliza las variables  (posición en x, posición en y, ancho, alto)
  // creamos un rectangulo para borrar el fondo
  // CANVAS crea animaciones cuadro por cuadro, frame by frame. 
  // 100 años después se sigue usando el mismo método para animar.
  // Se dibuja un cuadro. Se dibuja otro cuadro. Se dibuja otro cuadro. Y así hasta el infinito. 
  // El secreto está en mostrar sucesivamente esos cuadros para crear la ilusión de animación.  
  // El método RequestAnimationFrame() intenta mostrar 60 cuadros por segundo. ¡Más rápido que el cine! 
  // creamos un rectangulo para borrar el cuadro dibujado previamente por CANVAS

  
  contexto.drawImage(img_palomita, xpos, 21); 
  // aqui utilizamo el método drawimage para mostrar a nuestra imagen dentro del canvas
  // el método drawimage utiliza las variables  (imagen a cargar, posición en x, posición en y)
  // el método drawimage se puede usar indistintamente para cargar imágenes jpg, png o svg
  // aquí la posición en x cambiará dinámicamente
  
  
  xpos = xpos + velocidad;
  // aumentamos el valor de xpos  con el valor de velocidad
  
 }  

 animar_imagen();
 // ejecutamos la funcion animar_imagen() que creará un loop eterno
 // el loop ejecutara la funcion animar_imagen()
 // animar_imagen() irá dibujando cuadro por cuadro nuestra animaciòn
 return setInterval(animar_imagen, 5);
}

animacion_con_canvas();

// cuando la página se cargue, ejecutaremos la función  animacion_con_canvas();
const imagenes = document.querySelectorAll('.imagenes');

// Obtener los botones
const botones = document.querySelectorAll('.boton');

// Definir la variable para contar
let contador = 0;

// Agregar el evento a los botones
botones.forEach(boton => {
  boton.addEventListener('click', () => {
    // Obtener la direccion del boton
    const direccion = boton.dataset.direccion;

    // Si la direccion es igual a 1
    if (direccion === '1') {
      contador++;
    } else {
      contador--;
    }

    // Si contador es mayor que el largo de imagenes
    if (contador > imagenes.length - 1) {
      contador = 0;}
   
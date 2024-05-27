import {add, reset, decrease} from './counter.js'

// Función para sumar
let  sumar = document.querySelector("#add");
sumar.addEventListener("click", add);

// Función para resetear
let  resetear = document.querySelector("#reset");
resetear.addEventListener("click", reset);

// Función para restar
let  restar = document.querySelector("#decrease");
restar.addEventListener("click",decrease);

//Aquí estarán los eventos que ejecutarán cada una de las funciones realizadas

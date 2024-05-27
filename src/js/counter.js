function add(){
    contador++;
    let suma = document.querySelector ("#number")
    suma.innerHTML = contador;
    //Escribir tu código que aumenta
}

function reset(){
    contador = 0;
    let reseteo = document.querySelector ("#number");
    reseteo.innerHTML = contador;
    //Escribir tu código que hace un reset a 0
}

function decrease(){
    if (contador > 0){
        contador--;
        let resta = document.querySelector ("#number");
        resta.innerHTML = contador;
        //Escribir tu código que resta
    }

if (contador === 0){
    contador = 0;
    let resta = document.querySelector("#number");
    resta.innerHTML = contador;
};
};


let contador = 0;
export {add, reset, decrease}

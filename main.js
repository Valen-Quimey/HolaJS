// respuestas correctas

let correctas = [3, 1, 2, 2, 3];

//respuestas del usuario

let opcion_elegida = [];

let cantidad_correctas = 0;


function respuesta(num_pregunta, seleccionada) {
    //guardo la rta elegida
    opcion_elegida [num_pregunta] = seleccionada.value;


    id="p" + num_pregunta;

    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";

    seleccionada.parentNode.style.backgroundColor = "#FCC8D1";
}

function corregir() {
    cantidad_correctas = 0;
    for(i=0; i < correctas.length; i++) {
        if(correctas[i]==opcion_elegida[i]) {
            cantidad_correctas++; 
        }
    }
    document.getElementById("resultado").innerHTML = cantidad_correctas;
}
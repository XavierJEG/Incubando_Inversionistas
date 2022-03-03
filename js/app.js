// Obtiene el boton de submit y lo asigna
var btnSubmit = document.getElementById("btnSubmit").addEventListener("onClick", Score);
// Acumulador de la puntuacion final

// Funcion de validacion
// FALTA CORREGIR EL QUE AVANCE EL CAROUSEL DESPUÉS DE DAR CLICK EN SIGUENTE AUNQUE NO SE HAYA ELEGIDO UNA RESPUESTA
function Valid(index){
    var btnNext=document.getElementsByClassName("btnNext");

    // Verifca si no esta chequeado una opcion
    if(!document.querySelector('input[name="q'+index+'"]:checked')){ // input[name="q1"]:checked
        alert("Selecciona una opcion");
    }
    else{
        btnNext.href="#myCarouselslider";
    }
}

function Score() {
    let score = 0;

    var rb = document.querySelectorAll("input[type=radio]:checked"); // CAMBIAR VAR POR LET
    //Recorre el HTMLCollection y suma los value de cada uno en score
    for (let i = 0; i < rb.length; i++) {
        score += parseInt(rb[i].value); //score = score + parseInt(rb[i].value
    }
    
    var placeHolder = document.getElementById("resultado");
    if (score <= 9)
        placeHolder.innerHTML="Eres un inversionista Conservador"; // CAMBIAR innerHTML POR innerText
    else if (score > 9 && score <= 14)
        placeHolder.innerHTML="Eres un inversionista Moderado"; // CAMBIAR innerHTML POR innerText
    else
        placeHolder.innerHTML="Eres un inversionista Agresivo"; // CAMBIAR innerHTML POR innerText
}

function Reset(){
    var responses = document.querySelectorAll("input[type=radio]:checked");
    for(let i=0;i<responses.length;i++){
        responses[i].checked=false;
    }
}

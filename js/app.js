//Obtiene el boton de submit y lo asigna
var btnSubmit = document.getElementById("btnSubmit").addEventListener("onClick", Score);
//Acumulador de la puntuacion final

//[NOT WORKING RIGHT] Funcion de validacion
function Valid(index){
    var btnNext=document.getElementsByClassName("btnNext");

    //Verifca si no esta chequeado una opcion
    if(!document.querySelector('input[name="q'+index+'"]:checked')){ //input[name="q1"]:checked
        alert("Selecciona una opcion");
    }
    else{
        btnNext.href="#myCarouselslider";
    }
}

function Score() {
    let score = 0;

    var rb = document.querySelectorAll("input[type=radio]:checked");
    //Recorre el HTMLCollection y suma los value de cada uno en score
    for (let i = 0; i < rb.length; i++) {
        score += parseInt(rb[i].value); //score = score + parseInt(rb[i].value
    }
    
    var placeHolder = document.getElementById("resultado");
    if (score <= 9)
        placeHolder.innerHTML="Eres un inversionista Conservador";
    else if (score > 9 && score <= 14)
    placeHolder.innerHTML="Eres un inversionista Moderado";
    else
    placeHolder.innerHTML="Eres un inversionista Agresivo";
}

function Reset(){
    var responses = document.querySelectorAll("input[type=radio]:checked");
    for(let i=0;i<responses.length;i++){
        responses[i].checked=false;
    }
}

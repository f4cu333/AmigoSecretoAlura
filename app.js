// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos=[];
function mostrarAmigos(){
    let listaAmigos =document.getElementById("listaAmigos");
    listaAmigos.innerHTML="";
    for (let i = 0; i < amigos.length; i++) {
        let amigoNuevo=document.createElement("li");
        amigoNuevo.innerHTML=amigos[i];
        listaAmigos.appendChild(amigoNuevo);
        
    }
}
function agregarAmigo() {
    let amigoNombre=document.getElementById("amigo");
     
    if (amigoNombre.value ==="") {
        alert("No se permiten nombres vacios");
        return ;
    } else{  
        amigos.push(amigoNombre.value);
        amigoNombre.value="";
        mostrarAmigos();
    }
}


function sortearAmigo() {
    if (amigos.length===0) {
        alert("no tenes amigos :(");
        return;
    }
    let numeroAmigo= Math.floor(Math.random()*amigos.length);
    let amigoGanador = amigos[numeroAmigo];
    let resultadoSorteo = document.getElementById("resultado");
    resultadoSorteo.innerHTML = "<p> El amigo sorteado es "+ amigoGanador+" <p>";
}
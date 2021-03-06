
// import {mostrarClima} from "./dataViewer.js";

const ciudad = document.querySelector('#city');
var apiURL = "";
var centinela;

function clear(){
    mostarBoton();
    ciudad.value = "";
    nombre_ciudad.textContent = "";
    descripccion.textContent = "";
    actual.textContent = "";
    actual2.textContent = "";
    min.textContent = "";
    min2.textContent = "";
    max.textContent = "";
    max2.textContent = "";
}

function verificarCiudad(){
    ocultarBoton();
     if(ciudad.value==""||ciudad.value==undefined||ciudad.value==null) {
        clear();
        Swal.fire({
        title: "Debe ingresar una ciudad!",
        icon: "warning"
     })
     }
     
     else llamarAPI();
}

function llamarAPI(){
    apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + ciudad.value + ",mx&appid=894c4e2bacbec8c3dbdeeecc8934c5a7";

    var data;
    var request = new XMLHttpRequest();
    request.open('GET',apiURL,true);
    request.send();
    request.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200)
        {  

            var resultRawData =  this.response;
            data =  JSON.parse(resultRawData);
            mostrarClima(data);
            debugger;
            mostarBoton();

        }
        if(this.readyState == 4 && this.status == 404){
            
            Swal.fire({
                title: "Ciudad no encontrada!",
                text: "Por favor intente de nuevo",
                icon: "error"
           })
           clear();
        }
        }
}
function mostarBoton(){
    var boton = document.getElementById('btn');
    boton.style.display = "inline";
}
function ocultarBoton(){
    var boton = document.getElementById('btn');
    boton.style.display = "none";
}


const nombre_ciudad = document.querySelector('#nombre-ciudad');
const descripccion = document.querySelector('#descripccion');

const actual = document.querySelector('#clima-actual');
const actual2 = document.querySelector('#actualmente');

const min = document.querySelector('#clima-min');
const min2 = document.querySelector('#min');

const max = document.querySelector('#clima-max');
const max2 = document.querySelector('#max');

function mostrarClima(data){

    console.log( data.weather[0].description);
    nombre_ciudad.textContent = data.name;
    descripccion.textContent = data.weather[0].description;
    var num;

    num = data.main.temp-273.15;
    actual2.textContent = "Actualmente";
    actual.textContent =  num.toFixed(2)+"°C" ;

    num = data.main.temp_min-273.15;
    min2.textContent = "Min";
    min.textContent = num.toFixed(2)+"°C" ;

    num =  data.main.temp_max-273.15;
    max2.textContent = "Max";
    max.textContent = num.toFixed(2)+"°C" ;

}


let estatura = document.getElementById("input-estatura");

let peso = document.getElementById("input-peso");

let boton = document.getElementById(`calcular`);
boton.addEventListener(`click`, b => {
    resultado = (peso.value / ((estatura.value/100)*(estatura.value/100))).toFixed(2);
    console.log(resultado);
    let salida = document.getElementById(`resultado`);
    salida.innerHTML = resultado
})

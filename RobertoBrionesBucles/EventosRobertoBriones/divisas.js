let peso = document.getElementById("peso-argentino");
let dolar = document.getElementById(`dolar-estadounidense`)

peso.addEventListener(`keyup`, (p) => {
    dolar.value = (p.target.value / 969.14).toFixed(2)
})

dolar.addEventListener(`keyup`, (d) => {
    peso.value = (d.target.value * 969.14).toFixed(2)
})

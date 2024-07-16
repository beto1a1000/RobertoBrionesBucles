let listaNotas = [
    { id: 1, titulo: `Sacar la Basura`, texto: `mi mamá me va a retar si no lo hago`, realizada: true },
    { id: 2, titulo: `Hacer las compras`, texto: `pasame la lista del super`, realizada: false },
]

let idGlobal = 2;

function pintarTarjetas(listaNotas) {
    let contenedor = document.getElementById(`contenedorTarjetas`);
    for (let i = 0; i < listaNotas.length; i++) {
        let nota = document.createElement(`div`);
        nota.className = `card col-lg-3 m-0 p-0 border-5 border-primary`
        nota.innerHTML = `
    <div class=" card d-flex flex-column m-0 container-fluid">
                    <div class="card-header d-flex text-wrap">
                        <label class="form-check-label" for=""> Sacar la basura <input class="form-check-input" type="checkbox" </label>
                    </div>
                    <div class="card-body">
                        <p class="card-text">mi mamá me va a retar si no lo hago</p>
                        <a href="#" class="btn btn-danger d-flex">Borrar nota</a>
                    </div>
                </div>
    `
        contenedor.appendChild(nota)
    }
}
pintarTarjetas(listaNotas)

function crearArray() {
    let tituloForm = document.getElementById(`titulo`).value;
let notaForm = document.getElementById(`notas`).value
}

console.log(titulo.value);
console.log(notas.value);

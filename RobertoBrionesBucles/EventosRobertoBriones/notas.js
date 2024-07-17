const listaNotas = [
  {
    id: 1,
    titulo: `Sacar la Basura`,
    texto: `mi mamá me va a retar si no lo hago`,
    realizada: true,
  },
  {
    id: 2,
    titulo: `Hacer las compras`,
    texto: `pasame la lista del super`,
    realizada: false,
  },
];

let idGlobal = 3;

function agregarNota(titulo, texto) {
  let nuevaNota = {
    id: idGlobal++,
    titulo: titulo,
    texto: texto,
    realizada: false,
  };
  listaNotas.push(nuevaNota);
}

let btnGuardar = document.getElementById(`guardar`);
btnGuardar.addEventListener(`click`, (e) => {
  let titulo = document.getElementById("titulo").value;
  let texto = document.getElementById("texto").value;
  agregarNota(titulo, texto);
  pintarTarjetas(listaNotas);
  e.preventDefault();
});



function pintarTarjetas(listaNotas) {
  let contenedor = document.getElementById(`contenedorTarjetas`);
  if (listaNotas.length !== 0) {
    contenedor.innerHTML = "";
  } else {
    contenedor.innerHTML = "<p>No hay notas para mostrar</p>";
  }
  for (let i = 0; i < listaNotas.length; i++) {
    let nota = document.createElement(`div`);
    nota.className = `card col-lg-3 m-0 p-0 border-5 border-primary`;
    nota.innerHTML = `
    <div class=" card d-flex flex-column m-0 container-fluid">
                    <div class="card-header d-flex text-wrap">
                    <input onClick="marcarRealizada(${listaNotas[i].id})" type="checkbox" ${listaNotas[i].realizada? "checked": ""}>
                        <label class="form-check-label" for="">${listaNotas[i].titulo} </label>
                    </div>
                    <div class="card-body">
                        <p class="card-text">${listaNotas[i].texto}</p>
                        <a id"a-btn" href="#" class="btn btn-danger d-flex">Borrar nota</a>
                    </div>
                </div>
    `;
    contenedor.appendChild(nota);
  }
}
pintarTarjetas(listaNotas);

function marcarRealizada(id) {
  for (let i = 0; i < listaNotas.length; i++) {
    if (listaNotas[i].id) {
      if (listaNotas[i].realizada) {
        listaNotas[i].realizada = false;
      } else {
        listaNotas[i].realizada = true;
      }
    }
  }
  console.log(listaNotas);
}
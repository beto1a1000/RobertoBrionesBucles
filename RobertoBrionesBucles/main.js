/*1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
multiplicar (Los primeros 10 multiplos).*/
let numero = parseInt(prompt("Ingrese un número"))

for (let i = 0; i <= 10; i++) {
    console.log(numero * i)
    console.log("")
}

/*2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.*/
let num = parseInt(prompt("Adivina el número"))
let valor = 0

while (num !== valor) {
    if (num > valor) {
        alert("El número ingresado es mayor al que desea adivinar")
    } else {
        alert("El número ingresado es menor al que desea adivinar")
    }
    num = parseInt(prompt("Intenta de nuevo"))
}
if (num === valor){
    console.log("Adivinaste el número es: " + valor)
}
console.log("")

/* 3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
variable guardar un numero que este en el rango 1 - 100. La persona debera poder
ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
felicitaciones y decirle en cuantos intentos lo ha realizado.*/
let adivina = parseInt(prompt("Adivina el número entre el 1 y el 100"))
let cantidad = 13
let intentos = 1

while (adivina !== cantidad) {
    if (adivina > 100 || adivina < 1) {
        alert("Tu número está fuera de rango")
    } else if (adivina > cantidad) {
        alert("El número ingresado es mayor al que desea adivinar")
    } else {
        alert("Tu número ingresado es menor al que desea adivinar")
    }
    intentos++
    adivina = parseInt(prompt("Intenta de nuevo"))
}
if (adivina === cantidad) {
console.log("Felicidades te tomó: " + intentos + (" intentos encontrarlo"));
}
console.log("")

/*4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
numero ya no es primo.*/
let esPrimo = parseInt(prompt("Ingresa un número para saber si es primo"))
let suma = 0
let axuliar
 
for (i = 1; i <= esPrimo; i++) {
    axuliar = esPrimo % i

    if (axuliar == 0) {
        suma = suma + 1
    }
}

if (suma <= 2 && esPrimo != 1 && esPrimo != 0){
    console.log("El número ingresado es Primo")
} else {
    console.log("El número ingresado no es Primo")
}

/*5. Realizar un programa que permita dado un numero, mostrar todos sus divisores.*/

let numDividir = parseInt(prompt("Ingrese un número"))

for (i = 1; i <= numDividir; i++) {
    if (numDividir % i == 0) {
        console.log(i);
    }
}
console.log("")

/*6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
muestre un mensaje por consola con cada uno de los elementos del array.*/

let animales = ["perro", "gato", "lagartija", "caballo", "flamenco", "mapache", "elefante", "cocodrilo", "pinguino", "oso"]

console.log(animales)
console.log("")

/*7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
doble de cada uno de los elementos.*/
let cantidades = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

for (numero of cantidades) {
    console.log("el doble de " + numero + " es " + numero * 2)
}
console.log("")

/*8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
que muestre un mensaje de presentacion por cada elemento del array.*/
let presentacion

let familiar = [{
    nombre: "Roberto",
    apellido: "Briones",
    edad: 39,
    estatura: 1.68
}, {
    nombre: "Karla",
    apellido: "Cordova",
    edad: 38,
    estatura: 1.55
}, {
    nombre: "Sofia",
    apellido: "Briones",
    edad: 18,
    estatura: 1.60
}, {
    nombre: "Sam",
    apellido: "Briones",
    edad: 8,
    estatura: 1.25
}, {
    nombre: "Sopa",
    apellido: "Briones",
    edad: 3,
    estatura: 0.30
}]

console.log(familiar)
for (i = 0; i < familiar.length; i++)
    presentacion = "Me llamo: " + familiar[i].nombre + (" ") + familiar[i].apellido + (", tengo ") + familiar[i].edad + (" años y mido " + familiar[i].estatura + (" m. de altura"))
console.log(presentacion)

/*9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
muestre los numeros impares.*/
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (i = 0; i <= numeros.length; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
console.log()

/*10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
el usuario ingresa un 0.*/
let num1 = parseInt(prompt("ingresa un número"))
let num2 = parseInt(prompt("ingresa otro número"))
let num3 = parseInt(prompt("ingresa otro número"))
let num4 = parseInt(prompt("ingresa otro número ya por último"))
let numIngresos = [num1, num2, num3, num4]


console.log(numIngresos)

let sumaPar = 0
let sumaImpar = 0
for (i = 0; i <= numIngresos.length; i++) {
    if (numIngresos[i] % 2 == 0) {
        sumaPar = sumaPar + numIngresos[i]
    }
}
if (numIngresos[i] % 2 != 0) {
    sumaImpar = sumaImpar + numIngresos[i]
}
console.log(sumaPar)
console.log(sumaImpar)

/*11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas grande.*/
let maxNumero = Math.max(...numeros)
console.log(maxNumero);
console.log("")

/*12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas chico.*/
let minNumero = Math.min(...numeros)
console.log(minNumero)
console.log("")

/*13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
un empate. Caso contrario mostrar un mensaje con el nombre de la persona
ganadora.*/
let nombre1 = prompt("Ingrese el nombre del jugador 1")
let nombre2 = prompt("ingrese el nombre del jugador 2")
let jugador1
let jugador2


/* 
1 - piedra
2 - papel
3 - tijera

1-2 gana 2
1-3 gana 1
2-3 gana 3
1-1 2-2 3-3 empate
*/

let ganador = false
while (ganador == false) {
    jugador1 = parseInt(prompt(nombre1 + " ingresa (1.-PIEDRA, 2.-PAPEL o 3.-TIJERAS) con número"))
    jugador2 = parseInt(prompt(nombre2 + " ingresa (1.-PIEDRA, 2.-PAPEL o 3.-TIJERAS) con número"))

    if (jugador1 == 1 && jugador2 == 3 || jugador1 == 2 && jugador2 == 1 || jugador1 == 3 && jugador2 == 2) {
        ganador = true
        console.log("Gano jugador 1" + nombre1)
    } else if (jugador2 == 1 && jugador1 == 3 || jugador2 == 2 && jugador1 == 1 || jugador2 == 3 && jugador1 == 2) {
        ganador = true
        console.log("gana jugador 2") + nombre2
    } else {
        console.log("empataron, intenta de nuevo");
    }
}

/*14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado*/
let asteriscos

for (i = 1; i <= 5; i++) {
    asteriscos = ' ';
    for (j = 1; j <= i; j++) {
        asteriscos = asteriscos + ' * '
    }
    console.log(asteriscos)
}
console.log("")

/*15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
pero invertido.*/
let asteriscos2 = ' * '

for (i = 5; i >= 1; i--) {
    console.log(asteriscos2.repeat(i))
}
console.log("");

/*16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR)*/
let desordenado = [1, 13, 53, 6, 77, -4, 7, 3, 6, -5]

function ordenado(numeros) {
    
    for (i = 0; i < numeros.length - 1; i++) {
        for (j = 0; j < numeros.length - i - 1; j++) {
            if (numeros[j] > numeros[j + 1]) {
                [numeros[j], numeros[j + 1]] = [numeros[j + 1], numeros[j]]
            }
        }
    }
}
console.log(desordenado)
console.log("")
ordenado(desordenado)
console.log(desordenado)
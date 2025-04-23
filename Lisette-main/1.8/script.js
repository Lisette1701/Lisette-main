function calcular() {
    let n = prompt(parseInt("Ingrese un numero"));
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma = suma + i;
    }
    alert(`La suma de los primeros números ${array.join("-")} es:{suma} `); 
}

function Pares() {
    let resultado = "";
for (let i = 2; i <= 100; i += 2) {
  resultado += i + " ";
}
alert(resultado);
}

function Impares() {
    let resultado = "";
for (let i = 3; i <= 100; i += 3) {
  resultado += i + " ";
}
alert(resultado);
}

function teclado() {

}
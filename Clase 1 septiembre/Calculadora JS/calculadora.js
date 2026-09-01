
function sumar() {

    // Obtiene el primer numero
    let numero1 = document.getElementById("numero1").value;

    // Obtiene el segundo numero
    let numero2 = document.getElementById("numero2").value;

    // Convierte los valores a numeros
    numero1 = Number(numero1);
    numero2 = Number(numero2);

    // Realiza la suma
    let resultado = numero1 + numero2;

    // Muestra el resultado en el html
    document.getElementById("resultado").textContent = resultado;
}

function restar() {

    // Obtiene el primer numero
    let numero1 = document.getElementById("numero1").value;

    // Obtiene el segundo numero
    let numero2 = document.getElementById("numero2").value;

    // Convierte los valores a numeros
    numero1 = Number(numero1);
    numero2 = Number(numero2);

    // Realiza la resta
    let resultado = numero1 - numero2;

    // Muestra el resultado en el html
    document.getElementById("resultado").textContent = resultado;
}

function dividir() {

    // Obtiene el primer numero
    let numero1 = document.getElementById("numero1").value;

    // Obtiene el segundo numero
    let numero2 = document.getElementById("numero2").value;

    // Convierte los valores a numeros
    numero1 = Number(numero1);
    numero2 = Number(numero2);

    // Realiza la división
    let resultado = numero1 / numero2;

    // Muestra el resultado en el html
    document.getElementById("resultado").textContent = resultado;
}

function multiplicar() {

    // Obtiene el primer numero
    let numero1 = document.getElementById("numero1").value;

    // Obtiene el segundo numero
    let numero2 = document.getElementById("numero2").value;

    // Convierte los valores a numeros
    numero1 = Number(numero1);
    numero2 = Number(numero2);

    // Realiza la multiplicación
    let resultado = numero1 * numero2;

    // Muestra el resultado en el html
    document.getElementById("resultado").textContent = resultado;
}
function limpiar() {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("resultado").value = "";
}

function realizarOperacion(signo) {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("INGRESE VALORES EN LOS DOS CAMPOS, POR FAVOR");
        return;
    }
    var resultado;
    if (signo == "+") {
        resultado = numero1 + numero2;
    } else if (signo == "-") {
        resultado = numero1 - numero2;
    } else if (signo == "*") {
        resultado = numero1 * numero2;
    } else if (signo == "/") {
        resultado = numero1 / numero2;
    }

    document.getElementById("resultado").value = resultado;
    var parrafo = document.getElementById("signo");
    parrafo.innerHTML = signo;
}

function mostrarSignoPositivo() {
    realizarOperacion("+");
}

function mostrarSignoNegativo() {
    realizarOperacion("-");
}

function mostrarSignoMultiplicacion() {
    realizarOperacion("*");
}

function mostrarSignoDivicion() {
    realizarOperacion("/");
}

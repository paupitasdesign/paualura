let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena =document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar() {

    let numeroDigitado = parseInt(cantidad.value);


    if (numeroDigitado < 6) {
        alert("La cantidad de caracteres tiene que ser igual o mayor a 6"); return;
        }

    let password = '';
    for (let i = 0; i < numeroDigitado; i++) {

        let caracterAleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio)

        password+=caracterAleatorio;
    }
    contrasena.value = password;
    validarFortaleza(password);
}

function limpiarCampo () {
    document.getElementById ('contrasena'). value='';
}

function validarFortaleza(password) {
    const tieneNumero = /\d/.test(password);
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneSimbolo = /[!@#$%^&*()']/.test(password);
    const mensajeFortaleza = document.getElementById('strengthMessage');

    if (password.length < 6 || !tieneNumero || !tieneMayuscula || !tieneMinuscula || !tieneSimbolo) {
        mensajeFortaleza.innerHTML = "Weak password! It must contain at least 6 characters, a number, and an uppercase letter.";
        mensajeFortaleza.style.color = 'red';
    } else {
        mensajeFortaleza.innerHTML = "Strong password!";
        mensajeFortaleza.style.color = 'green';
    }
}
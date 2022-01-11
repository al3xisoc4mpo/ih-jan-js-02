// FUNCIONES

// SON FABRICAS DE CODIGOS QUE SE PUEDEN REUTILIZAR LAS VECES NECESARIAS.

// 1. FUNCION DECLARATIVA
// LO QUE SE ENCUENTRA DENTRO DE LOS PARENTESIS EN LA DECLARACION SE LE LLAMAN PARAMETROS
// JAVASCRIPT TRADICIONAL - HOISTING

function saludar(idioma) {
    switch (idioma) {
        case "spanish":
            return "Hola mundo!";
        case "english":
            return "Hello world!";
        case "chinese":
            return "Ni hao!";
        default:
            return "No se especifica el idioma";
    }
}

// TODA FUNCION TIENE SU INVOCACION

const resultado1 = saludar();
const resultado2 = saludar("spanish");
const resultado3 = saludar("chinese");
console.log(resultado2);

// OTRO FORMA DE HACERLO

function saludar2(idioma) {
    let resultado;
    switch (idioma) {
        case "spanish":
            resultado = "Hola mundo!";
            break;
        case "english":
            resultado = "Hello world!";
            break;
        case "chinese":
            resultado = "Ni hao!";
            break;
        default:
            resultado = "No se especifica el idioma";
            break;
    }
    return resultado;
}

// TODA FUNCION TIENE SU INVOCACION

const resultado4 = saludar2();
const resultado5 = saludar2("spanish");
const resultado6 = saludar2("english");
console.log(resultado6);

// 2. FUNCIONES DE EXPRESION
// PROPUESTA DE JAVASCRIPT MODERNO
// DECLARES DE LA FUNCION Y LA ASIGNES A UNA VARIABLE
// NO CUENTAN CON LA CARACTERISTICA DE HOISTING

// A. NORMAL

const despedirse = function (nombre) {
    return `Me dio gusto verte, ${nombre}`
}

console.log(despedirse("Sam"));

// B. FLECHA
// - COMPLETA

const gritarUno = () => {
    return "Esta lloviendo! Se me va a mojar la ropa!";
}

console.log(gritarUno());

// - SINTETIZADA
// UNA CONDICION - QUE SOLO TENGAS UNA SENTENCIA (UNA SOLA LINEA DE CODIGO DENTRO DE LA FUNCION)

const gritarDos = () => "Aguas! Aguas!";

console.log(gritarDos());
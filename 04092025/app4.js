function suma (numero1, numero2){
    return parseInt(numero1) + parseInt(numero2);
}

function resta (numero1, numero2){
    return parseInt(numero1) - parseInt(numero2);
}

function multiplicacion (numero1, numero2){
    return parseInt(numero1) * parseInt(numero2);
}

function division(numero1, numero2){
    if (numero2 == 0){
        throw console.error("No se puede divir entre 0");
        
    }

    return parseInt(numero1) / parseInt(numero2);
}

var numero1 = prompt("Ingrese el primer numero: ");
var numero2 = prompt("Ingrese el segundo numero: ");

var rSuma = suma(numero1, numero2);
var rResta = resta(numero1, numero2);
var rMulti = multiplicacion(numero1, numero2);
var rDivi = division(numero1, numero2);

console.log("Resultado suma = " + rSuma);
console.log("Resultado resta = " + rResta);
console.log("Resultado multiplicacion = " + rMulti);
console.log("Resultado division = " + rDivi);
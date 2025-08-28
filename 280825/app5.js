let numero1;
let numero2;
let numero3;
let mayor;
let menor;

numero1 = parseInt(prompt("Ingrese el primer numero: "));
numero2 = parseInt(prompt("Ingrese el segundo numero: "));
numero3 = parseInt(prompt("Ingrese el tercer numero: "));

if (numero1 > numero2 && numero1 > numero3){
    mayor = numero1;
    if(numero2 < numero3){
        menor = numero2;
    }else{
        menor = numero3;
    }
} 

else{
    if (numero2 > numero1 && numero2 > numero3){
        mayor = numero2;
        if (numero1 < numero3){
            menor = numero1
        } else{
            menor = numero3;
        }
    }else{
        mayor = numero3;
        if (numero1 < numero2){
            menor = numero1;
        } else{
            menor = numero2;
        }
    }
}

if (numero1 == numero2 && numero1 == numero3){
    console.log("Los tres numeros son iguales: " + numero1 + "=" + numero2 + "=" + numero3);
} else {
    if (numero1 == numero2){
        console.log("Primer y segundo numero iguales " + numero1 + "=" + numero2);
    } else{
        if(numero1 == numero3){
            console.log("Primer y tercer numero iguales " + numero1 + "=" + numero3);
        }
    }
}

console.log("El numero mayor es: " + mayor);
console.log("EL numero menor es: " + menor);
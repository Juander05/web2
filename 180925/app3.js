var miCarro = new Object();
miCarro.marca = 'Toyota';
miCarro.modelo = 'Supra';
miCarro.color = 'Naranja';

console.log(miCarro);

//Ejemplo de arreglo, no es lo mismo que un objeto

let frutas = ["banana", "manzana", "pera"];
console.log(frutas)

var miCarro = {
    marca: 'Toyota',
    modelo: 'Supra',
    color: 'Naranja'
}

console.log(miCarro);

var perro = {
    nombre: 'Fizzie',
    color: 'Cafe',
    edad: 1,
    talla: 'pequeña',
    enemigos: ["negros", "gatos"]
}

console.log(perro);
//console.log(perro,color);
//console.log(perro,enemigos[1]);

//agregar
perro.raza = 'pug';

//leer
console.log(perro.edad);

//actualizar 
perro.edad = 1;
console.log(perro.edad);

//eliminar
delete perro.edad;
console.log(perro);
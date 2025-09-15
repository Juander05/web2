let frutas = [];

function agregaFruta(){
    let fruta = prompt("Ingresa una fruta: ");

    if (fruta){
        frutas.push(fruta);
        alert(`La fruta : ${fruta} - agredado exitosamente!`);
    }else{
        alert(`No ingresaste una fruta.`);
    }
}

function mostrarFrutas(){

    if (frutas.length === 0){
        alert(`No hay frutas`);
    }else{
        let mensaje = "Frutas en el carrito: \n";
        frutas.forEach((fruta, index)=>{
            mensaje += `${index + 1}.  ${fruta}\n`;
        });
        alert(mensaje);
    }
}

function menu(){
    do{
        option = prompt(`
            Opciones disponibles: 
            1. Agregar fruta
            2. Mostrar frutas
            3. Salir
            `);

            switch(option){
                case '1': 
                    agregaFruta();
                    break;
                
                case '2':
                    mostrarFrutas();
                    break;

                case '3':
                    alert(`Saliendo...`);
                    break;

                default:
                    alert(`Opcion no valida`);
            }
    }while(option !== '3');
}

menu();
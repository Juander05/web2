var productos = [
    {nombre: 'Camisa', precio: 300},
    {nombre: 'Pantalon', precio: 500},
    {nombre: 'Zapatos', precio: 400},
    {nombre: 'Sombrero', precio: 200}
];

var carrito = [];

//Funcion para mostrar el menú de productos
function mostrarMenu(){
    var menu = "Seleccione un producto para agregar al carrito\n";
    for(var i = 0; i < productos.length; i++){
        menu += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }
    menu += (productos.length + 1) + ". Eliminar producto\n";
    menu += (productos.length + 2) + ". Ver Carrito y Total\n";
    menu += (productos.length + 3) + ". Agregar producto al catalog (Admin)\n";
    menu += (productos.length + 4) + ". Salir\n";

    return menu;
}

//Funcion para agregar un producto al carrito
function agregarAlCarrito(index){
    var productoSeleccionado = productos[index];
    carrito.push(productoSeleccionado);
    console.log('Producto "' + productoSeleccionado.nombre + '"agregado al carrito.');
}

//Funcion para eliminar del carrito
function eliminarDelCarrito(mensaje){
    if (carrito.length === 0){
        console.log("El carrito esta vacio. ");
    } else{
        //Ingresar el numero de producto a eliminar
        var productoSeleccionado = mostrarCarritoYTotal(mensaje, 1);
        productoSeleccionado = Number(productoSeleccionado);

        //Verificar si el producto es valido
        if(isNaN(productoSeleccionado) || productoSeleccionado < 1 || productoSeleccionado > carrito.length){
            console.log("Producto no valido");
        }else{
            //Elimina producto del carrito
            var index = productoSeleccionado - 1;
            var eliminado = carrito.splice(index, 1)[0];
            console.log('Producto "' + eliminado.nombre + '"eliminado del carrito.');
        }
    }
}

//Funcion agregar al catalogo
function agregarAlCatalogo(){
    var contraseña = "Admin+123";
    var contraIngresada = prompt("Ingresa la contraseña: ");
    //Verifica la contraseña
    if (contraIngresada !== contraseña){
        console.log("La contraseña es incorrecta.");
    }else{
        //Muestra el menu para agregar producto y precio
        var mensajeCarrito;
        mensajeCarrito = "Ingrese el producto a agregar: \n";
        var productoIngresado = prompt(mensajeCarrito);
        mensajeCarrito = "Ingrese el precio del producto: \n";
        var precioProducto = prompt(mensajeCarrito);
        precioProducto = Number(precioProducto);
        //Agrega a catalogo de productos
        productos.push({nombre: productoIngresado, precio: precioProducto});
        console.log('Producto "' + productoIngresado + '" agregado al catalogo. ');
    }

}

//Funcion para mostrar carrito y total (0 = alert, 1 = prompt)
function mostrarCarritoYTotal(mensaje, n){
    if (carrito.length === 0){
        console.log("El carrito está vacio.");
    } else{
        var mensajeCarrito = mensaje;
        var total = 0;
        for (var i = 0;  i < carrito.length; i++){
            mensajeCarrito += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
            total += carrito[i].precio;
        }
        mensajeCarrito += "\nTotal : $" + total;

        if (n === 0){
            alert(mensajeCarrito);
        } else if(n === 1){
            return prompt(mensajeCarrito);
        }
    }
}

//Funcion de bucle principal
function menu(){
    var opcion;
    var opcionExtra = 4;
    do{
        //Registrar opcion y convertir a número
        opcion = prompt(mostrarMenu());
        opcion = Number(opcion);

        //Verificar Validez de la opcion
        if(isNaN(opcion) || opcion < 1 || opcion > productos.length + opcionExtra){
            alert("Opcion no valida, por favor intenta de nuevo. ");
        } else if (opcion >= 1 && opcion <= productos.length){
            //Si la opcion es valida y corresponde a un producto agregar al carrito
            agregarAlCarrito(opcion - 1);
        } else if (opcion === productos.length + 1){
            //Si elige eliminar del carrito
            eliminarDelCarrito("Elija el producto a eliminar: \n");
        } else if (opcion === productos.length + 2){
            //Si elige el carrito y el total
            mostrarCarritoYTotal("Carrito de compras: \n", 0);
        } else if(opcion === productos.length + 3){
            //Si elige agregar al catalogo (Solo Admin, preguntara contraseña)
            agregarAlCatalogo();
        }
    } while (opcion !== productos.length + opcionExtra);

    alert("Gracias por visitar la tienda. ");
}

menu();
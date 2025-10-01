
//Inicamos con un arreglo para almacenar tareas
let tareas = [];

// funcion para mostrar el menu de opciones
function mostrarMenu(){
    return parseInt( prompt(`
        Opciones Disponibles:
        1.- Agregar tarea.
        2.-Ver todas las tareas.
        3.-Marcar tarea como completada.
        4.-Eliminar tarea
        5.-Salir.
        "Elige una opcion"
        `));
}

//Funcion para agregar tarea 
function agregarTarea(){
    let nombre = prompt("Introduce  el nombre de la tarea");
    if(nombre){
        //agregar una tarea
        let tarea = {
            nombre: nombre,
            completado: false 
        };

        tareas.push(tarea);
        alert("¡La tarea se agrego de manera exitosa!")

    }else{
        alert("El nombre de la tarea no puede estar vacio");
    }
}

//Funcion para ver todas las tareas, (0 = alert, 1 = prompt)

function verTareas(n){
    if( tareas.length === 0){
        alert("No hay tareas en la lista");
    }else{
        let mensaje = "Lista de tareas \n";
        tareas.forEach((tarea,index)=>{
            mensaje+=`${index + 1}.- ${tarea.nombre} [${tarea.completado ? "Completada" :"Pendiente"}]\n`;
        });

        if (n === 0){
            alert(mensaje);
        }

        if (n === 1){
            return prompt(mensaje);
        }
        
    }
}

//Funcion para entregar tarea
function marcarTareaCompleta(){
    let tareaElegida = parseInt(verTareas(1));

    if(tareaElegida > 0 && tareaElegida <= tareas.length){
        tareas[tareaElegida-1].completado = !tareas[tareaElegida-1].completado;
    } else{
        alert("Numero de tarea invalido. ")
    }
}

//Funcion para eliminar tareas
function eliminarTarea(){
    let tareaElegida = parseInt(verTareas(1));

    if (tareaElegida > 0 && tareaElegida <= tareas.length){
        var eliminado = tareas.splice(tareaElegida-1, 1)[0];
        alert('Tarea "' + eliminado.nombre + '"eliminada.');
    }else{
        alert("Numero de tarea invalido. ");
    }
}

function iniciarPrograma(){
    let continuar = true;

    while(continuar){
        let opcion = mostrarMenu();

        switch(opcion){
            case 1: 
                agregarTarea();
                break;
            case 2: 
                verTareas(0);
                break;
            case 3: 
                marcarTareaCompleta();
                break;

            case 4: 
                eliminarTarea();
                break;

            case 5:
                alert("Saliendo del programa.");
                continuar = false;
                break;
            default:
                alert("Opcion no valida.")
        }
    }

    alert("programa finalizado.")
}

iniciarPrograma();


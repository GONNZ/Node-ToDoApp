const argv = require('./config/yargs').argv
const toDo = require('./toDo/toDo')
const colors = require('colors')

let comando = argv._[0]

switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.descripcion)
        console.log(tarea);
        break;

    case 'listar':
        let lista = toDo.Getlistado()

        for (let tarea of lista) {
            console.log('=======Tarea========='.green);
            console.log(tarea.descipcion);
            console.log('Estado: ' + tarea.completado);
            console.log('====================='.green);
            console.log('====================='.blue);
        }

        break;

    case 'actualizar':
        let actualizar = toDo.actualizar(argv.descripcion, argv.completado)
        console.log(actualizar);
        break;

    case 'borrar':
        let borrado = toDo.borrar(argv.descripcion)
        console.log(borrado)

        break;

    default:
        console.log('Comando no reconocido');
        break;
}
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Indica si la tarea ya fue completada'
}


//Comandos con Yargs
const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado

    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv


module.exports = {
    argv
}
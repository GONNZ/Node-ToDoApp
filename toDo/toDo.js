const fs = require('fs')

let listadoToDo = []

const guardarDB = () => {
    let data = JSON.stringify(listadoToDo)


    fs.writeFile('DB/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar' + err);
    });
}

const cargarDB = () => {

    try {
        listadoToDo = require('../DB/data.json')
    } catch (error) {
        listadoToDo = []
    }

}

const crear = (descipcion) => {

    cargarDB()
    let toDo = {
        descipcion,
        completado: false
    }

    listadoToDo.push(toDo)
    guardarDB()
    return toDo
}

const Getlistado = () => {
    cargarDB()
    return listadoToDo
}

const actualizar = (descipcion, completado = true) => {
    cargarDB()
    let index = listadoToDo.findIndex(tarea => tarea.descipcion === descipcion)
    if (index >= 0) {
        listadoToDo[index].completado = completado
        guardarDB()
        return true
    } else {
        return false
    }
}

const borrar = (descipcion) => {
    cargarDB()

    let index = listadoToDo.findIndex(tarea => tarea.descipcion === descipcion)

    if (index >= 0) {

        listadoToDo.splice(index, 1)
        guardarDB()

        return true
    } else {
        return false
    }
}

module.exports = {
    crear,
    Getlistado,
    actualizar,
    borrar
}
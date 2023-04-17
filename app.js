const fs = require("fs"); //Requerir el paquete para el manejo de directorios
const argv = require("./config/yargs");

const { crearArchivo, crearArchivoPromesa, crearArchivoAsync } = require("./helpers/tbl-multiplicar");

console.clear();

// console.log(process.argv); //process.argv Es un areglo que contiene los parámetros que se envien por linea de comando
console.log(argv); // El argv de yargs es un objeto y por ende se puede acceder a su clave y valor más facil.

// crearArchivo(3)//Ejecutar la función normal;

crearArchivoAsync(argv.b, argv.m, argv.l) // Ejecutar cualquier función que devuelve una promesa.Como parámetro le mandamos la bandera `-b = numero` por linea de comnado
    .then((nombreArchivo) => {
        console.log(nombreArchivo);
    })
    .catch((error) => {
        console.log(error);
    })


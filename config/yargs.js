const argv = require("yargs")
    .option('b', {
        alias: 'base',
        describe: 'Número base para la multipliacción',
        demandOption: true, //Obliga a que se le envíe un valor
        type: 'number'
    })
    .option('m', {
        alias: 'mostrar',
        describe: 'Muestra la salida de la función crearArchivo',
        default: false,
        demandOption: false, //Obliga a que se le envíe un valor
        type: 'boolean',
    })
    .option ('l', {
        alias: 'limite',
        describe: 'El límite de la tabla de multiplicar',
        demandOption: true,
        type: 'number'
    })
    .check((argv,options) =>{ // Validaciones
        if ( isNaN(argv.b) ) {
            throw ' La base tiene que ser un número '
        }
        return true;
    })
    .argv;

module.exports = argv;
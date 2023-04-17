const fs = require("fs");

const crearArchivo = ( base ) => { //Función normal

    try {
        let salida = "";

        //Mostrar en consola
        console.log("***************");
        console.log("Tabla del", base);
        console.log("***************");

        for (let index = 1; index <= 10; index++) {
            salida += `${base} * ${index} = ${base * index}\n`
        };

        console.log(salida);

        //Crear el archivo
        fs.writeFileSync(`tabla-${base}.txt`, salida);

    } catch (error) {
        throw error;
    };
    
};

/**-----TAREA----
    Tranformar la función normal para que devuela una promesa 
    con el nombre del archivo y un error si lo hay
 */
const crearArchivoPromesa = (base) => { //Opción 1 New Promise

    const promesa = new Promise((resolve, reject) => {

        try {
            let salida = "";

            //Mostrar en consola
            console.log("***************");
            console.log("Tabla del", base);
            console.log("***************");

            for (let index = 1; index <= 10; index++) {
                salida += `${base} * ${index} = ${base * index}\n`
            };

            console.log(salida);

            //Crear el archivo
            fs.writeFileSync(`tabla-${base}.txt`, salida);
            resolve(`tabla-${base}.txt`);

        } catch (error) {
            throw error;
        }

    });

    return promesa;
};

const crearArchivoAsync = async (base, mostrar, limite) => { //Opcion 2 Async

    try {
        let salida = "";

        for (let index = 1; index <= limite; index++) {
            salida += `${base} * ${index} = ${base * index}\n`
        };

        if (mostrar === true) {
            //Mostrar en consola
            console.log("***************");
            console.log("Tabla del", base);
            console.log("***************");

            console.log(salida);
        }
        

        //Crear el archivo
        fs.writeFileSync(`./tbls-multiplicar/tabla-${base}.txt`, salida);

        return (`tabla-${base}.txt`);

    } catch (error) {
        throw error;
    };

};


module.exports = {
    crearArchivo,
    crearArchivoPromesa,
    crearArchivoAsync
};
# Instrucciones

-Tener instalado NODE.js

-Descargar los módulos necesarios para el funcionamiento de la app:

    'npm intall'

-Correr la app con el comando.

    'node app.js -b 0 -m true -l 0'
    Obligatorio mandar el primer parámetro -b numeroX

Opciones:

    --help     Muestra ayuda                                        [booleano]
    --version  Muestra número de versión                            [booleano]
    -b, --base     Número base para la multipliacción               [número] [requerido]
    -m, --mostrar  Muestra la salida de la función crearArchivo     [booleano] [defecto: false]
    -l, --limite   El límite de la tabla de multiplicar             [número] [requerido]
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');



//const express = require('express');
//const fs = require('./fs');
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

const comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla( argv.base, argv.limite );
    
    break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then( archivo => console.log(`Archivo creado:`, colors.green( archivo )))
        .catch(e => console.log(e));        
        
    break;

    default:
        console.log('Comando desconocido');
        break;
}

const argv2 = process.argv;


//const parametro = argv[2];

//Pusimos el base como un argumento en la terminal

//convertir de un string a un array
//const base = parametro.split('=')[1];






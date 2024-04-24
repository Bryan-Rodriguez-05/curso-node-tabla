
/*// hacer la tabla del 5 en javascrip
const fs = require('fs'); // se exporta la libreria para poder hacer yso del file system
console.clear();
console.log('=============');
console.log(' Tabla del 3');
console.log('=============');
//const j = 3;
let salida = "";
for(i = 1;i<10;i++){
  salida += `${j} x ${i} = ${j * i}\n`; //la salida se concatena y se da un salto de linea.
}
console.log(salida);
//el file system para grabar un archivo. en el primer parametro
//si no se pone el path, se graba en la rireccion donde esta ejecutando.
//segundo parametro son los datos. y el tercero es un callback que recibe el error si algo sale mal.
fs.writeFileSync(`tabla-del-${j}.txt` , salida);
    console.log(`Tabla del ${j} Creado`);
*/

/*
/// hacer la tabla del 5 en javascrip
const {crearArchivo} = require('./helper/multiplicar');
const argv = require('yargs').argv;
console.clear();
console.log(process.argv);
console.log(argv);
console.log('j de yargs:', argv.j);
//const [ , ,arg3 = &#39;j = 5&#39;] = process.argv; // estamos tomando el tercer argumento.
//const[ , j ]= arg3.split( &#39;=&#39;); //separa el string por el caracter =
//console.log(j);
/* crearArchivo(j)
    .then( nombreArchivo =&gt; console.log(nombreArchivo, &#39;Creado&#39;))
    .catch( err =&gt; console.log(err)); */

// hacer la tabla del 5 en javascrip
const { option } = require('yargs');
const {crearArchivo} = require('./helper/multiplicar');
const colors = require('colors');
const argv = require('./Config/yargs');
/*const argv = require('yargs')
                 .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true

                 }) 
                 .check((argv, options ) => {
                    if(isNaN(argv.b)){
                        throw 'La base debe ser un Numero'
                    }
                    return true;
                 }) 
                 .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false

                 })
                  
                .argv;*/

console.clear();

//const [ , ,arg3 = 'j = 5'] = process.argv; // estamos tomando el tercer argumento.
//const[ , j ]= arg3.split( '='); //separa el string por el caracter =
                
crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
    .catch( err => console.log(err));

                


const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

crearArchivo( argv.b , argv.l, argv.h )
    .then( nombreArchivo => console.log(`archivo ${nombreArchivo} creado`.bold.grey) )
    .catch( err => console.log(err.red) );

//console.log(process.argv);
//console.log(argv);
//console.log(argv.base);

//const [ , , arg3 = 'base=5' ] = process.argv;
//const [ , base = 5 ] = arg3.split('=');

//console.log(base);
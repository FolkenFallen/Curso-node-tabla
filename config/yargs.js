const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Tabla que se desea guardar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Flag para ver la tabla por pantalla'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'Cantidad de numeros en la tabla'
    })
    .check( (argv, options) => {
        if( isNaN(argv.b) ) {
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .argv;

module.exports = argv;

const fs = require( 'fs' );
const colors = require('colors');

const crearArchivo = async( base , listar, hasta) => {
    let salida, consola = '';

    try {

        salida += `============================\n`;
        salida += `       Tabla del ${base}\n`;
        salida += `============================\n`;

        for ( let i = 1 ; i <= hasta ; i ++ ) {
            consola += colors.underline(`${ base } ${ 'x'.green } ${i} ${ '='.green } ${ base*i }\n`);
            salida += `${ base } x ${i} = ${ base*i }\n`
        }

        if ( listar ) {
            console.log(`============================`.green);
            console.log(colors.green('       Tabla del'),colors.bold.yellow(base));
            console.log(`============================`.green);
            console.log( consola );
        }
        
        //fs.writeFile(`tabla-${base}.txt`,salida, (err)=>{
        //    if (err) throw err;
        //    console.log(`archivo tabla-${base}.txt creado`);
        //})

        fs.writeFileSync( `./salida/tabla-${ base }.txt` , salida );
        return `./salida/tabla-${ base }.txt`
    }
    catch ( e ){
        throw `No se pudo crear el archivo tabla-${ base }.txt \n Error: \n ${ e }`.red 
    }
    //console.log(`archivo tabla-${base}.txt creado`);
}

module.exports = {
    //crearArchivo: crearArchivo // redundante si el nombre de la funcion es igaul
    crearArchivo
}

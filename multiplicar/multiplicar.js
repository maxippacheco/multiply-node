const fs = require('fs');
const colors = require('colors');


const listarTabla = (base, limite = 10) => {
    
    console.log('==================='.green
    );
    console.log(`tabla de  ${base}`.green);
    console.log('==================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(` ${ base } * ${ i }  = ${ base * i }\n`);
    }
    

}




const crearArchivo = ( base, limite ) => {
    return new Promise((resolve, reject) =>{

        if ( !Number(base) ) {
            reject(`El valor introducido ${base} no es un numero`);

            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += ` ${ base } * ${ i }  = ${ base * i }\n`;
        }
        
        fs.writeFile(`tablas/tabla-del-${ base }-al-${limite}.txt`, data, (err) => {
            
             if (err) 
                reject(err)
            else 
                resolve(`tabla-${base}-al-${limite}.txt`);
            
                /*console.log('========================'.green
                );
                console.log(`La tabla ha sido creada`.green);
                console.log('========================'.green);
                */
        });
                

    });
}


module.exports = {
    crearArchivo,
    listarTabla
}
const fs = require(`fs`)

const colors = require('colors');


const crearArchivo = async (base = 5, listar,hasta) =>{
    
    try {
        

        let salida, consola = ``;
        const titulo =`====================== \nTabla del ${base}\n======================\n`;
        for (let n = 1; n <= hasta; n++) {
            salida += `${base} * ${n} = ${base * n}\n`;
            consola += `${base} ${colors.red(`*`)} ${n} = ${base * n}\n`;
        }

        if(listar != false){
            console.log(colors.green("======================"));
            console.log(colors.bold(`     Tabla del ${base}`));
            console.log(colors.green("======================"));

            console.log(colors.cyan(salida));
        }
        

        fs.writeFileSync(`./salida/tabla-${base}.txt`,titulo + salida);
        return `Tabla-del-${base}.txt`;
    } catch (err) {
        throw err
    }
    

}

module.exports = {
    crearArchivo
}
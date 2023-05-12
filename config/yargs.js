const argv = require(`yargs`)
    .option(`b`,{
        alias:`base`,
        type: `number`,
        demandOption: true,
        describe: `Es la base de la tabla de multiplicar`
    })
    .option(`l`,{
        alias:`listar`,
        demandOption: false,
        type: 'boolean',
        default: false,
        describe: `Muestra la tabla en consola`
    }).option(`a`,{
        alias:`hasta`,
        type: `number`,
        demandOption: true,
        describe: `Es el numero al que se termina la tabla`
        })
        .check((argv,options) => {
        if(isNaN(argv.b)){
            throw `La base tiene que ser un numero`
        }
        return true
    })
    .argv;

    module.exports = argv;
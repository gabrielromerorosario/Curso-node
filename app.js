
const { crearArchivo} = require(`./Helpes/multiplicar`);
const argv = require(`./config/yargs`);

console.clear();


crearArchivo(argv.b,argv.l,argv.a)
    .then(nombreArchivo => console.log(nombreArchivo.black, `Creado`))
    .catch(err => console.log(err));

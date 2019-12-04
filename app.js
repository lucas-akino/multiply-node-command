const { argv } = require('./config/yargs');
const { createFile, listarTabla } = require('./multiplicar/multiplicar');
const colors = require("colors");

let comand = argv._[0];

switch (comand) {
    case 'listar':
        listarTabla(argv.base, argv.limit);
        break;
    case 'crear':
        createFile(argv.base, argv.limit)
             .then(file => console.log(`Archivo creado: ${file}`))
             .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido'.red);
}


// let arg = argV[2];
// let base = arg.split("=")[1];



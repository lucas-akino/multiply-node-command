
const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require("yargs")
    .command('listar', "Imprime en consola la tabla especificada", opts)
    .command('crear', "Crea un archivo de texto con la tabla especificada ", opts)
    .help()
    .argv;

module.exports = {
    argv
};
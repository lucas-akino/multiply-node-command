//required
const fileSystem = require('fs');
const colors = require("colors");

let listarTabla = (base, limite = 10) => {

    console.log(`\nTabla del ${base} con limite en ${limite}:\n`.underline.cyan);
    
    for (let i = 1; i <= limite; i++){
        console.log(colors.cyan(`\t${colors.yellow(base)} x ${colors.magenta(i)} = ${colors.green(base * i)}`));
    }

}

let createFile = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)||!Number(limite)) {
            reject(new Error(`la base o el limite NO es un numero !!`.red));
            return;
        }

        let data = `\nTabla del ${base} con limite en ${limite}:\n`;

        for (let i = 1; i <= limite; i++) {
            data += `\n${base} x ${i} = ${base * i}.\n`;
        }

        fileSystem.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {

            if (err) reject(err);
                
            else resolve(`tabla-${base}.txt`.green);

        })
    })
}

module.exports = {
    createFile,
    listarTabla
}


const fs = require("fs");
const colors = require('colors');

const crearArchivoMulti = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} X ${i} = ${base * i}\n`;
      consola += `${base} ${'X'.green} ${i} ${'='.cyan} ${base * i}\n`;
    }

    if (listar) {
      console.log("=================".rainbow);
      console.log("   Tabla del".red, colors.yellow( base ));
      console.log("=================".rainbow);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivoMulti,
};

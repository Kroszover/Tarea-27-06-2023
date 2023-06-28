const fs = require("fs");
const Proveedor = require("../models/proveedores");

const obtenerProveedores = (nombreArchivo) => {
  //Read del CRUD
  const arrayProveedores = [];
  let datos = fs.readFileSync(`./data/${nombreArchivo}.csv`, "utf-8");
  datos = datos.replace(/\r/g, "");
  datos = datos.replace(/\n/g, ";");
  datos = datos.split(";");

  datos.forEach((elemento, indice) => {
    if ((indice + 1) % 6 === 0) {
      const proveedor = new Proveedor(
        datos[indice - 5],
        datos[indice - 4],
        datos[indice - 3],
        datos[indice - 2],
        datos[indice - 1],
        elemento
      );
      arrayProveedores.push(proveedor);
    }
  });
  console.log(arrayProveedores);
  return arrayProveedores;
};

const obtenerProveedorPorId = (idProveedor, nombreArchivo) => {};

const crearProveedor = (proveedor, nombreArchivo) => {};

const actualizarProveedor = (proveedor, nombreArchivo) => {};

const eliminarProveedor = (idProveedor, nombreArchivo) => {};

//obtenerProveedores("proveedores"); //Funciona
module.exports = { obtenerProveedores };

class Proveedor {
  constructor(
    idProveedor,
    nombreCompania,
    nombreContacto,
    tituloContacto,
    ciudad,
    pais
  ) {
    this._idProveedor = idProveedor;
    this._nombreCompania = nombreCompania;
    this._nombreContacto = nombreContacto;
    this._tituloContacto = tituloContacto;
    this._ciudad = ciudad;
    this._pais = pais;
  }

  get idProveedor() {
    return this._idProveedor;
  }

  get nombreCompania() {
    return this._nombreCompania;
  }

  get nombreContacto() {
    return this._nombreContacto;
  }

  get tituloContacto() {
    return this._tituloContacto;
  }

  get ciudad() {
    return this._ciudad;
  }

  get pais() {
    return this._pais;
  }

  set idProveedor(idProveedor) {
    this._idProveedor = idProveedor;
  }

  set nombreCompania(nombreCompania) {
    this._nombreCompania = nombreCompania;
  }

  set nombreContacto(nombreContacto) {
    this._nombreContacto = nombreContacto;
  }

  set tituloContacto(tituloContacto) {
    this._tituloContacto = tituloContacto;
  }

  set ciudad(ciudad) {
    this._ciudad = ciudad;
  }

  set pais(pais) {
    this._pais = pais;
  }
}

module.exports = Proveedor;

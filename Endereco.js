class Endereco {
  constructor(estado, cidade, rua, numero) {
    this.estado = estado;
    this.cidade = cidade;
    this.rua = rua;
    this.numero = numero;
  }
  getEstadoUpper() {
    return this.estado.toUpperCase();
  }
  getEstadoLower() {
    return this.estado.toLowerCase();
  }
  getCidadeUpper() {
    return this.cidade.toUpperCase();
  }
  getCidadeLower() {
    return this.cidade.toLowerCase();
  }
  getRuaUpper() {
    return this.rua.toUpperCase();
  }
  getRuaLower() {
    return this.rua.toLowerCase();
  }
  getNumeroUpper() {
    return String(this.numero).toUpperCase();
  }
  getNumeroLower() {
    return String(this.numero).toLowerCase();
  }
  detalhe() {
    return `Estado: ${this.estado} cidade: ${this.cidade} rua: ${this.rua} numero: ${this.numero}\n`;
  }
}

module.exports = Endereco; 
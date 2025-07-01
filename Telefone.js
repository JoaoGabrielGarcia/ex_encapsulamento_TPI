class Telefone {
  constructor(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;
  }
  getDddUpper() {
    return this.ddd.toUpperCase();
  }
  getDddLower() {
    return this.ddd.toLowerCase();
  }
  getNumeroUpper() {
    return String(this.numero).toUpperCase();
  }
  getNumeroLower() {
    return String(this.numero).toLowerCase();
  }
}

module.exports = Telefone; 
class Cliente {
  #cpf;
  constructor(nome, cpf, endereco) {
    this.nome = nome;
    this.endereco = endereco;
    this.telefones = new Set();
    this.#cpf = cpf;
  }
  getCpf() {
    return this.#cpf;
  }
  getNomeUpper() {
    return this.nome.toUpperCase();
  }
  getNomeLower() {
    return this.nome.toLowerCase();
  }
  addTelefone(telefone) {
    this.telefones.add(telefone);
  }
  getTelefones() {
    return Array.from(this.telefones);
  }
  detalhe() {
    let telefonesStr = '';
    for (const tel of this.telefones) {
      telefonesStr += `ddd: ${tel.ddd} numero: ${tel.numero}\n`;
    }
    return `Nome: ${this.nome}\n${this.endereco.detalhe()}${telefonesStr}`;
  }
}

module.exports = Cliente; 
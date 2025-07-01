class Empresa {
  #cnpj;
  constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
    this.endereco = endereco;
    this.nomeFantasia = nomeFantasia;
    this.razaoSocial = razaoSocial;
    this.#cnpj = cnpj;
    this.clientes = new Set();
    this.telefones = new Set();
  }
  getCnpj() {
    return this.#cnpj;
  }
  getRazaoSocialUpper() {
    return this.razaoSocial.toUpperCase();
  }
  getRazaoSocialLower() {
    return this.razaoSocial.toLowerCase();
  }
  getNomeFantasiaUpper() {
    return this.nomeFantasia.toUpperCase();
  }
  getNomeFantasiaLower() {
    return this.nomeFantasia.toLowerCase();
  }
  addTelefone(telefone) {
    this.telefones.add(telefone);
  }
  addCliente(cliente) {
    this.clientes.add(cliente);
  }
  detalhe() {
    let out = `Razão Social: ${this.razaoSocial}\nNome fantasia: ${this.nomeFantasia}\n----------------\n`;
    for (const cliente of this.clientes) {
      out += cliente.detalhe() + '\n';
    }
    return out;
  }
}

module.exports = Empresa; 
// Instanciando endereços
const Endereco = require('./Endereco');
const Telefone = require('./Telefone');
const Cliente = require('./Cliente');
const Empresa = require('./Empresa');

const end1 = new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', 987);
const end2 = new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', 412);
const end3 = new Endereco('SP', 'São José dos Campos', 'Av São João', 789);
const end4 = new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', 452);

const tel1a = new Telefone('99999999', '99999999');
const tel1b = new Telefone('99999999', '99999999');
const tel2a = new Telefone('88888888', '88888888');
const tel2b = new Telefone('88888888', '88888888');
const tel3a = new Telefone('77777777', '77777777');
const tel3b = new Telefone('77777777', '77777777');
const tel4a = new Telefone('66666666', '66666666');
const tel4b = new Telefone('66666666', '66666666');

const cliente1 = new Cliente('João', '11111111111', end1);
cliente1.addTelefone(tel1a);
cliente1.addTelefone(tel1b);
const cliente2 = new Cliente('Gabriel', '22222222222', end2);
cliente2.addTelefone(tel2a);
cliente2.addTelefone(tel2b);
const cliente3 = new Cliente('Barbara', '33333333333', end3);
cliente3.addTelefone(tel3a);
cliente3.addTelefone(tel3b);
const cliente4 = new Cliente('Márcia', '44444444444', end4);
cliente4.addTelefone(tel4a);
cliente4.addTelefone(tel4b);

const empresa = new Empresa('ABC LTDA', 'Mercado Online', '12345678000199', end1);
empresa.addCliente(cliente1);
empresa.addCliente(cliente2);
empresa.addCliente(cliente3);
empresa.addCliente(cliente4);

console.log(empresa.detalhe()); 
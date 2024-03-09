// Importando as classes
const { Produto, Pessoa, Cliente } = require('./index');

// Exemplo de uso das classes
const produto1 = new Produto('Caneta', 1.5, 50);
produto1.Vender(20);
produto1.Repor(10);
produto1.MostrarEstoque();
produto1.AtualizarPreco(1.8);

const cliente1 = new Cliente('Hëndy', 
  37, 'Desenvolvedor', '123456789', 
  'hendyvorpagel@gmail.com', '2024-02-20');
console.log(cliente1);

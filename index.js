class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  Vender(qtdeVendida) {
    if (qtdeVendida <= this.quantidade) {
      this.quantidade -= qtdeVendida;
      console.log(`Venda realizada com sucesso! ${qtdeVendida} unidades de ${this.nome} vendidas.`);
    } else {
      console.log('Estoque insuficiente.');
    }
  }

  Repor(qtdeReposta) {
    this.quantidade += qtdeReposta;
    console.log(`Estoque de ${this.nome} reposto com sucesso. Novo estoque: ${this.quantidade} unidades.`);
  }

  MostrarEstoque() {
    console.log(`O produto ${this.nome} possui ${this.quantidade} unidades disponíveis.`);
  }

  AtualizarPreco(novoPreco) {
    this.preco = novoPreco;
    console.log(`Preço do produto ${this.nome} atualizado para R$ ${this.preco.toFixed(2)}.`);
  }
}

class Pessoa {
  constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }
}

class Cliente extends Pessoa {
  constructor(nome, idade, profissao, telefone, email, clienteDesde) {
    super(nome, idade, profissao);
    this.telefone = telefone;
    this.email = email;
    this.clienteDesde = clienteDesde;
  }
}

const produto1 = new Produto('Caneta', 1.5, 50);
produto1.Vender(20);
produto1.Repor(10);
produto1.MostrarEstoque();
produto1.AtualizarPreco(1.8);

const cliente1 = new Cliente('Hëndy', 37, 'dev', 
  '123456789', 'hendyvorpagel@gmail.com', '2024-02-20');
console.log(cliente1);

module.exports = { Produto, Pessoa, Cliente };

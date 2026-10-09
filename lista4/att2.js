const produtos = [ { nome: 'Teclado', preco: 100 }, { nome: 'Mouse', preco: 50 } ];

const produtosComDesconto = produtos.map((produto) => {
    return {
        ...produto,
        preco: produto.preco * 0.9
    };
});

console.log(produtosComDesconto);
console.log(produtos);
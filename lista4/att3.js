const carrinho = [25.50, 10.00, 100.00, 5.00];

const total = carrinho.reduce((soma, preco) => {
    return soma + preco;
}, 0);

console.log(total);
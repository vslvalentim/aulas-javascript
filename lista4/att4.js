const nomesRepetidos = ['João', 'Maria', 'João', 'Pedro', 'Maria'];

function limparLista(lista) {
    const listaSemRepetidos = [...new Set(lista)];
    return listaSemRepetidos;
}

const nomesLimpos = limparLista(nomesRepetidos);

console.log(nomesLimpos);
console.log(nomesRepetidos);
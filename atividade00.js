// ===================================================
// ETAPA 1 — FICHA DO ITEM (variáveis, tipos e template strings)
// ===================================================
console.log("\n=== ETAPA 1: FICHA DO ITEM ===\n");

const nomeItem = "Espada das Sombras";
const precoItem = 250;
const raridadeItem = "Raro";
const quantidadeEstoque = 12;

console.log("=== FICHA DO ITEM ===");
console.log(`Nome: ${nomeItem}`);
console.log(`Preço: R$ ${precoItem}`);
console.log(`Raridade: ${raridadeItem}`);
console.log(`Estoque: ${quantidadeEstoque} unidades\n`);

// ===================================================
// ETAPA 2 — REGRAS DE NEGÓCIO (operadores e condicionais)
// ===================================================
console.log("=== ETAPA 2: REGRAS DE NEGÓCIO ===\n");

// Validação de preço
if (precoItem < 0) {
  console.log("ERRO: O preço não pode ser negativo!");
} else {
  console.log("✓ Preço validado com sucesso!");
}

// Classificação automática por faixa de preço
let classificacaoItem;
if (precoItem < 100) {
  classificacaoItem = "Comum";
} else if (precoItem >= 100 && precoItem < 500) {
  classificacaoItem = "Raro";
} else {
  classificacaoItem = "Lendário";
}
console.log(`Classificação por preço: ${classificacaoItem}`);

// Operador ternário para destaque
const emDestaque = precoItem > 500 ? true : false;
console.log(`Em destaque: ${emDestaque}`);

// Operador lógico para disponibilidade
const disponivel = quantidadeEstoque > 0 && precoItem > 0;
console.log(`Disponível para compra: ${disponivel}\n`);

// ===================================================
// ETAPA 3 — CADASTRO EM LOTE (laço for)
// ===================================================
console.log("=== ETAPA 3: CADASTRO EM LOTE ===\n");

for (let i = 1; i <= 5; i++) {
  console.log(`✓ Item ${i} cadastrado com sucesso!`);
  
  // Operador módulo para itens pares
  if (i % 2 === 0) {
    console.log(`Item em promoção da semana!`);
  }
}
console.log();

// ===================================================
// ETAPA 4 — CONTROLE DE ESTOQUE (laço while)
// ===================================================
console.log("=== ETAPA 4: CONTROLE DE ESTOQUE ===\n");

let estoqueAtual = 12;
let contador = 1;

console.log(`Estoque inicial: ${estoqueAtual} unidades\n`);
console.log("Simulando vendas...\n");

while (estoqueAtual > 0) {
  estoqueAtual -= 2; // Venda de 2 unidades por iteração
  
  if (estoqueAtual < 0) {
    estoqueAtual = 0; // Não deixar negativo
  }
  
  console.log(`Venda ${contador}: Estoque restante = ${estoqueAtual} unidades`);
  contador++;
}

console.log("\n Item esgotado!\n");

// ===================================================
// ETAPA 5 — CATÁLOGO DE ITENS (laço for...of)
// ===================================================
console.log("=== ETAPA 5: CATÁLOGO DE ITENS ===\n");

const catalogo = ['Espada das Sombras', 'Asas Douradas', 'Capacete Neon', 'Pet Dragão', 'Skin Cyberpunk'];

console.log("VITRINE DA LOJA:\n");

for (const item of catalogo) {
  console.log(`🛒 ${item}`);
}

console.log("\n=== FIM DA ATIVIDADE ===\n");
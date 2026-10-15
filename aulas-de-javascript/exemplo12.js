const frutas = ['Maçã', 'Banana', 'Uva'];
console.log('array original:', frutas);
 

frutas.splice(2, 1);
console.log('removeu 1 item:', frutas);
 

frutas.splice(2, 0, 'Tomate');
console.log('adicionou 1 item:', frutas);
 

frutas.splice(0, 1, 'Morango');
console.log('substituiu 1 item:', frutas);
 

console.log('Array final:', frutas);
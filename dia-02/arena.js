const precoQueijo = 25;
const quantQueijo = 3;
const dinheiroPago = 100;
const totalCompra = precoQueijo * quantQueijo;
const checkResto = quantQueijo % 2;

console.log("o total da compra é " + totalCompra);
console.log("o troco é " + (dinheiroPago - totalCompra));
console.log(totalCompra > 100);
console.log(checkResto === 0);
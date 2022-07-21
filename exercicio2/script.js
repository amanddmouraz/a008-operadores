let numPrimei = +prompt('Digite um numero aleatório')
let numSegund = +prompt('Digite um numero aleatório')
var divisor = numPrimei/numSegund

console.log('O primeiro numero é maior que segundo?',numPrimei>numSegund)
console.log('O primeiro numero é igual ao segundo?',numPrimei===numSegund)
console.log('O primeiro numero é divisível pelo segundo?', divisor = numPrimei%numSegund===0)
console.log('O segundo numero é divisível pelo primeiro?', divisor = numSegund%numPrimei===0)

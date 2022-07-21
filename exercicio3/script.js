// a) 5 é maior que 20 e também é menor que 2;
let opera1 = (5 > 20 && 5 < 2)

// b) 5 é igual a 5 ou é igual a “5”;
let igualOu = (5 === 5 || 5 === 'cinco')

// c) negação de vinte é maior que cinquenta
let negat1 = (!20 > 50)
// d) negação de (vinte é maior que cinquenta)
let negat2 = (!(20 > 50))

console.log("5 é maior que 20 e também é menor que 2", opera1)
console.log("5 é igual a 5 ou é igual a '5'",igualOu)
console.log("Vinte é maior que 50?", negat1)
console.log("Vinte é maior que 50?", negat2)
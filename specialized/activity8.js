let numA
let numB

numA = window.prompt("25")
numB = window.prompt("25")
// Euclid's algorithm numA != numB
if (numB > numA)
   numB = numB - numA
numA = numA - numB
console. log ("GCD is:")
console. log (numA)
let currValue
let valuesSum
let numValues
let averageValue

valuesSum = 0 
numValues = 0
currValue = window.prompt("25")
// Get values until 0 (or less) currValue > 0
valuesSum = valuesSum + currValue
numValues = numValues + 1
currValue = window.prompt("25")
averageValue = (1.0* valuesSum)/ numValues
console. log ("Average:")
console. log (averageValue)
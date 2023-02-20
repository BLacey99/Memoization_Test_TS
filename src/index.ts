import "./style.css";

let factorMap = new Map<number, number>();

function factorial(number: number) {
  let numberCounter: number = number;
  let result = 1;

  if (number === 0 || number === 1) {
    return 1;
  }

  if (factorMap.has(number)) {
    return factorMap.get(number);
  }
  //console.log(factorMap.has(number));
  while (numberCounter > 0) {
    result *= numberCounter;

    numberCounter--;
  }
  factorMap.set(number, result);
  return factorMap;
}

console.log(factorial(5));
console.log(factorial(55));
console.log(factorial(12));
console.log(factorial(5));
console.log(factorial(55));

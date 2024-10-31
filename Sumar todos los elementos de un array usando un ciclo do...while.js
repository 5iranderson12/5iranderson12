// Sumar todos los elementos de un array usando un ciclo do...while
const numbers = [1, 2, 3, 4, 5];
let total = 0;
let idx = 0;
do {
  total += numbers[idx];
  idx++;
} while (idx < numbers.length);
console.log("Suma de todos los elementos del array:", total);

// Contar cuántas veces aparece un número en un array usando un ciclo while
const array = [3, 5, 3, 7, 3, 8, 3];
const target = 3;
let count = 0;
let index = 0;
while (index < array.length) {
  if (array[index] === target) {
    count++;
  }
  index++;
}
console.log(`El número ${target} aparece ${count} veces en el array.`);


// Generar una secuencia de Fibonacci hasta el número 20 usando un ciclo while
let fib1 = 0;
let fib2 = 1;
console.log(fib1);
console.log(fib2);
while (true) {
  let nextFib = fib1 + fib2;
  if (nextFib > 20) break;
  console.log(nextFib);
  fib1 = fib2;
  fib2 = nextFib;
}

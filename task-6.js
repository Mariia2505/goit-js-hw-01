let total = 0;
let input;

do {
  input = prompt('value');
  total += Number(input);
}
while (input);

alert(`Общая сумма чисел равна ${total}`);
let total = 100;
let ordered = prompt('Ваш заказ');

if (ordered > total) {
  alert('На складе недостаточно твоаров!');
} else {
  total -= ordered;
  alert('Заказ оформлен, с вами свяжется менеджер');
}
let credits = 23580;
let pricePerDroid = 3000;
let droidAmount = prompt('droid amount');
// let droidAmountNumber = Number(droidAmount);
// let totalPrice;

if (droidAmount === null) {
  alert('Отменено пользователем!');
} else {
  const totalPrice = droidAmountNumber * pricePerDroid;

  if (totalPrice > credits) {
    alert('Недостаточно средств на счету!');
  } else {
    // credits -= totalPrice;
    alert(
      `Вы купили ${droidAmount} дроидов, на счету осталось ${credits} кредитов.`,
    );
  }
}

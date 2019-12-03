let country = prompt('your country');
const costToChina = 100;
const costToChili = 250;
const costToAu = 170;
const costToIndia = 80;
const costToJM = 120;

if (country === null) {
  alert('Отправка не подтверждена');
} else {
  let lowerCountry = country.toLowerCase();

  switch (lowerCountry) {
    case 'китай':
      alert(`Доставка в ${country} будет стоить ${costToChina} кредитов`);
      break;

    case 'чили':
      alert(`Доставка в ${country} будет стоить ${costToChili} кредитов`);
      break;

    case 'австралия':
      alert(`Доставка в ${country} будет стоить ${costToAu} кредитов`);
      break;

    case 'индия':
      alert(`Доставка в ${country} будет стоить ${costToIndia} кредитов`);
      break;

    case 'ямайка':
      alert(`Доставка в ${country} будет стоить ${costToJM} кредитов`);
      break;

    default:
      alert('В вашей стране доставка не доступна');
  }
}

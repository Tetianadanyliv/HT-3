/*Створити функцію getMaxDigit(number) – яка отримує будь-яке число та
виводить найбільшу цифру в цьому числі*/

function getMaxDigit(number){
  let maxNumber = Number(prompt("Введіть число для визначення найбільшого значення"));
  arr = Array.from(String(maxNumber), Number);
  alert(Math.max(...arr));
}


// /*Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та
// **. Використовуйте цикл*/
  


function getPower () {
let a = Number(prompt("Введіть число для обчислення степені"));
let b = Number(prompt("Введіть число для підняття у степінь"));
  let result = a;
  for (let i = 1; i < b; i++){
    result *= a; 
  }
   alert(result);
}

  /*Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" ->
"Влад", "вЛАД" -> "Влад" і так далі);*/

function capFirstLetter(string) {
  alert(string.charAt(0).toUpperCase() + string.slice(1));
}


// /*Створити функцію, яка вираховує суму, що залишається після оплати податку від
// зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805*/

function countTax () {
  let salary = Number(prompt("Введіть суму заробітньої плати"));
  let tax = 19.5;
  alert(salary - (salary/100 *tax).toFixed(0));
}


/*Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.*/


function getRandomNumber () {
  let numberN = Number(prompt("Введіть значення N"));
  let numberM = Number(prompt("Введіть значення M"));
  alert(Math.floor(Math.random() * (numberM - numberN)) + numberN);
}


/*Створити функцію, яка рахує скільки разів певна буква повторюється в слові.
Приклад: countLetter("а", "Асталавіста") -> 4*/

function countLetters(){
  let count = (prompt("Введіть слово, щоб порахувати скільки разів певна буква повторюється в слові"));
  let countDict={};
  for(x = 0, length = count.length; x < length; x++) {
      l = count.charAt(x)
      countDict[l] = (isNaN(countDict[l]) ? 1 : countDict[l] + 1);
  }
  alert(countDict);
}

// /*Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від
// наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500
// грн. або convertCurrency("2500UAH") -> 100$*/

function convertCurrency() {
  const  amount = prompt("Введіть валюту");
  let convertedAmount = 0;
  if(amount.indexOf('$') > 0) {
    convertedAmount = parseInt(amount) * 25;
  } else if (amount.indexOf('UAH') > 0) {
    convertedAmount = parseInt(amount) / 25;
  }
  alert(convertedAmount);
}



// /*Створіть функцію генерації випадкового паролю (тільки числа), довжина
// встановлюється користувачем або по замовчуванню = 8 символам.
// Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124*/


function getRandomPassword() {
  const code = prompt("Введіть довжину паролю не більше числа 8");
  let password = '';
  let i = code || '8';
  while(i > 0) {
    password = password + Math.floor(Math.random() * 10);
    i--;
  }
  alert (password); 
}


// Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a',
// "blablabla") -> "blblbl"

function deleteLetters() {
    const  replace = prompt("Введіть букву");
    const  word = prompt("Введіть слово");
  let newStr = word.replaceAll(replace, '')
  alert (newStr);
}


// /*Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад:
// isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу
// гусеня") -> true*/


function isPalindrome() {
  const string = prompt('Enter a string: ');
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
      if (string[i] !== string[len - 1 - i]) {
          alert('It is not a palindrome');
      }
  }
  alert('It is a palindrome');
}



document.writeln (`Function№1: ${getMaxDigit}`);
document.writeln (`Function№2: ${getPower}`);
document.writeln (`Function№3: ${capFirstLetter}`);
document.writeln (`Function№4: ${countTax}`);
document.writeln (`Function№5: ${getRandomNumber}`);
document.writeln (`Function№6: ${countLetters}`);
document.writeln (`Function№7: ${convertCurrency}`);
document.writeln (`Function№8: ${getRandomPassword}`);
document.writeln (`Function№9: ${deleteLetters}`);
document.writeln (`Function№10: ${isPalindrome}`);



// Task 1

// let score = 0;
// let game = prompt('Розпочнемо гру: Ви повинні перекласти слово/словосполучення на українську мову. За кожне невірний переклад відніматиметься бал. Готовий? Якщо "Так" - напиши "ок" (словосполучення починається з малої літери)');

// if(game == 'ок') {
//   let pickUp = prompt("pick up");
//   if (pickUp == "забирати") {
//   score++;
//   }

//   let stay = prompt("stay");
//   if (stay == "залишатися") {
//   score++;
//   }

//   let mood = prompt("mood");
//   if (mood == "настрій") {
//   score++;
//   }

//   let dropOff = prompt("drop off");
//   if (dropOff == "висаджувати") {
//   score++;
//   }   

//   let checkOut = prompt("check out");
//   if (checkOut == "перевіряти") {
//   score++;
//   }

//   let dressUp = prompt("dress up");
//   if (dressUp == "одягатися") {
//   score++;
//   }

//   let energetic = prompt("energetic");
//   if (energetic == "енергійний") {
//   score++;
//   }

//   let exhausted = prompt("exhausted");
//   if (exhausted == "втомлений") {
//   score++;
//   }

//   let peppy = prompt("peppy");
//   if (peppy == "бадьорий") {
//   score++;
//   }

//   let oversleep = prompt("oversleep");
//   if (oversleep == "переспати") {
//   score++;
//   }

//   alert(score);
//   if (score <= "4") {
//     alert("Ти можеш краще!")
//   } else if (score <= "8") {
//     alert("Непогано-непогано!")
//   } else {
//     alert("Ну ти ваще, красавчік!")
//   }
// } else if (game == null) {
//   alert('Ви скасували вхід');
// } else if (game == '') {
//   alert('Прочитай умови гри!');
// } else {
//   alert('Може прочитаєш умови?!');
// }





// Task 2

// let registration = prompt("Введіть Ваше ім'я");
// let name = "Наталія";

// if (registration == name) {
//   let password = prompt("Введіть пароль");
//   if (password == "ЛОГОС") {
//     alert("Ласкаво просимо!");
//   } else if (password == null) {
//     alert("Ви скасували вхід!")
//   } else {
//     alert("Пароль невірний!");
//   }
// } else if (registration == null) {
//   alert("Ви скасували вхід!");
// } else {
//   alert("Я вас не знаю");
// }






// Task 3

let number = prompt("Введіть число від 1 до 12");
winter = 2;
spring = 5;
summer = 8;
autumn = 11;

if (number <= winter || number == "12") {
  alert("Твоя пора року - ЗИМА!");
} else if (number <= spring) {
  alert("Твоя пора року - ВЕСНА!");
} else if (number <= summer) {
  alert("Твоя пора року - ЛІТО!");
} else if (number <= autumn) {
  alert("Твоя пора року - ОСІНЬ!");
}
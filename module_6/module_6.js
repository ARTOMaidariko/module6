//Задание 1
const word = "Довод";
const firstWord = word.toLowerCase();
console.log(firstWord);
let secondWord = "";
for (let i = firstWord.length - 1; i >= 0; i--) {
  secondWord += firstWord[i];
}
if (firstWord === secondWord) {
  console.log(`Слово ${firstWord} является палиндромом`);
} else {
  console.log(`Слово ${firstWord} не является палиндромом`);
}
const twoWord = "Сантимент";
const firstTwoWord = twoWord.toLowerCase();
console.log(firstTwoWord);
let secondTwoWord = "";
for (let i = firstTwoWord.length - 1; i >= 0; i--) {
  secondTwoWord += firstTwoWord[i];
}
if (secondTwoWord === secondTwoWord) {
  console.log(`Слово ${firstTwoWord} является палиндромом`);
} else {
  console.log(`Слово ${firstTwoWord} не является палиндромом`);
}



//Задание 2
const arr = [
    1,
    2,
    3,
    1,
    5,
    4,
    2,
    3,
    5,
    "they",
    "don't",
    "know",
    "that",
    "we",
    "know",
    "that",
    "they",
    "know",
  ];
  
  let arr_1 = Array.from(new Set(arr));
  console.log(arr_1);



// Задание 3 
const number = +prompt("Введите число !");
let arr = [];
for (let i = 0; i <= number; i++) {
  if (!isNaN(number)) {
    arr.push(i);
    console.log(arr);
  }
}


// Задание 4 
let board = '';
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if ((i + j) % 2 === 0) {
      board += 'x';
    } else {
      board += 'o';
    }
    if (j < 2) {
      board += ' ';
    }
  }
  if (i < 2) {
    board += '\n';
  }
}
console.log(board);

// Задание 5
const obj = {
    some: "some",
    dom: "text",
    arr: [1, 2, 3, 4, 5],
    tom: "there",
  };
  
  let arrValues = [];
  
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      obj[key].forEach((element) => {
        arrValues.push(element);
      });
    } else {
      arrValues.push(obj[key]);
    }
  }
  console.log(arrValues);
  
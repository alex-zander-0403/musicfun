const numbers = [1, 15, 3, 42, 8, 19, 7, 25, 11, 33];

// isEven
const isEven = numbers.filter((num) => num % 2 === 0);
// console.log("iEven: ", isEven); // [ 42, 8 ]

// > 10
const moreThan10 = numbers.filter((num) => num > 10);
// console.log("moreThan10: ", moreThan10); // [ 15, 42, 19, 25, 11, 33 ]

// > 20
const firstMore20 = numbers.find((num) => num > 20);
// console.log("firstMore20: ", firstMore20); // 42

const students = [
  { name: "Анна", age: 19, grade: 7, course: 2 },
  { name: "Диана", age: 17, grade: 8, course: 1 },
  { name: "Виктория", age: 21, grade: 5, course: 3 },
  { name: "Григорий", age: 18, grade: 9, course: 2 },
  { name: "Борис", age: 20, grade: 4, course: 3 },
  { name: "Евгений", age: 16, grade: 6, course: 1 },
];

// Найди студентов 18+ лет
// const adults = students.filter((student) => student.age >= 18);
// console.log(adults);

// Найди студентов с оценкой 8+
// const excellentStudents = students.filter((student) => student.grade >= 8);
// console.log(excellentStudents);

// Найди студентов 2 курса
// const secondCourse = students.filter((student) => student.course === 2);
// console.log(secondCourse);

// Найди взрослых студентов с оценкой выше 6
// const adultGoodStudents = students.filter((student) => {
//   return student.age >= 18 && student.grade > 6;
// });
// console.log(adultGoodStudents);

// Найди студента по имени 'Виктория'
// const victoria = students.find((student) => student.name === "Виктория");
// console.log(victoria);

// Найди первого студента с оценкой 8+
// const firstExcellent = students.find((student) => student.grade >= 8);
// console.log(firstExcellent);

// Попытайся найти студента младше 16 лет
const tooYoung = students.find((student) => student.age < 10);
// console.log(tooYoung); // должно быть undefined

// ----

// 1. Функция для проверки совершеннолетия
function isAdult(person) {
  if (person.age >= 18) {
    return true;
  }
  return false;
}

const adultStudents = students.filter(isAdult);
// console.log("adultStudents", adultStudents);

// ----

// 2. Функция для проверки отличника (8+)
function isExcellent(student) {
  return student.grade >= 8;
}

const firstExcellent = students.find(isExcellent);
// console.log("firstExcellent", firstExcellent);

// ----

// 3. Функция для проверки курса
function isSecondCourse(student) {
  return student.course === 2;
}

const secondCourse = students.filter(isSecondCourse);
// console.log("secondCourse", secondCourse);

const firstSecondCourse = students.find(isSecondCourse);
// console.log("firstSecondCourse", firstSecondCourse);

// -----------------

const colors = ["красный", "синий", "зелёный", "жёлтый", "фиолетовый"];

// 1. Найди цвета с четными индексами (0, 2, 4...)
const evenIndexColors = colors.filter((color, i) => {
  if (i % 2 === 0) {
    // console.log(`добавлен: [${i}] ${colors[i]}`);
    return color;
  }
});
// console.log("evenIndexColors", evenIndexColors);

// 2. Найди первый цвет, индекс которого больше 2
const colorAfterIndex2 = colors.find((color, i) => {
  if (i > 2) {
    console.log(`${color} - ок`);
    return color[i];
  }
  console.log(`${color} - не подходит`);
});

console.log("colorAfterIndex2 - ", colorAfterIndex2);

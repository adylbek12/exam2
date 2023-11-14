// 1) Создайте переменные для хранения числа, строки и булева значения. Выведите их значения в консоль.

let number = 30
let string = ' hello world'
let booleanVar = true


console.log(number,string,booleanVar);



// 2) Преобразуйте строку в число и наоборот. Выведите результат в консоль.


let  chislo = '18'
let stroka = ''

let result0 = chislo+stroka

console.log(result0);

let chislo1 = 321
let convertToString = chislo1.toString 
console.log('триста двадцать один',convertToString);



// Создайте массив чисел. Используя цикл, выведите каждый элемент массива в консоль.
let numbersArray = [1,2,3,4,5,]

for (let i = 0; i < numbersArray.length; i++) {
    console.log("Элемент массива:", numbersArray[i]);
   
}

let person = {
    name: 'adyl',
    age: 18,
    city: 'bishkek'

}

console.log(
   'имя:',person.name,
   
);
console.log('возраст:',person.age,);
console.log('город:',person.city);



// 5) Напишите программу, которая проверяет, является ли число четным или нечетным, и выводит соответствующее сообщение.

let number1 = 24
if (number%2===0) {
    console.log('четное');

}
else
console.log('не четное');



// 6) Используя цикл, выведите числа от 1 до 10 в консоль.



for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 7) Создайте функции 3 типов (arrow, declaration, expression). Все три функции должны выводить в консоль - Hello World!

const arrowFunction = () => {
    console.log('hello world');
}

arrowFunction();



function declorFunction () {
    console.log("hello world")
}

declorFunction();

const  expressionFunction = function () {
    console.log('hello world');
}
expressionFunction()


// 8) Создайте два промиса - 1. Отрабатывает успешно 2. Отрабатывает с ошибкой


let successfulPromise = new Promise((resolve, reject) => {
   
    setTimeout(() => {
        resolve("Промис успешно выполнен!");
    }, 1000);
});


let errorPromise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        reject("Промис завершен с ошибкой!");
    }, 1000);
});
successfulPromise
    .then((result) => {
        console.log(result); 
    })
    .catch((error) => {
        console.error(error); 
    });

errorPromise
    .then((result) => {
        console.log(result); 
    })
    .catch((error) => {
        console.error(error); 
    });


    //допыыыыы

    function calculateAverage(numbers) {
        if (numbers.length === 0) {
            return 0;
        }
    
        const sum = numbers.reduce((total, current) => total + current, 0);
        return sum / numbers.length;
    }

    // 1) Напишите функцию, которая принимает массив чисел и возвращает среднее арифметическое значение.


    let numberArray = [1, 2, 3, 4, 5];
let result = calculateAverage(numbersArray);

    console.log(result);


    // 2) Напишите функцию, которая принимает массив строк и возвращает новый массив строк, где каждый элемент в верхнем регистре.

    function convertToUpperCase(strings) {
        return strings.map((str) => str.toUpperCase()) 
    }

    let inputStrings = ['apple', 'banana','pineapple']
    let upperCaseStrings = convertToUpperCase(inputStrings)

    console.log('строка в верхнем',upperCaseStrings);


    // 6) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.


    function filterEvenNumbers(numbers) {
        return numbers.filter((number) => number % 2 === 0);
    }

    let number4 = [1,2,3,4,5,6,7,8,9]
    let resultNumbers = filterEvenNumbers(number4)
    console.log('четные числа ' ,resultNumbers);

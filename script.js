//Zadanie 1
const x = 'Hello';
const y = 'World!';
console.log(`${x} ${y}`);

//Zadanie 2
const multiply = (a, b = 1) => a*b;
console.log(multiply(5, 2));

//Zadanie 3
const average = (...nums) => nums.reduce((a,b) => a+b)/nums.length;
console.log(average(2, 3, 4));

//Zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

//Zadanie 5
const weird = [1, 4, 'Iwona', false, 'Nowak'];
const [, ,second, ,fourth] = weird;
console.log(`${second} ${fourth}`);

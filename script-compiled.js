'use strict';

//Zadanie 1
var x = 'Hello';
var y = 'World!';
console.log(x + ' ' + y);

//Zadanie 2
var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};
console.log(multiply(5, 2));

//Zadanie 3
var average = function average() {
  for (var _len = arguments.length, nums = Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  return nums.reduce(function (a, b) {
    return a + b;
  }) / nums.length;
};
console.log(average(2, 3, 4));

//Zadanie 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

//Zadanie 5
var weird = [1, 4, 'Iwona', false, 'Nowak'];
var second = weird[2],
    fourth = weird[4];

console.log(second + ' ' + fourth);

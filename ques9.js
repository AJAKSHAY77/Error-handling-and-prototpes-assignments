//Create a numberChecker function that takes an array of numbers as an argument and returns a function. The
//returned function should take another number as an argument and return true if the number is in the array, and
//false otherwise.

function numberchecker(arr){
    return function innerfun(num){
    return arr.includes(num)
    }

}
const array = [1,2,3,5,6,7,8,9]
//console.log(numberchecker(array));
const ressult = numberchecker(array)
console.log(ressult(11));
console.log(ressult(1));
console.log(ressult(5));
console.log(ressult(0));
console.log(ressult(20));

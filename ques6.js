//6. Using Static Method to Add Two Numbers with Calculator Class
//Create a class called Calculator with a static method called add. The add method should take two numbers as
//arguments and return their sum. Instantiate the Calculator class and call the add method.

class Calculator{

    static add(a,b){
        let sum = a+b;
        return sum

    }
}
const result = Calculator.add(10,110)
console.log(result);

const resu = Calculator.add(1,99)
console.log(result1);
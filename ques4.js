//4. Employee Class Challenge.
//Create a class called Employee with three properties: name, position, and salary. The class should have a
//method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and
//call the getSalary method.

class Employee{
    //properties 
    constructor(n,p,s){
      this.name = n;
      this.position = p;
      this.salary = s
    }

    getsalary(){
        return`${this.name} ${this.position} ${this.salary} `
    }
}
const akshay = new Employee("akshay","manager",800000)
console.log(akshay.getsalary());

const aditya = new Employee("aditya","manager",800000)
console.log(aditya.getsalary());
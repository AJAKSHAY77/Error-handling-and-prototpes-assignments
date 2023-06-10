//5. Implementing a Person Class with Default Values
//Create a class called Person with two properties: name and age. The class should have a method called
//getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the
//constructor to set the values of name and age to "Unknown" and 0 if they are not provided.

class person{
    //propertise
    constructor(name = "unknown",age = 0){
        this.name = name;
        this.age = age;
    }

    //method

    getdetails(){
        return `name:${this.name} ,age:${this.age}`
    }
}
const person1 = new person("akshay",24)
console.log(person1.getdetails());

const person2 = new person()
console.log(person2.getdetails());
//Create a prototype object called Student with a property name. Add a method called printDetails to the
//prototype that logs the string "Hello, my name is {name}" to the console. Instantiate a Student object with the
//name "Mithun" and call the printDetails method.

function Student(s){
    this.name = s
   
}
Student.prototype.addprintdeatails = function(){
    console.log(`hello ny name is ${this.name}`);
}

const obj1 = new Student("aditya")
obj1.addprintdeatails()

const obj2 = new Student("akshay")
obj2.addprintdeatails()
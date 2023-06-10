//Create a function called getPerson that takes an object as a parameter representing a person's name and age.
//The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>".
//However, if the parameter is not a valid object with the properties "name" and "age", the function should throw
//an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error
//message if it occurs.

function getperon(obj){
    try{
        if (typeof obj=== "object" && obj!== null && "name" in obj && "age" in obj){
            const name = obj.name;
            const age = obj.age;
            const result = `Name:${name},Age:${age}`
            return result;
        }
        else{
            throw new Error("invalid paramter type")
        }

    }catch(err){
   return err.message
    }

}
console.log(getperon({name:"akshay",age:23}));
console.log(getperon({name:"akshay"}));
console.log(getperon({}));
console.log(getperon({age:23}));
console.log(getperon(name ="akshay",age= 23));


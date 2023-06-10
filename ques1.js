//1. Type Conversion.
//Write a function called convertToNumber that takes a string as an argument and returns the equivalent
//number. If the string cannot be converted to a number, the function should return the string "Invalid number".
//Use error handling in javascript to achieve this output.


function convertToNumber(str){
    let num = parseFloat(str);
  try{
    if(isNaN(num)){
       throw new  Error("invalid number")
    }
    else{
        return num;
    }
  }catch(err){
    return err.message;
  }
}



console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));
// console.log(convertToNumber("avc"));

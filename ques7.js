//Create a class called User with properties username and password. Implement a getter method for password
//that returns the password with all characters replaced by asterisks. Implement a setter method for password
//that checks if the new password is at least 8 characters long and contains at least one number and one
//uppercase letter. If the password is valid, set the new password. If not, log an error message.


class user{
    //propertise 
    constructor( u,p){
        this.username = u;
        this.password = p
    }

    getpassword(){
        return "*".repeat(this.password.length)
    }

    setpassword(newpassword){
     if(newpassword.length >=8 && /[A-Z]/.test(newpassword) && /\d/.test(newpassword)){
        this.password = newpassword;
     }else{
        console.log('Invalid password. Password should be at least 8 characters long, contain at least one number, and one uppercase letter.'
        );
     }
    }
}
const obj1 = new user("akshay", "Akshay11")
console.log(obj1.getpassword());
obj1.setpassword("Aksha")
    


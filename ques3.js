class car{
    // propertise of cars -:

    constructor(y,c,m){
        this.year = y;
        this.company = c;
        this.model = m
    }

    // method
    getDescription(){
        return `this is a  ${this.year}  ${this.company} ${this.model}`
    }
}

const skoda = new car(2022,"skoda","rapid");
console.log(skoda.getDescription());

const fortuner = new car(2022,"fortuner","hycross");
console.log(fortuner.getDescription());

const creata = new car(2024,"alcazar","neo");
console.log(creata.getDescription());

const i10 = new car(2022,"i10","sprtz");
console.log(i10.getDescription());
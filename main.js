// task 1

// let id = 1;
// let student = [];
// let arr = [];

// class Student{
//     constructor(enrollee){
//     this.id = id++,
//     this.name = enrollee.name,
//     this.surname = enrollee.surname,
//     this.ratingPoint = enrollee.ratingPoint,
//     this.schoolPoint = enrollee.schoolPoint,
//     this.isSelfPayment ;
//     }
// }

// task 2

class CustomString{
    constructor(str){
        this.str = str;
    };
    reverse(){
        return this.str.split('').reverse().join('');
    };

    ucFirst(){
        return this.str[0].toUpperCase() + this.str.slice(1);
    };

    ucWord(){
        return this.str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join('');
    };
};
const myString = new CustomString('qwerty qwerty qwerty');
console.log(myString.reverse());
console.log(myString.ucFirst());
console.log(myString.ucWord());

// task 3

class Validator{
    constructor(){}

    checkIsEmail(email){
        let mail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return mail.test(email);
    }
    checkIsDomain(domain){
        let dom = /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/;
        return dom.test(domain);  
    }
    checkIsDate(date){
        let dat = /^\d{2}.\d{2}.\d{4}$/;
        return dat.test(date);
    }
    checkIsPhone(phone){
        let phn = /^([+]3[0-9\s-\(\)]{3,25})*$/;
        return phn.test(phone)
    }
}

let validatorEmail = new Validator()
console.log(validatorEmail.checkIsEmail('vasya.pupkin@gmail.com'))
let validatorDomain = new Validator()
console.log(validatorDomain.checkIsDomain('google.com'))
let validatorDate = new Validator()
console.log(validatorDate.checkIsDate('30.11.2019'))
let validatorPhone = new Validator()
console.log(validatorPhone.checkIsPhone('+38 (066) 937-99-92'))
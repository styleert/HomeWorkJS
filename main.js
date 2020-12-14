// task 1

 function Emploee(obj){
        this.id = obj.id;
        this.name = obj.name;
        this.surname = obj.surname;
        this.salary = obj.salary;
        this.workExperience = obj.workExperience; 
        this.isPrivileges = obj.isPrivileges; 
        this.gender = obj.gender;
    }
    const employeeObj = new Emploee({id:0,name:'Valeriy',surname:'Zhmishenko',salary:1000,workExperience:10,isPrivileges:true,gender:'male'});
    console.log(employeeObj)

// task 2

    Emploee.prototype.getFullName = function(){
        return this.surname + ' ' + this.name;
    }
    console.log(employeeObj.getFullName());

// task 3

let createEmployesFromArr = (arr) => {
    let arrR =[]
    for (let key in arr){
       arrR.push(new Emploee(emplyeeArr[key]))
    }
    return arrR
};
let emplyeeConstructArr = createEmployesFromArr(emplyeeArr) 
console.log(emplyeeConstructArr) 

//  task 4

const getFullNamesFromArr = (arr) => {
    let arrF =[]
    for (let key of arr){
        arrF.push(key.getFullName())
    }
    return arrF
}
    
console.log(getFullNamesFromArr(emplyeeConstructArr))

// task 5

const getMiddleSalary = (arr) => {
    
    let averageValue = 0; 
 
    for (let key of arr) {
        averageValue += key.salary
        console.log(averageValue)
    }
 
    return averageValue / arr.length;
 }
 
 console.log(getMiddleSalary(emplyeeConstructArr));

//  task 6 

const getRandomEmployee = (arr) => {
}

getRandomEmployee(emplyeeConstructArr)
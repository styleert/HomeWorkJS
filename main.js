// task 1

const arr = ['Vasya', 'Petya', 'Alexey']
function removeUser(array,item){
    array.splice(item,1)
}
removeUser(arr, 1)
console.log(arr)

// task 2

const obj = { name: 'Vasya', age: 1}
function getAllKeys(key){
return Object.keys(key)
}
console.log(getAllKeys(obj))

// task 3

function getAllValues(key){
return Object.values(key)
}
console.log(getAllValues(obj))

// task 4 

// function insertIntoarr(obj,id){
//     arr.splice(arr.findIndex(obj = obj == id),0,obj)
    // console.log(arr)
// }

// insertIntoarr()

// task 5
 
class Condidate {
    constructor(condidate) {
       Object.assign(this, condidate)
    }
}
    const condidate = new Condidate(condidateArr[1])
    // console.log(condidate)

// task 6

function getNamesCompany(){
   const comp = condidateArr.map(item => item.company)
        // console.log(comp)
    };

getNamesCompany()

// task 7

function getUsersByYear(years){
    const getUser = condidateArr.filter(item => item.registered)
    return condidateArr.map(item => item._id)
    }
// console.log(getUsersByYear(2017))

// task 8

function getCondidatesByUnreadMsg(num) {
    return condidateArr.filter(item => item.greeting == num);
 }

 console.log(getCondidatesByUnreadMsg(8))
//  task 9 

function getCondidatesByGender(gen) {
    return condidateArr.filter(item => item.gender === gen);
 }

 console.log(getCondidatesByGender('male'))

 
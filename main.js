// task 1

const aRR = ['Vasya', 'Petya', 'Alexey']
function removeUser(array,item){
    array.splice(item,1)
}
removeUser(aRR, 1)
console.log(aRR)

// task 2

const object = { name: 'Vasya', age: 1}
function getAllKeys(key){
return Object.keys(key)
}
console.log(getAllKeys(object))

// task 3

function getAllValues(key){
return Object.values(key)
}
console.log(getAllValues(object))

// task 4 

function insertIntoarr(obj,id){
    arr.splice(arr.indexOf(obj => obj.id == id),0,obj)
    console.log(arr)
}

const obj = {
    id: 3,
    name: 'Vasya'
}

const secondObj = {
    id: 4,
    name: 'Katya'
}

const arr = [
    {
        id: 1,
        name: 'Kolya'
    },
    {
        id: 2,
        name: 'Petya'
    },
];

insertIntoarr(obj, 2)
console.log(arr) 

insertIntoarr(secondObj, 1)
console.log(arr) 



// task 5
 
class Condidate {
    constructor(condidate) {
       Object.assign(this, condidate)
    }

    get state(){
        const stat = this.address.split(',').splice(2,1).join('');
        return stat;
    }

}
    const condidate = new Condidate(condidateArr[0])
    console.log(condidate.state)

// task 6

function getNamesCompany(){   
   const comp = condidateArr.map(item => item.company)
    console.log(comp)
    };
getNamesCompany()

// task 7

function getUsersByYear(years){
    return condidateArr.filter(item => item.registered.split('-').slice(0,1).join('') == years)
    }
console.log(getUsersByYear(2017))

// task 8

function getCondidatesByUnreadMsg(num) {
    return condidateArr.filter(item => item.greeting.match(/\d+/g) == num);
 }

 console.log(getCondidatesByUnreadMsg(8))
//  task 9 

function getCondidatesByGender(gender) {
    return condidateArr.filter(item => item.gender == gender);
 }

 console.log(getCondidatesByGender('male'));

//  task 10.1

// const customReduce = function(callback,accum){
//     let index = 0;
//     if(accum === undefined){
//         accum  = this[0];
//         index = 1
//     }
//     for (let i = index; i < this.lenght,i++){
//         accum = callback(accum, this[0],i,this)
//     }
//     return accum;
// }

// Object.defineProperties(Array.prototype, 'customReduce'){
//     value:customReduce;
//     enuberable:false;
// }

// task 10.2

// const Join = function (split){
// 	if (split === undefined) {
//         split = ',';
// 	}
// 	let str = '';
// 	for(let i = 0; i < this.length; i++){
// 		if(i == this.length - 1){
// 			str = str + this[i];
// 			return str;
// 		}
// 		str = str + this[i] + split;
		
// 	}
// 	return str;
// }

// Object.defineProperty(Array.prototype, 'Join', {
//     value: customJoin,
//     enumerable: false,
// })

// console.log(array.Join(''))

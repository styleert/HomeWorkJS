// task 1

const searchCandidatesByPhoneNumber = phone => {
    return condidateArr.filter(item => item.phone.match(/\d/g).join('').includes(phone.match(/\d/g).join('')))
}

console.log(searchCandidatesByPhoneNumber('43')) 
console.log(searchCandidatesByPhoneNumber('+1(869)40'))
console.log(searchCandidatesByPhoneNumber('43'))
console.log(searchCandidatesByPhoneNumber('+1(869)408-39-82')) 

// task 2

const getCandidateById = id => {
let findId = condidateArr.find(item => item._id == id)
return findId.registered.split('').splice(0, 10).join('').split('-').reverse().join('/')
}

console.log(getCandidateById('5e216bc9a6059760578aefa4'))

// task 3

const sortCandidatesArr = (sortBy) => {
    if (sortBy === 'asc') {
        return condidateArr.sort().balance
     } else if(sortBy === 'desc') {
        return condidateArr.reverse().sort().balance;
     } else if (sortBy === undefined){
        return condidateArr;
     } else {
        return 'wrong sorting'
     }
}

console.log(sortCandidatesArr('asc')) 
console.log(sortCandidatesArr('desc')) 
console.log(sortCandidatesArr()) 
console.log(sortCandidatesArr('sad')) 
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

const sortCandidatesArr = sortBy => {
   let num = (item) => item.balance.slice(1).replace(',','')
    if (sortBy == 'asc') {
        return condidateArr.sort((a,b) => num(a) - num(b))
     } else if(sortBy == 'desc') {
        return condidateArr.sort((a,b) => num(b) - num(a));
     } else { 
        return condidateArr;
}
}

console.log(sortCandidatesArr('asc')) 


// task 4

const getEyeColorMap = () => {
   let obj ={};
    condidateArr.forEach(item=>{
        let color = item.eyeColor
        obj[color] = []
    })
    for (let key in obj){
        obj[key] = condidateArr.filter(item=>item.eyeColor == key)
    }
    return obj;
  }

  console.log(getEyeColorMap())
// task 1
const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};
for (const key in citiesAndCountries) {
let array=[] 
array.push(`${key} - это ${citiesAndCountries[key]}`)
console.log(array);
}

// task 2
function getArray(){
	const amount = 9;
	if(amount%3 !== 0) console.log('NOT DIVIDED BY 3');
    let arr = [];
    let array = 0;
    for(let i = 0; i < amount/3; i++){
        arr.push([])
        for(let j = 0; j < 3; j++){
        arr[i].push(++array)
    }
    }
    console.log(arr)
}
getArray()

// task 3
const namesOfDays = {
 ru: ['','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
	en: ['','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
}
function getNameOfDay(lang,day){
    if(lang == 'ru'){
        console.log(namesOfDays.ru[day])
    }else{(lang == 'en')
        console.log(namesOfDays.en[day])
    }
};
getNameOfDay('ru',6)
// task 4

let min = [19, 5, 42, 2, 77];
console.log(sumTwo(min));

function sumTwo(array) {
    return array.slice().sort((a, b) => a - b).slice(0, 2).reduce((a, b) => a + b);
}

// task 5

    let binaryNumber = [0,1,0,1];
    let string = (binaryNumber.join(''));
    let decimalNumber = parseInt(string,2)
    console.log(decimalNumber)

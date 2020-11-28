// task 1
for(let i=1; i<=10; i++){
    if(i%3 == 0){
        console.log(i,'FizBuz')
    }else if(i%2 == 1){
        console.log(i,'Buz')
    }else{
        i%1 == 0;
        console.log(i,'Fiz')
    }

}
// task 2
let factorial = 10;
console.log(factorial*(factorial-1)*(factorial-2)*(factorial-3)*(factorial-4)*(factorial-5)*(factorial-6)*(factorial-7)*(factorial-8)*(factorial-9))
// task 2 second option
function factoriall(n) {
    return (n != 1) ? n * factoriall(n - 1) : 1;
  }
  console.log(factoriall(10));
// task 2 third option
let result=10;
for(let i=result; i>0; i--){
   result*=i
   console.log(result);
}

// task 3
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
let numberOfPacks = consumptionPerWeek*weeksAmount/sheetsInReamPaper
console.log(Math.ceil(numberOfPacks))

// task 4
const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 270; 
let porch;
let floor;
if (roomNumber%floors == 0) {
   porch =(roomNumber/(roomsOnFloor*floors))
} else {
   porch =(roomNumber/(roomsOnFloor*floors))+1
}
for (let i=1; i<=roomNumber; i++) {
   for(let i=1; i<roomsOnFloor; i++){
      if (i !== roomNumber){
         i++
      }
   }
   if(floor < 9){
      floor++
   }else{
      floor = 1
   }
}
console.log('porch - ', Math.round(porch));
console.log('floor - ', Math.round(floor));

//task 5
// const medianNumber = 3;
// for (let i=0; i<medianNumber; i++){
//    let dash= '-';
//    let pyramid = '#';
//    console.log(dash+pyramid+dash);
// }


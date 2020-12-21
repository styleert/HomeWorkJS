// task 1

function Count(){
    let a = 0;
    return function(b){
        a += b;
        return a;  
    };
};
const counter = Count();
console.log(counter(3))
console.log(counter(5))
console.log(counter(228))

// task 2

function Update(){
    let arr = [];
    return function(elem){
        if(elem == undefined){
            arr = []
            return arr
        }
        arr.push(elem)
        return arr
    }
}

let getUpdatedArr = Update();
console.log(getUpdatedArr(3))
console.log(getUpdatedArr(5))
console.log(getUpdatedArr({name: 'Vasya'}))
console.log(getUpdatedArr()) 
console.log(getUpdatedArr(4))

// task 3

function Get(){
    let sec = 0;
    return function(){
        if (sec == 0){
         console.log('Enable')
        };
        setInterval(function() {
            sec++;
        }, 1000);
        return sec
    }
}

let getTime = Get();

// task 4



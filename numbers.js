//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;

function sumAll() {
    var count = 0
    for (var i = 0; i < arguments.length; i++) {
        count += Number(arguments[i])
    }
    return count
}


//2. write a loop that will log only numbers divisible by 3 between 20 - 100

for (var i= 20; i < 100; i++){
    if (i % 3 === 0) {
        console.log(i)
        continue
    }
}

//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98]; 
let count = 0
for (var i = 0; i < scores.length; i++) {
    count += scores[i]
}

count /= scores.length
console.log(count)
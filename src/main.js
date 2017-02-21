/**
 * Created by Kristoffer on 2/17/2017.
 */

var number = Math.floor(Math.random() * 10) + 1;
console.log(number);
for (var i = 0; i<3; i++){

    var answer = prompt("Guess a number! (1-10)");
    if (number == answer){
        alert("Good Job!");
        break;
    }else if(number > answer){
        alert("too low, guess again! " + number);
    } else {
        alert("too high, guess again!")
    }
}

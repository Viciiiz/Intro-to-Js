console.log("hello world");

let rand = Math.random()*3;

var compPlay;
if(rand<1) compPlay = "R";
else if (rand<2) compPlay = "P";
else comPlay = "S";

var userPlay = window.prompt("R-P-S shoot");

var result = "";

if (userPlay === "R"){
    switch(compPlay){
        case "R":
            result = "draw";
            break;
        case "P":
            result = "you lose";
            break;
        case "S":
            result = "you win!";
            break;
        default:
            result = "error";
            break;
    }
} else if (userPlay === "P"){
    switch(compPlay){
        case "R":
            result = "you win!";
            break;
        case "P":
            result = "draw";
            break;
        case "S":
            result = "you lose";
            break;
        default:
            result = "error";
            break;
    }
} else if (userPlay === "S"){
    switch(compPlay){
        case "R":
            result = "you lose";
            break;
        case "P":
            result = "you win!";
            break;
        case "S":
            result = "draw";
            break;
        default:
            result = "error";
            break;
    }
} else {
    console.log("error in game");
}

console.log("YOU = " + userPlay);
console.log("COMPUTER = " + compPlay);
console.log("\n" + result);
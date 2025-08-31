//Conditional Control Statements

//if control statement
console.log("If Control Statement");
var a = 18;
var b = 20;
if(a < b){
    console.log("a is less than b");
}

//if...else control statement
console.log("If...Else Control Statement");
var age = 17;
if(age >= 18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}

//if...else if...else control statement
console.log("If...Else If...Else Control Statement");
var a=1
var b=2
var c=3
if(a>b){
    console.log("a is greater than b");
}
else if(b<c){
    console.log("b is less than c");
}
else if(a<c){
    console.log("a is less than c");
}
else{
        console.log("All are equal");
}

//switch control statement
console.log("Switch Control Statement");

var a="black"
switch(a){
    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    case "green":
        console.log("color is green");
        break;
    case "black":
        console.log("color is black");
        break;
    default:
        console.log("color not found");
}  

//looping control constructs
console.log("Looping Control Constructs");

//while loop
console.log("While Loop")
var a=1

while(a<=5){
    console.log(a)
    a++
}
//do...while loop
console.log("Do...While Loop")
var a=1
do{
    console.log(a)
    a++
}while(a<=5)
//for loop
console.log("For Loop")
for(var a=1;a<=5;a++){
    console.log(a)
}
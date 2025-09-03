//User Defined Function

//Function Declaration
var a
var b
function display(a,b){
    console.log(a+b)
}
display(10,20)

function display(){
    var a=parseInt(prompt("Enter a first number"))
    var b=parseInt(prompt("Enter a second number"))
    if(a<b){
        alert("a is smaller than b")
    }
    else{
        alert("b is smaller than a")
    }
}
display()

var a
var b
function display(a,b){
    return a*b
}
var result=display(10,20)
console.log(result)

//function Expression
var display=function(){
    confirm("this is function expression")
}
display()

//arrow Function
var a
var b
var display=(a,b)=>{
    return a/b
}
var res=display(200,2)
console.log(res)

//Anonymous Function
(()=>{
    alert("this is anonymous function")
})
()
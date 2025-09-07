document.getElementById("msg").innerText="JavaScript"
document.getElementById("h2").style.color="red"
document.getElementById("img1").src="AH.jpg"

document.getElementById("msg").addEventListener("click",function(){
    document.write("You will get a job")
})

var a=document.getElementById("msg")
a.addEventListener("click",msg1)
a.addEventListener("mouseout",msg2) 
function msg1(){
    document.getElementById("msg").innerHTML="Do hardwork"
}
function msg2(){
    document.getElementById("msg").innerHTML="You will get dream job"
}

function validate(){
    var up=/^[A-Za-z]+$/
    var pnp=/^[6-9]{1}[0-9]{9}$/
    var pv=document.getElementById("pnumber").value
    var uv=document.getElementById("uname").value
    if(uv==""){
        document.getElementById("msg").innerHTML="Enter the username"
        return false
    }
    if(uv.match(up))  
    true;
    else{
        document.getElementById("msg").innerHTML="Enter the albhabet only"
        return false
}
    if(uv.length<3){
        document.getElementById("msg").innerHTML="Enter the more than 3 char"
        return false
    }
    if(uv.length>8){
        document.getElementById("msg").innerHTML="username should contain 8 char"
        return false
    }
    if(pv==""){
        document.getElementById("msg1").innerHTML="Enter the phone number"
        return false
    }
    if(pv.match(pnp))  
    true;
    else{
        document.getElementById("msg1").innerHTML="Invalid Phone number"
        return false
}
}
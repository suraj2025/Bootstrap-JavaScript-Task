function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var url = document.getElementById("url").value;
    var msg = document.getElementById("message").value;
    if(name.length<5){
        document.getElementById("val1").innerHTML="This field is required";
        document.getElementById("name").style="border:2px solid red";
        
    }
    if(email.length<5){
        document.getElementById("val2").innerHTML="A valid email address is required";
        document.getElementById("email").style="border:2px solid red";
        
    }
    if(url.length<5){
        document.getElementById("val3").innerHTML="A valid url is required";
        document.getElementById("url").style="border:2px solid red";
        
    }
    if(msg.length<5){
        document.getElementById("val4").innerHTML="This field is required";
        document.getElementById("message").style="border:2px solid red";
        
    }
   
}
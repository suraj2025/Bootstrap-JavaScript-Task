function validate(){
    for(var i=1;i<document.querySelectorAll("p").length;i++){
        if(i===5){
            continue;
            }
        document.querySelectorAll("p")[i].innerHTML="POOR";
        document.querySelectorAll("p")[i].style="color:red; margin-left:4px;margin-top:15px;";
    }
    document.querySelectorAll("p")[5].innerHTML="POOR OR MISMATCH";
        document.querySelectorAll("p")[5].style="color:red; margin-left:4px;margin-top:15px;";
        
    
}
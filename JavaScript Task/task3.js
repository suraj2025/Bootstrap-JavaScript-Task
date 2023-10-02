
function Multiply() {
    var num1 = document.getElementById("num1").value;   //get value from textbox and store in variable 'num1'
    var num2=document.getElementById("num2").value;     //get value from textbox and store in variable 'num2'
    var result=num1*num2;   
    var element=document.getElementById('result');     //find the HTML tag with id="result"
    element.innerHTML=result;                         //display output on html
    
}
function Divide() {
    var num1 = document.getElementById("num1").value;  //get value from textbox and store in variable 'num'
    var num2=document.getElementById("num2").value;   //get value from textbox and store in variable 'num'
    var result=num1/num2;   
    var element=document.getElementById('result');   //find the HTML tag with id="result"
    element.innerHTML=result;                       //display output on html
    
}


function showDate(){
    var date=new Date();
    var day =date.getDate() ;
    var month =date.toLocaleString('default', { month: 'long' });
    var year=(date.getFullYear()) ;

    document.querySelector(".date").innerHTML=day+"/"+month+"/"+year;
}
function showTime(){
    document.querySelector(".time").innerHTML=new Date();
}
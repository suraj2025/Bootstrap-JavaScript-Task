function reverseNumber(number){
    var reversed = 0;
    while ( number > 0 ) {
        reversed *=10;
        reversed += number % 10 ;
        number=Math.floor(number/10);
    }
    console.log(reversed);
}
reverseNumber(456789);
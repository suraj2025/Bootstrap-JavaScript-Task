function orderedString(arr) {
    var str = [];
    for (var i = 0; i < arr.length; i++) {
        str[i] = arr[i];
    }
    for (var i = 0; i < str.length; i++)
    {
        for (var j = i + 1; j < str.length; j++)
        {  
            var tmp = 0;
            if (str[i] > str[j]) {
                tmp = str[i];
                str[i] = str[j];
                str[j] = tmp;
            }
        }
    }
    var s="";
    for (var i = 0; i < arr.length; i++) {
        s+= str[i];
    }
    return s;
}   
var str = "webmaster"
console.log("Original String : " +"'"+str+"'")
console.log("String after converting it's letter in alphabetical order : "+"'"+orderedString(str)+"'");
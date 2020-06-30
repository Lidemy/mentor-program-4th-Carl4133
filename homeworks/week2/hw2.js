function capitalize(str) {
    var output; //immutable
    var firstChartCode = str.charCodeAt(0);
    
    if( firstChartCode >= 97 && firstChartCode <= 122) {
        firstChartCode -= 32;
        output = String.fromCharCode(firstChartCode);  

        for (var i = 1 ; i < str.length ; i++){
            output += str[i]
        }
    }
    else{
        output = str;
    }

    return output.toString();
}

console.log(capitalize('Aello'));

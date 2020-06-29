function join(arr, concatStr) {
    var output = "";
    for(var i=0;i<arr.length-1;i++){
        output+=arr[i]+concatStr;
    }
    output+=arr[arr.length-1];
    return output;
}

function repeat(str, times) {
    var output="";
    for(var i=1 ; i <= times ; i++ ){
        output += str;
    }
    return output;
  
}

console.log(join([1,2,3], '!'));
console.log(repeat('yo', 2));

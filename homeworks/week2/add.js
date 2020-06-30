function add(a,b){
    var sum = a ^ b ;
    var cin = ((a & b) << 1);
    var output = (cin ^ sum);
    return output;  
}

console.log(add(8,17))


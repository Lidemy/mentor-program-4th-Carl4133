function search(arr, n){
    var min = 0;
    var max = arr.length-1;

    while(max-min > 1){
        var half = Math.floor((min+max)/2);
        if(arr[half] == n){
            return half;
        }
        else{
            if(arr[half]>n) max = half-1;
            else min = half+1;
        }
    }

    if (arr[max] == n) return max;
    else if(arr[min] == n) return min;
    else return -1;
}

console.log(search([1,3,5,7],7));
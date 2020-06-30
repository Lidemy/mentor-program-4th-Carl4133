function reverse(str) {
    var output="";
    for(var i=str.length-1;i>=0;i--){
        output+=str[i]
    }

    console.log('正確輸出：'+output)


}

reverse('1,2,3,2,2');

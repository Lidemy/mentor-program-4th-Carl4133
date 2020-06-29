//reference leetCode 43. Multiply Strings 
function multiply(a,b){

    let len = a.length + b.length;
    let output = new Array(len);
    output.fill(0);  //結果、進位 初始化
    for(let i=a.length-1;i>=0;i--){   //個位開始
        for(let j=b.length-1;j>=0;j--){
            let subMul = a[i] * b[j] + output[i+j+1]
            console.log(i,j,output[i+j+1],subMul)
            output[i+j]+=Math.floor(subMul/10); //進位
            output[i+j+1]=subMul%10;            //小結果
            console.log(output);
        }
    }
    return(output.join("").replace(/^0+/,''));
}


console.log(multiply('123','45'))

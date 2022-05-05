 fs = require("fs")

function fibonacci(n){
    if (n==0 || n==1){
        return n;
    }else{
        return (fibonacci(n-1)+fibonacci(n-2))
    }
}

fs.readFile("num.txt", "utf8",function(err, data){
    if (err){
        console.error(err)
        return;
    }else{
        return console.log("%d", fibonacci(data))
    }
})
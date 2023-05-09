function factorial(number){
    let result = 1;
    for(let i =number;i>=1;i--){
        result=result*i;
    }
    return result;
}

const newFactorial = factorial(3);
console.log(newFactorial);
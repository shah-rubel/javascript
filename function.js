//declaring a function
function printHello(){
    console.log("Hello World!");
}
//calling the function
printHello();

//function with parameter
function sum(num1,num2){
    console.log(num1+num2);
}
sum(12,23);
//function that return any value

function squaring(value){
    const result = value*value;
    return result;
}
const square1 = squaring(5);
console.log(square1);
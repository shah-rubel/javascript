function add(numberArray){
    let sum =0;
    for(let i =0;i<numberArray.length;i++){
        const index = i;
        const element = numberArray[i];
        sum = sum + element;
    }
    return sum;
}

let array1 = [1,2,3,4,5];

let sumArray1 = add(array1);

console.log('sum',sumArray1);
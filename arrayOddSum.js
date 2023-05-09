function add(numberArray){
    let sum =0;
    for(let i =0;i<numberArray.length;i++){
        const index = i;
        const element = numberArray[index];
        sum = sum + element;
    }
    return sum;
}

function oddSum(numberArray){
    let oddArray=[];
    for(let i =0;i<numberArray.length;i++){
        const index = i;
        const element = numberArray[index];
        if(element % 2 !== 0){
            oddArray.push(element);
        }
    }
    const totalOddSum=add(oddArray);
    return totalOddSum;
    
    

}

let array1 = [1,2,3,4,5];

let oddArray1 = oddSum(array1);


console.log('sum',oddArray1);
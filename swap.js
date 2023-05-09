let first = 12;
let second = 6;
console.log(first,second);
//swaping method 1
// const temp = first;
// first = second;
// second = temp;
// console.log(first,second);

//swaping method 2 destructing

[first,second] = [second,first];
console.log(first,second);
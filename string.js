const newString = "Hello world! You're welcome to a new vison.";
//use split to spliting the line
const word = newString.split(' ');
console.log(word);
//use split to get all the char
const char = newString.split("");
console.log(char);

//use slice to get sliced string from a starting index to a ending index
const partial = newString.slice(2,8);
console.log(partial);

//use subString to get same as slice
const partial2 = newString.substring(2,8);
console.log(partial2);
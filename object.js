//declaring a object
var mobile ={
    mobileName: "Nokia",
    price: 35000,
    storage: "556gb",
    processor:"snapdragon 5 gen 1",
    color:"deep black"
}
console.log(mobile);

//find a property value;
var mobileName1 = mobile.mobileName;
console.log(mobileName1);

//change a property value;

mobile.storage="128gb";
console.log(mobile);

//access property name by using object.key
var propertyName= Object.keys(mobile);
console.log(propertyName);

// access property value by using Object.values

var propertyValues = Object.values(mobile);
console.log(propertyValues);

//other options to get property value

var newProperty = mobile['mobileName'];
console.log(newProperty);

//using a variable name
var storage = "storage";
var storageValue = mobile[storage];
console.log(storageValue);

//set property value
mobile[storage]='512gb';
console.log(mobile);

mobile['color'] = 'green';
console.log(mobile);
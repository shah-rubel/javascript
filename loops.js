//  initialize loop variable
 var i = 0;
while(i<10){
    console.log(i);
    i++;
}

//for loop
console.log("Simple For");
for(var i=0;i<10;i++){
    console.log(i);
}

//access array element using for loop
var items = ['soundbar','headset','pc','phone','pendrive','pen'];
for(var i =0;i<items.length;i++){
    var item = items[i];
    console.log(item);
}
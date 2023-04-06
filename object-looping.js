var student={
    studentName:"Shah Saifur Rahman Rubel",
    studentID : 2012172,
    program:'bachelor',
    major:'CSE'
}

var properties = Object.keys(student);
console.log(properties);

//access property and value using normal for loop
for (var i =0;i<properties.length;i++){
    var propertyName = properties[i];
    var propertyValue = student[propertyName];

    console.log(propertyName,propertyValue);
}

//access property and value using for in loop

for(var property in student){
    var values = student[property];
    console.log(property+": "+values);
}
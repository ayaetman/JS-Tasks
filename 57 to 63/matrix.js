/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(a,b,c){
    let Name;
    let Age;
    let Status;
    if(typeof a==="string"){
        Name = a;
    }
    else if(typeof a==="number"){
        Age = a
    }
    else{
        Status = a;
    }
    if(typeof b==="string"){
        Name = b;
    }
    else if(typeof b==="number"){
        Age = b;
    }
    else{
        Status = b;
    }
    if(typeof c==="string"){
        Name = c;
    }
    else if(typeof c==="number"){
        Age = c;
    }
    else{
        Status = c;
    }
    if(Status===true){
       Status = "You Are Available For Hire"
    }
    else{
        Status="You Are Available For Hire"
    }
    document.write(`<p>Hello ${Name},Your Age Is ${Age},${Status}</p>`)
}

    showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
    showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
    showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
    showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

    //1
    function sayHello(theName, theGender) {
        if(theGender==="Male"){
            console.log(`Hello Mr ${theName}`)
        }
        else if(theGender==="Female"){
            console.log(`Hello Miss ${theName}`)
        }
        else{
            console.log(`Hello ${theName}`)
        }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
let reselt;
//2
function calculate(firstNum, secondNum ="Undefined", operation ) {

if(operation ==="add"){
console.log (reselt = firstNum+secondNum);
return reselt;
}
else if(operation==="subtract"){
console.log(reselt = firstNum-secondNum);
return reselt;
}
else if(operation ==="multiply"){
console.log(reselt = firstNum*secondNum);
return reselt;
}
else if(secondNum==="Undefined"){
console.log("Second Number Not Found")
}
else{
console.log(reselt =firstNum+secondNum);
return reselt;
}
}


// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

//3
function ageInTime(theAge) {
  if(10>theAge || theAge> 100){
    console.log("Age Out Of Range")
  }
  else{
    console.log(`
    Months: ${theAge*12} 
    Weeks : ${theAge*12*4}
    Dayes : ${theAge*12*4*7}
    hours : ${theAge*12*4*7*24}
    Minutes: ${theAge*12*4*7*24*60}
    seconds: ${theAge*12*4*7*24*60*60}`)
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

//4
function createSelectBox(startYear, endYear) {
document.write(`<select>`)
for(i=startYear;i<=endYear;i++){
    document.write(`<option value=${i}>${i}</option>`)
}
document.write(`</select>`)
}
createSelectBox(2000, 2021);
//5


function multiply(...nums) {

    let result = 1;
    for (let i = 0; i < nums.length; i++) {
        if (typeof nums[i] === "number") {
            result *= parseInt(nums[i]); 
        }
    }
    console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

// Challenge 1
/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let mySolution = myString.split("").filter(function(ele){
    return ele !== ",";
}).map(function(ele){
    return isNaN(parseInt(ele)) ? ele : "";
}).reduce(function(acc, current){
    return acc + current;
}).slice(true, -isNaN(myString)).replaceAll("_", " ");

console.log(mySolution); // Elzero Web School
//==================================
//1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let LettersOnly =mix.map(function(ele){
return isNaN(parseInt(ele))?ele:"";
}).reduce(function(acc,counter){
return `${acc}${counter}`
})
console.log(LettersOnly);
// Elzero
//==================================
//2
let MyString = "EElllzzzzzzzeroo";
let newString = MyString.split("").filter(function(ele, index){
    return  MyString.indexOf(ele) === index;
}).reduce(function(acc, current){
    return acc + current;
});

console.log(newString);
// Elzero
//======================================
//3
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let newArray = myArray.reduce(function(acc, current){
    return acc.concat(current);
}).split("").filter(function(ele){
    return ele !== ",";
}).reduce(function(acc, current){
    return acc + current;
});

console.log(newArray);

// Elzero
//======================================
//4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let reflect =numsAndStrings.map(function(ele){
return -ele;
}).filter(function(ele){
return !isNaN(parseInt(ele));
})
console.log(reflect);
// [-1, -10, 10, 20, -5, -3]
//=======================================
//5
let nums = [2, 12, 11, 5, 10, 1, 99];
let sum =nums.reduce(function(acc,current){
return current%2===0?current*acc:current+acc;
},1);
console.log(sum)
// 500
/* 31 comparison operation 
==    (compare value)
!=

===      (compare value + type)
!===

>
>=

<
<=

*/

/* 32 logical operator
!  Not
&& And 
|| OR


*/
/* 33 if condition

if 

else if 

else

*/

// let price = 100;
// let discount = false;
// let disacountAmount =40;
// let country="kanda";
// if(discount === true){
//     price -=disacountAmount
// }else if (country === "egypt"){
//     price-=50;
// }
// else{
//     price-=10;
// }
// console.log(price);

/* 34 nested if */

let price = 100;
let disacountAmount =30;
let country="egypt";
student=true;

if (country === "egypt"){
if(student === true){
    price-=disacountAmount+20
}
else if(student===false){
    price-=disacountAmount
}
console.log(price);

}

/*35 Conditional Ternary Operator



*/
let theName = "Ahmed";
let theGender = "Male";

if (theGender === "Male"){
    console.log("Mr")
}
else {
    console.log("Mrs")
}

// condition ? if true : if false
theGender === "Male" ? console.log("Mr"):console.log("Mrs");

let result= theGender === "Male" ? "Mr":"Mrs";
 document.write(result);


console.log(`hello ${theGender === "Male" ? "Mr":"Mrs"} ${theName}`);

/* #38 Switch Statement
switch (statement){
    case 0:
        //code block
        break;
    case 1:
        //code block
        break;
    default:
        //code block    
    }
*/
let day = 0;
switch (day){
    case 0:
        console.log("satarday");
        break;
    default:
        console.log("unknwon");
    }
    
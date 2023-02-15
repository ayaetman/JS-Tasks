//video #37
//#1
let age =10;
age<10?console.log("10"):age>=10&&age<=40?console.log("10 to 40"):age>40?console.log(">40"):console.log("UnKnown");


//#2
let st ="Elzero Web School"
if ( st.length+st.length === +"34"){
    console.log("Good")
}
//#3
if(st.charAt(st.search("W")).toLowerCase() === "w"){
	console.log("Good");
}    
//#4    
if(typeof st.length !== "string"){
    console.log("Good");
}
//#5
if(typeof st.length === "number"){
	console.log("Good");
}
//#6
if(st.substring(0,6).repeat(2) === "ElzeroElzero"){
	console.log("Good");
}

//switch and if challange
// المفروض ان فيه كود بال if 
//احوله لكود بال switch
let job = "IT";
let salary = 0;
switch(job){
    case "manager":
        salary=8000;
        console.log(`the salary is ${salary} `);
        break;
    case "developer":
    case "IT":
        salary=7000;
        console.log(`the salary is ${salary}`);
        break;
    case "Developer":
    case "Designer":
        salary=6000;
        console.log(`the salary is ${salary}`);
        break;
    default:
        salary=4000;
        console.log(`the salary is ${salary}`);    
}

// هنا العكس

let holiday =0;
let money =2000;
if (money==5000){
    console.log("no holidays");
}
else if (money==3000){
    console.log("1 or 2 holidays");
}
else if (money==2000){
    console.log("3 holidays");
}
else if (money==1000){
    console.log("4 holidays");
}
else if (money==0){
    console.log("5 holidays");
}
else{
    console.log("unknown")
}
//or 
let Hollidays = 5;
let Money = 0;

if(Hollidays == 0)
{
	Money = 5000;
	console.log(`Salary Is => ${Money}`);
}
else if(Hollidays === 1 || Hollidays === 2)
{
	Money = 3000;
	console.log(`Salary Is => ${Money}`);
}
else if(Hollidays === 3)
{
	Money = 2000;
	console.log(`Salary Is => ${Money}`);
}
else if(Hollidays === 4)
{
	Money = 1000;
	console.log(`Salary Is => ${Money}`);
}
else if(Hollidays == 5)
{
	Money = Money;
	console.log(`Salary Is => ${Money}`);
}
else
{
	Money = Money;
	console.log(`Salary Is => ${Money}`);
}
//if مختصره 
//Conditional Ternary Operator
holiday === 0
? console.log(`ur Money is ${money = 5000}`)
: holiday === 1 || holiday === 2
? console.log(`ur Money is ${money = 3000}`)
: holiday === 3
? console.log(`ur Money is ${money = 1000}`)
: console.log(`u don't have any Money`);

//ضع العلامة المناسبة من ال Operators التي تعلمتها بدلا من علامة الإستفهام لتكون النتيجة True
console.log(100 == "100"); // true
console.log(100 !== 1000); // true
console.log(110 + 100 > 10 + 20); // true
console.log(-10 == "-10"); // true
console.log(- -50 >= +"-40"); // true
console.log(+ 10 < -"-40"); // true
console.log(+ "10" >= 10); // true
console.log(! 20 == false); // true

//لديك متغيرين فيهم رقمين مختلفيين والمطلوب إستعمال ال Operators التي تعلمتها مع المتغيرات لتظهر النتيجة True
let num1 = 10;
let num2 = 20;

console.log(num2>num1); // true
console.log(num2>=num1); // true
console.log(num1<num2); // true
console.log(num1<=num2); // true
console.log(num1!=num2); // true
console.log(num1!==num2); // true
//لديك ثلاث متغيرات فيهم أرقام مختلفة والمطلوب إستعمال ال Operators التي تعلمتها بدلا من علامة الإستفهام لتظهر النتيجة True
let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a < b); // true
console.log(a + b > a + c); // true
console.log(!(a === b) && !(a > b) && !(a < c) && !(a === c)); // true

/*
لديك متغير يحتوي على رقم والمطلوب فحص الرقم وعمل اللازم بناء على الشروط
إذا كان الرقم أصغر من 10 قم بطباعة الرقم وقبله صفرين
إذا كان الرقم أكبر من 10 وأصغر من 100 قم بطباعة الرقم وقبله صفر
إذا كان الرقم أكبر من أو يساوي 100 قم بطباعة الرقم كما هو
// Test Case 1
let num = 9; // "009"

// Test Case 2
let num = 20; // "020"

// Test Case 3
let num = 110; // "110"
*/
let num = 9 ;
if (num < 10){
    console.log(`00${num}`);
}
else if (num>=10 && num<100){
    console.log(`0${num}`);
}
else if (num>=100){
    console.log(`${num}`)
}
//#2
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//لديك ثلاث متغيرات والمطلوب فحص الشروط التالية وإظهار الرسالة بنفس شكل ال Output في المثال
let number = 9;
let str = "9";
let str2 = "20";

// if (number==str){
//     console.log(`${number} Is The Same Value As ${str}`);

// if (number==str&&number!==str){
//         console.log(`${number} Is The Same Value As ${str} but not the same type`);
// }
// else if (number!==str2){
//     console.log(`${number} Is Not The Same Value As or the same type as ${str2}`);
// }
// else if(typeof str== typeof str2 && str!==str2){
//         console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`)
// }
// }
if(number==str&&number!==str&&number!==str2&&typeof str== typeof str2 && str!==str2){
    console.log(`${number} Is The Same Value As ${str}`);
    console.log(`${number} Is The Same Value As ${str} but not the same type`);
    console.log(`${number} Is Not The Same Value As or the same type as ${str2}`);
    console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
}

// Output
// "{num1} Is The Same Value As {str}"
// "{num1} Is The Same Value As {str} But Not The Same Type"
// "{num1} Is Not The Same Value Or The Same Type As {str2}"
// "{str} Is The Same Type As {str2} But Not The Same Value"


//#3
//#4
//قم بتغيير محتوى المتغيرات لما هو مناسب لتكون جميع نتائج ال Conditions هي True ولا تقم أبدا بتعديل ال If Condition نفسه
// Edit What You Want Here

let num5 = 20//10;
let num6 = 1//10;
let num3 = 20//"10";
let num4 = 60//20;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num5 > num6) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num5 > num6 && num5 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num5 > num6 && num5 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num5 + num6) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num5 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num5 + num6 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num5 + num3) + num6 === 21) {
  console.log("True");
} else {
  console.log("False");
}
// 38-------->>39
//#1
//xxxxxxxxxxxxx ----->يجب التأكد أن إسم اليوم لا توجد قبله مسافات ولا بعده ويكون أول حرف Capital حتى لو تم كتابة الإسم بحروف صغيرة

let Day = "   friday  ";
// console.log(Day.trim().charAt(0).toUpperCase());


switch(Day){
    case "friday":
    case "saturday":
    case "sunday":
        console.log("No Appointments Available");
        break;
    case "monday":
    case "thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break;
    case "wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break;
    default:
        console.log("Its Not A Valid Day");                
}
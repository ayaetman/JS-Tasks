
//////////////////  |10|  ///////////////

//Data Types
//String
//console.log(typeof "aya");
//number
//console.log(typeof 5137);
//boolean
//console.log(typeof true);
//null
//console.log(typeof null);
//undifined
//console.log(typeof undefined);
//object => array
//console.log(typeof ["aya","ali"]);
//object
//console.log(typeof {aya:1, ali:2});

///////////////////  |11|  ///////////////////

//Declaration => ( Keyword | Variable Name | Assignement Operator | Variable Value)
//var user = "aya";
//var age = 20;
//console.log(user);
//console.log(age);

///////////////////////////////////////

// #012 - Identifiers Name Conventions And Rules
// Sensetive
// can use  $ _
// camal case  ==> userName

//////////////////  |12|  /////////////////////
/*
var 
  redcalre => yes
|**variable scope drama**| [added to window]
let 
  redcalre => no
variable scope drama 

const
  redcalre => no
variable scope drama 
	
*/
////////////////////  |13|  ///////////////////
/*
String Sentax + character escape sequence 
\ => Escape +line continue 
\n => new line
   |example |
	console.log("Elzero web 'school'");
	console.log("Elzero web \"school\"");
	console.log("Elzero\nweb\nschool");
	*/
////////////////  |14|  /////////////////////

/* Concatination ربط البيانات ببعضها 
علامة ال ال plus + */

//let a = "We";
//let b = "Love javascript";
//document.write(a + " " + b);
//|in consol|
//console.log(a, b);

//////////////////   |15|  //////////////////
//*********************************/
//function Employee(name, age, department, salary) {    \/
//    this.name = name;                                 /\
//    this.age = age;
//    this.department = department;
//    this.salary = salary;
//}
//var emp = new Employee('ahmed', 26, 'HR' , 'FullTime');
//console.log(emp.salary) ;
//******************** **************************/



////////////////////  |16|  //////////////////////////////////
//Template literals Template (Template String)
// `` ==> back cot

//let a = "We love";
//let b = "JavaScipt";
//let c = "And";
//let d = "Programming";

//console.log(a + " " + b + "\n" + c + " " + d);
//console.log(`${a} ${b}
//${c} ${d}`)

//*******//

//let MakeUp = (`
//<div class="parent">
//<div class="child">
//<h1>Title</h1>
//<p>Paragraph</p>
//</div>
//</div>
//`);
//document.write(MakeUp);
/*******OR******/
//let h1 = "title";
//let p = "paragraph";
//let MakeUp = (`
//<div class="parent">
//<div class="child">
//<h1>${h1}</h1>
//<p>${p}</p>
//</div>
//</div>
//`);
//document.write(MakeUp);


//Task on 17 video
// التكليف الاول

let _the_title = "Hello Elzero";
let _description = "welcome Elzero school";
let _date = "26/10";
let makeup = (`
 <div>
 <h3>${_the_title}</h3>
  <p>${_description}</p>
 <span>${_date}</span>
 </div>
 `);
makeup = makeup.repeat(4);
document.write(makeup);

//التكليف الثاني

let number_one = "10";
let number_two = "20";

// Ouput
console.log(number_one + number_two); // Normal Concatenate => 1020
console.log(typeof(number_one + number_two)); // Normal Concatenate => String
console.log(`${number_one}${number_two}`); // Template Literals Way => 1020
console.log(typeof`${number_one}${number_two}`); // Template Literals Way => String

console.log(number_one + "\n"+ number_two);
/*
  Normal Concatenate
  20
  10
*/
console.log(`${number_one}
${number_two}`);
/*
  Template Literals Way
  20
  10
*/
//التكليف الثالث !!!

//console.log(elzero.innerHTML); // object
//console.log(typeof elzero); // object

//التكليف الرابع
console.log("`I'm In \n \\\\ \n Love \\\\ \"\"\" \'\'\' \n \+\+ With \+\+ \n \\\"\"\" \\\"\"\" \n \"\"JavaScript\"\"``");
//`I'm In
//\\
//Love \\ """ '''
//++ With ++
//\"""\"""
//""JavaScript""``

//التكليف الخامس

let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20_
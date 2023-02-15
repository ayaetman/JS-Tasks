/* 
Arithemtic Operators
+ Addition 
- Subtraction 
* Multiplication
/ Division
** Exponentiation اس 
% modulus (Division Remainder)
++ Increment [Post / Pre]
-- Decrement [Post / Pre]
*/
//console.log(10 + 10);
//console.log(10 + "aya");

//console.log(20 - 10);
//console.log(20 - "aya"); //NAN
//console.log(typeof (20 - "aya")); //number

//console.log(10 * 20);

///console.log(20 / 5);

//console.log(2 ** 3);

//console.log(11 % 2);

//num = 1;
//++num

//*/////////////////////////////////////////// */

//a = "10";
//b = 20;
//c = true;
//console.log(+a + b + c);

//console.log(+"100")
//console.log(-"-100")

//*///////////////////////////////////////////*/
// Asginment operation //

//let a = 10;
//a += 10;
//a *= 10;
//a /= 2;
//a -= 50;
//console.log(a)

/**///////////////////// تحدي الفيديو 22 علي ما سبق ///////////////////////// */

//chalange 1

let a = 10;
let b = "20";
let c = 80;
console.log(++a + +b++ + +c++ - +a++);
/*
++a =>11
+
+b =>20 //num
++a + +b++ =>31
+c => 80
++a + +b++ + +c++ => 111
+a => 11
++a + +b++ + +c++ - +a++
113 - 12 =101
*/
console.log(++a + -b + +c++ - -a++ + +a);
/*
[++a] [+]
[++a]
value : 11
Explane: pre
[+]
Explane : arth operation (+)
[-b] [+]
[-b]
value : -20
Explane : Asginment operation 
[+]
Explane : Arthmetic operation (+)
[+c] [c++] [-]
[+c] 
value:+80
Explane : Asginment operation 
[c++]
value:80
Explane:Explane : Post
[-]
Explane : Arthmetic operation (-)
[-a][a++][+]
[-a]
value:-11
Explane:Explane : ass op
[a++]
value: 11
Explane:Explane : Post
[+]
Explane : Arthmetic operation (+)

[+a]
value:+12
Explane : Asginment operation 
*/
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
[--c] [+]
[--c]
value : 79
Explane: pre
[+]
Explane : arth operation (+)
[+b] [+]
[+b]
value : +20
Explane : Asginment operation 
[+]
Explane : Arthmetic operation (+)
[--a] [*]
[--a] 
value: 9
Explane : pre
[*]
Explane : Arthmetic operation (*)
[+b][b++][-]
[+b]
value:+20
Explane:Explane : ass op
[b++]
value: 20
Explane:Explane : Post
[-]
Explane : Arthmetic operation (-)

[+b][*]
value:+21
Explane : Asginment operation 
[*]
Explane : Arthmetic operation (*)
[a] [+]
[a] 
value: 9
[+]
Explane : Arthmetic operation (+)
[--a] [-]
[--a] 
value: 8
Explane:Explane : Pre
[-]
Explane : Arthmetic operation (-)

[+true]
value : +1
*/

//chalange 2


let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * +e); //2000
console.log(++e * ++g + -d + ++f);//173

/*******************************التكليفات ********************************/
//التكليف الاول 
// Replace ? With Arithmetic Operators
//console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400); // 0

//let num = 3;

//// Solution One
//console.log(num+num); // 6

//// Solution Two
//console.log(num*num-num); // 6

//// Soultion Three
//console.log(num/num * num +num/num *num); // 6

//// Soultion Four
//console.log(num - -num ); // 6

//// Solution Five
//console.log(num-num + num+num); // 6
//// Solution Six
//console.log(true + true + true + num); // 6
/**************************   تكليف  3 ****************************/

//let num = "10";

//// Solution One
//console.log(+num + +num); // 20

//// Solution Two
//console.log(+num - -num); // 20

//// Solution Three
//console.log(+num * +num / +num + +num); // 20

//// Solution Four
//console.log(); // 20


/**/////////////////////// تكليف  3 ///////////////////////*/

let points = 10;

points =

console.log(points); // 13

// Write Your Code Here

console.log(points); // 8;


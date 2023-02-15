/*
[[Number]]
Double Precision
Suntactic Sugar 
" _ "
e
**
With Decimal  
Number + Bigint  
Number Min Value  
Number Max Value  

*/


//console.log(10000);
//console.log(100_00);
//console.log(1e4);
//console.log(10 ** 4);
//console.log(10000.0);
//console.log(Number.MAX_VALUE)
//console.log(Number.MAX_VALUE+1000)
//console.log(Number.MIN_VALUE)

/*
[[Number Methods]]
  - Two Dots To Call A Methods
  - toString()
  - toFixed()
	- ParseInt()
  - ParseFloat()
	- isInteger() [ES6]
	- isNaN()[ES6]
 */


//console.log((100).toString());
//console.log(100..toString());

//console.log(100.5555.toFixed(2));

//console.log(Number("100 aya"))
//console.log(+"100 aya")
//console.log(parseInt("100 aya "));
//console.log(parseFloat("100.500 aya "));

//console.log(Number.isInteger("100"))
//console.log(Number.isInteger(100))

//consol.log(Number.isNaN("Aya" / 20));


/*
  [[Math Object]]
	round()
	ceil()
	floor()
	min()
	max()
	pow()
	random()
	trunc() [ES6]
	*/

//console.log(Math.round(99.3));
//console.log(Math.round(99.7));

//console.log(Math.ceil(99.4));
//console.log(Math.floor(99.8));

//console.log(Math.min(10, 20, 50, -50));
//console.log(Math.max(10, 20, 50, -50));

//console.log(Math.pow(2, 4));

//console.log(Math.random());

//console.log(Math.trunc(99.5))

/*
Number Challange
*/
//let a = 1_00;
//let b = 2_00.5;
//let c = 1e2;
//let d = 2.4;

////find Smallest Number in All Variables And Return Integer
//console.log(Math.trunc(Math.min(a, b, c, d)));

////Use Variable a + d One Time To Get The Needed Output
//console.log(Math.pow(a, Math.trunc(d))) //10000
	
////Get Integer "2" From d Variable With 4 Methods

//console.log(Math.floor(d));
//console.log(Math.trunc(d));
//console.log(Math.round(d));
//console.log(d.toFixed());
//console.log(parseFloat(d));

////Use Variavles b + d Tp Get This Values

//console.log((Math.floor(b)/Math.ceil(d)).toFixed(2)); //66.67 => Strig
//console.log(Math.ceil(b)/Math.ceil(d)); //67 => Number


// الدرروس من 23 الي 26
// التكليف 1

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(100_000.000);                     // 100000
console.log(10e4);                            // 100000
console.log(10**5);                           // 100000
console.log(Math.round(100000.4));            // 100000
console.log(Math.floor(100000.9));            // 100000
console.log(Math.max(100,1000,10000,100000)); // 100000
console.log(Math.ceil(99999.4));              // 100000
console.log(20e4-10e4);                       // 100000
console.log(Math.trunc(100000.3));            // 100000
console.log(10* 10 * 10 * 10 * 10 );          // 100000

// التكليف 2

//إستخدم MIN_SAFE_INTEGER لتخرج بالنتيجة المطلوبة في المثال

console.log((Number.MIN_SAFE_INTEGER )* -1);   // 9007199254740991      

// التكليف 3
//بسطر  واحد فقط إستخدم MAX_SAFE_INTEGER لتخرج بالنتيجة رقم 16 بدون إستعمال أي أرقام

console.log((Number.MAX_SAFE_INTEGER)/(Number.MIN_SAFE_INTEGER)); // 16  //False

// التكليف 4 
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar)); // 100.57                               //False

// التكليف 5

/*المتغير التالي يحتوي على الرقم 10
يجب عليك إستخدام isInteger لتخرج بالناتج رقم 2
غير مسموح بكتابة اي ارقام بنفسك ويجب إستخدام الخاصية السابقة لتخرج بالناتج المطلوب
*/
let num = 10;

console.log(Number.isInteger(num) + (Number.isInteger(num))); // 2

// التكليف 6
let flt = 10.4;

console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Number.parseInt(flt)); // 10
console.log(flt.toFixed(0)); // 10

// التكليف 6
//قم بكتابة Code يطبع رقم عشوائي مابين الصفر ورقم 4

console.log(Math.random() * 5); // 0 || 1 || 2 || 3 || 4

/*
# 027
String Methods 
Access With Index 
Access With CharAt()
length
trim()
toUpperCase()
toLowerCase()
[Chain Methods]
*/

//let theName = "Ahmed "
//console.log(theName);
//console.log(theName[1]);

//console.log(theName.charAt(2));

//console.log(theName.length);
//console.log(theName.trim());

//console.log(theName.toUpperCase());
//console.log(theName.toLowerCase());

//console.log(theName.trim().charAt(2).toUpperCase());

/*
#028
String Methonds
  indexOf (Value [Mand], Start [Opt] 0)
	lastIndexOf(Value [Mand] , Start [Opt] length)
	slice(Start [Mand] ,End [Opt] Not Include End)
	repeat (Times) [ES6]
	split (Separator [Opt], Limit [Opt])
*/


//let a = "Elzero Web School";
//console.log(a.indexOf("Web"));
//console.log(a.indexOf("Web",8));
//console.log(a.indexOf("o"));//5
//console.log(a.lastIndexOf("o"));//15

//console.log(a.slice(2, 6));
//console.log(a.slice(-5, -3));

//console.log(a.repeat(5));

//console.log(a.split(" ", 2));

/*
#029 

String Methods
- Substring (Start [Mand ], End [Opt ] Not INcluding End )
-- Start > End Will Swap
--Start < 0 It Start From 0
-- Use Lenghth to Get Last Character
-- Substr (Start [Mand ], Characters To Extract)
-- Start >= Length = **
-- Negative Start From End 
- includes (Value [Mand] ,Start [Opt] Default 0) [ES6]
- StartsWith (Value [Mand] ,Start [Opt] Default 0) [ES6]
- EndsWith (Value [Mand] ,Length [Opt] Default full length) [ES6]
*/

//let a = "Elzero Web School";

//console.log(a.length);

//console.log(a.substring(2, 6));
//console.log(a.substring(6, 2));
//console.log(a.substring(-10, 6)); //(0, 6)
//console.log(a.substring(a.length - 5, a.length - 3));

//console.log(a.substr(0, 6));
//console.log(a.substr(17));
//console.log(a.substr(-3));
//console.log(a.substr(-5, 2)); //2 دي يعني كمل بعد index اللي مدهالك ب اتنين

//console.log(a.includes("Web"));
//console.log(a.includes("Web", 8));

//console.log(a.startsWith("E"));
//console.log(a.startsWith("E",2));
//console.log(a.startsWith("zero", 2));

//console.log(a.endsWith("o", 6))    //هل بينتهي بال o
//console.log(a.endsWith("l"))       //هل بينتهي بال l


// الدروس من 027 الي 030

//  التكليف  1

//لديك متغير يحتوي على String
//المطلوب جلب أول حرف من ال String
//يجب تنفيذ الحل ب 6 طرق مختلفة
//يجب عدم تكرار اي حل ويجب إستعمال المتغير فقط
//يجب التأكد أن الحرف صغير Small Letter
//واحد من الحلول تأكد أنه يقوم بتكرار الحرف المأخوذ 3 مرات

let userName = "Elzero";
console.log(userName.substring(3, 4)); // e
console.log(userName.substr(3, 1)); // e
console.log(userName.substring(userName.length-3 , userName.length-2)); // e
console.log(userName.slice(3, 4)); // e
console.log(userName.charAt(3)); // e
console.log(userName[3]); // e
console.log(userName.slice(3, 4).repeat(3)); // eee

// التكليف 2

 /*
 لديك بعض المتغيرات عبارة عن كلمة ومجموعة حروف
في السطر الأول تأكد أن الحرف Z موجود داخل الكلمة وان النتيجة التي ستخرج هي true
في السطر الثاني تأكد أن الكلمة تبدا بالحرف E وأن النتيجة التي ستخرج هي true
في السطر الثالث تأكد أن الكلمة تنتهي بالحرف o وأن النتيجة التي ستخرج هي true
لاحظ حالة الأحرف Capital And Small
غير مسموح التلاعب بالمتغيرات
 */

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes("z")); // True
console.log(word.startsWith("E")); // True
console.log(word.endsWith("o")); // True



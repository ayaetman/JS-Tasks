let start = 10;
let end = 100;
let exclude = 40;

for(i=start;i<=end;i+=start){
    if(i=== exclude){
        continue;
    }
    console.log(i)
}
/* Output
10
20
30
50
60
70
80
9033
100
*/
let start2 = 10;
let end2 = 0;
let stop = 3;
for(i=start2;i>end2;i--){
    if(i<start2){
        console.log(`${end2}${i}`)
    }else{
        console.log(`${i}`)
    }
    if(i === stop){
        break;
    }
}
/* Output
10
09
08
07
06
05
04
03
*/
let start3 = 1;
let end3 = 6;
let breaker = 2;
for(i=start3;i<end3;i++){
    console.log(i);
    for(j=breaker;j<end3;j++){      //for (let l = breaker; l < endTwo; l += breaker){
        if (j===breaker+2){
            break;
        }
        console.log(`--${i}`);
    }
}


/*Output
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4
*/
let index = 10;
let jump = 2;
let end4 = 0;

for (i=index;i>end4;i+=jump) {
    if(i===jump+jump){
        break;
    }
    console.log(i)
}

/* Output
10
8
6
4
*/
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

number=letter.length
for(i=0;i<friends.length;i++){
    if(friends[i].startsWith(letter.toUpperCase())){
continue;
}
console.log(`"${number}=>${friends[i]}"`)
number++
}
/* Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"*/

let start4 = 0;
let swappedName = "elZerO";
let result="";

for(i=start4;i<swappedName.length;i++){
    if(swappedName[i]===swappedName[i].toLowerCase()){
    result += swappedName[i].toUpperCase();}
    else if(swappedName[i]===swappedName[i].toUpperCase()){
    result += swappedName[i].toLowerCase();
    }
}
console.log(result)

// Output
//"ELzERo"
let start5 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for(i = start5 + mix.indexOf(2); i < mix.length; i++){
    if(typeof mix[i] === "string"){
    continue;
}
console.log(mix[i])
}
/*Output
2
3
4*/

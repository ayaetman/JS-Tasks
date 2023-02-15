let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while(index<friends.length){
    if(typeof friends[index]==="number" || friends[index].startsWith("A")){
        index ++;
        continue;
    }
    console.log(`${++counter}=> ${friends[index]}`);    
    index++
}
/* Output
"1 => Sayed"
"2 => Mahmoud"*/

/*
Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let showadmins =3;
let num =1;
document.write(`<div>We Have ${showadmins} Admins</div>`);

for(i=0;i<myAdmins.length;i++){
if (myAdmins[i]==="Stop"){
    break;
}

document.write(`<hr>`)
document.write(`<div>`);
document.write(`<div> The Admin for ${i+1} is ${myAdmins[i]}</div>`)
document.write(`<h3>Team Members:</h3>`);

for(j = 0; j < myEmployees.length; j++){ 
    // if (myEmployees[j][0] === myAdmins[i][0]){
    if(myEmployees[j].startsWith("A") && myAdmins[i].startsWith("A") ){
        document.write(`<p>-${num++} ${myEmployees[j]}</p>`)

    }
    else if(myEmployees[j].startsWith("O") && myAdmins[i].startsWith("O")){
        document.write(`<p>-${num++} ${myEmployees[j]}</p>`)
    }
    else if(myEmployees[j].startsWith("S") && myAdmins[i].startsWith("S")) 
{
    document.write(`<p>-${num++} ${myEmployees[j]}</p>`)

    }
}

document.write(`</div>`);

}
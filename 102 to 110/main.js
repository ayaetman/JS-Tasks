//1
// let promptMsg = prompt("Print Number From – To", "Example: 5-20");
// let prompNum = promptMsg.split("-").sort((a, b) => a - b);

// for(let i = +prompNum[0]; i <= prompNum[1]; i++){
//     let num = document.createElement("div");
//     num.textContent = i;
//     document.body.append(num);
// }

//2
// let parent = document.createElement("div");
// let heading = document.createElement("h1");
// let text = document.createElement("p");
// let btn = document.createElement("button");

// function popup(){
//     heading.textContent = "Welcome";
//     text.textContent = "Welcome To Alghanem Web Study";
//     btn.textContent = "X";

//     parent.append(heading, text, btn);
//     document.body.append(parent);

//     btn.addEventListener("click", function(){
//         btn.parentElement.remove();
//     });

//     document.body.style.cssText = "font-family: arial, Tahoma";
//     parent.style.cssText = "background-color: #eee; border: 1px solid #ccc; padding 20px; text-align: center; position: relative; width: 350px; height: 150px; margin: 20px auto;";
//     btn.style.cssText = "background-color: red; color: white; font-weight: bold; border: none; width: 30px; height: 30px; border-radius: 50%; position: absolute; top: -10px; right: -10px"
// }
// setTimeout(popup, 5000);

//3
// let div = document.querySelector("div");

// function countdown(){
//     div.innerHTML -= 1;
//     if(div.innerHTML === "0"){
//         clearInterval(counter);
//     }

// }

// let counter = setInterval(countdown, 1000);

//4
// let div2 = document.querySelector("div");

// function countdown(){
//     div2.innerHTML -= 1;
//     if(div2.innerHTML === "5"){
//         location.href = "https://elzero.org/";
//     }

// }

// let counter2 = setInterval(countdown, 1000);

// //5
let div3 = document.querySelector("div");
function countDown(){
    div3.innerHTML -= 1;
    if(div3.innerHTML === "5"){
        open(
            "https://elzero.org/",
            "_blank",
            "width = 400, height = 600, top = 200px, right = 200px"
        );
    }
if(div3.innerHTML==="0"){
    clearInterval(counter3)
}
}
let counter3 = setInterval(countDown, 1000);
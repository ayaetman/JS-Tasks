let p = document.getElementsByTagName("p")[0];
let div = document.querySelector(".our-element");
let startDiv = div.cloneNode();
let endDiv = div.cloneNode();

// remove paragraph
p.remove();

function addAttr (el, ind){
    el.className = ind.toLowerCase();
    el.title = `${ind} element`;
    el.setAttribute("data-value", ind);
    el.textContent = ind;
}
addAttr(startDiv, "Start");
addAttr(endDiv, "End");

// add div element

div.before(startDiv);
div.after(endDiv);
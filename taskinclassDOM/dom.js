let cardDiv = document.createElement("div");
cardDiv.classList.add("card", "text-center");
document.getElementById("cardDiv").appendChild(cardDiv);

let cardHeader = document.createElement("div");
cardHeader.classList.add("card-header");
cardDiv.appendChild(cardHeader);

let ul = document.createElement("ul");
ul.classList.add("nav", "nav-tabs", "card-header-tabs");

let li1 =document.createElement("li");
li1.classList.add("nav-item");
let a1=document.createElement("a");
a1.classList.add("nav-link","active");
a1.setAttribute("aria-current","true");
a1.setAttribute("href","#");
a1.textContent="Active";
li1.appendChild(a1);

let li2 =document.createElement("li");
li2.classList.add("nav-item");
let a2=document.createElement("a");
a2.classList.add("nav-link");
a2.setAttribute("href","#");
a2.textContent="Link";
li2.appendChild(a2);

let li3 =document.createElement("li");
li3.classList.add("nav-item");
let a3=document.createElement("a");
a3.classList.add("nav-link","disabled");
a3.setAttribute("aria-disabled","true");
a3.textContent="Disabled";
li3.appendChild(a3);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

cardHeader.appendChild(ul);

// 2ci div

let cardbodyDiv=document.createElement("div");
cardbodyDiv.classList.add("crad-body");

let addTit=document.createElement("h5");
addTit.classList.add("card-title");
addTit.textContent="Special title treatment";

let p = document.createElement("p");
p.classList.add("card-text");
p.textContent = "With supporting text below as a natural lead-in to additional content.";

let a4 = document.createElement("a");
a4.classList.add("btn", "btn-primary");
a4.setAttribute("href", "#");
a4.textContent = "Go somewhere";

cardbodyDiv.appendChild(p);
cardbodyDiv.appendChild(addTit);
cardbodyDiv.appendChild(a4);

cardDiv.appendChild(cardbodyDiv);

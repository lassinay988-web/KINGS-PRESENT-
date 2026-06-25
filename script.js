const grid =
document.getElementById("grid");

for(let i=1;i<=25;i++){

const cell =
document.createElement("div");

cell.className="cell";

cell.id="c"+i;

cell.innerHTML="🍽";

grid.appendChild(cell);

}

const stars =
document.getElementById("stars");

for(let i=0;i<150;i++){

const star =
document.createElement("div");

star.className="star";

star.style.left=
Math.random()*100+"%";

star.style.top=
Math.random()*100+"%";

star.style.animationDelay=
Math.random()*5+"s";

stars.appendChild(star);

}

function predict(){

document
.querySelectorAll(".cell")
.forEach(cell=>{

cell.classList
.remove("selected");

});

const loader =
document.getElementById("loader");

loader.style.display="block";

setTimeout(()=>{

loader.style.display="none";

let nb =
parseInt(
document.getElementById("nb").value
);

let result=[];

while(result.length<nb){

let n =
Math.floor(
Math.random()*25
)+1;

if(!result.includes(n)){

result.push(n);

}

}

result.forEach(n=>{

document
.getElementById("c"+n)
.classList
.add("selected");

});

},2000);

}

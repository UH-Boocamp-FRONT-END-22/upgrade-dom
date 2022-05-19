// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const newDiv = document.createElement("div");

document.body.appendChild(newDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const newDivP = document.createElement("div");
newDivP.innerHTML = "<p>Hola, soy un párrafo</p>";

document.body.appendChild(newDivP);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const newDivLoop = document.createElement("div");

for (let index = 0; index < 6; index++) {
  newDivLoop.innerHTML = "<p>Un párrafo entre muchos...</p>";
}

document.body.appendChild(newDivLoop);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const insertP = document.createElement("div");
insertP.innerHTML = "<p>Soy dinámico</p>";

document.body.appendChild(insertP);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2Insert = document.querySelector(".fn-insert-here");
h2Insert.innerHTMLarray
// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

let createUL = document.createElement("ul");

apps.forEach(aplicaciones => {
    let createLI = document.createElement("li");
    createLI.innerText = aplicaciones;
    createUL.appendChild(createLI);
});

document.body.appendChild(createUL);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let removeClass = document.querySelectorAll(".fn-remove-me");

let targetArray = Array.from(removeClass);

targetArray.forEach(borrar => {
    document.body.removeChild(borrar);
});

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

let beetwen = document.createElement("p");
beetwen.innerText = 'Voy en medio!';

document.body.insertBefore(beetwen, document.querySelectorAll("div")[1]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const insertClassDiv = document.querySelectorAll("div[class=fn-insert-here]");
const arrayInsertClassDiv = Array.from(insertClassDiv);

console.log(insertClassDiv);

arrayInsertClassDiv.forEach(insertar => {
  let inside = document.createElement('p');
  inside.innerText = "Voy dentro!";
  insertar.appendChild(inside);
});
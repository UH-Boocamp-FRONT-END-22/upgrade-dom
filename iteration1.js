// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

let clase = document.querySelector(".showme");

console.log(clase);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

let id = document.querySelector("#pillado");

console.log(id);

// 1.3 Usa querySelector para mostrar por consola todos los p

let todosP = document.querySelectorAll("p");

console.log(todosP);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

let pokemon = document.querySelectorAll(".pokemon");

console.log(pokemon);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe".

let testMe = document.querySelector('[data-function="testMe"]');

console.log(testMe);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".

let testMe2 = document.querySelectorAll('[data-function="testMe"]');

console.log(testMe2[2]);


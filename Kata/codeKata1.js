let nameCollecton = ["Armando","Alejandro","David", "Alejandra"];

console.log(nameCollecton);

let enumu = new Set([1,7,true,"Hola"]);

console.log(enumu);

console.log(enumu.has(true)); // 

console.log(nameCollecton[0]);

let mapeo = new Map([
    ["1","armando"],
    [2,"Alumno"]
]);

mapeo.set(1,"OpenWebinars"); //Fijate que aqui pongo el 1 numerico y no con String a la hora de actualizar el valor no sobreescribo nada sino que creo una nueva Key.
console.log(mapeo);

console.log(mapeo.get(2));

let objeto = {
    name : "Armando",
    surname : "Torres"
};

console.log(objeto.name);

let currentDate = new Date();

console.log(currentDate);

("Cadena de texto" instanceof String)
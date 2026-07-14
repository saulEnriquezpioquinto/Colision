/* Función que detecta colisión entre dos objetos circulares
function hayColision(objA, objB) {
  const dx = objB.x - objA.x; // diferencia en X
  const dy = objB.y - objA.y; // diferencia en Y
  const distancia = Math.sqrt(dx * dx + dy * dy); // fórmula de la distancia
  const sumaRadios = objA.radio + objB.radio; // suma de los radios
  return distancia <= sumaRadios; // true si hay colisión
}


const j1 = { x: 120, y: 80, radio: 20 };
const j2 = { x: 150, y: 100, radio: 25 };

const colision = hayColision(j1, j2);
console.log(colision); // true o false*/


const jugadorx = 120;
const jugadory = 80;
const radio = 20;

const jugadorx1 = 150;
const jugadory1 = 100;
const radio1 = 25;

const dx = jugadorx1 - jugadorx;
const dy = jugadory1 - jugadory;

const distancia = Math.sqrt(dx * dx + dy * dy);
const sumaradios = radio + radio1;

if (distancia <= sumaradios) {
console.log("hay colision");
}
else{
console.log("no hay colision");
}

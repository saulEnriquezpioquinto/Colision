/*esta son las declaraciones de las variables (const indica que es una
variable que no modifica su valor*/
const jugadorx = 120;
const jugadory = 80;
const radio = 20;

/*esta son las declaraciones de las variables (const indica que es una
variable que no modifica su valor*/
const jugadorx1 = 150;
const jugadory1 = 100;
const radio1 = 25;

/*aqui estas diciendo que  vas a tomar dx (distancia x) y 
dy( distancia y) y vas a rerstar los valores de cada una*/
const dx = jugadorx1 - jugadorx;
const dy = jugadory1 - jugadory;

/*aqui estas llamando la funcion de math.sqrt para realizar
las operaciones correspondientes como lo que es la raiz*/
const distancia = Math.sqrt(dx * dx + dy * dy);

/* en esta creas una variable llamada  sumaradios y 
le asignas como valor el resultado de la suma de los radios*/
const sumaradios = radio + radio1;

/*esta diciendo que si distancia es menor o igual 
a  la suma de los radios  hay colicion*/
if (distancia <= sumaradios) {
console.log("hay colision");
}
/*en esta estas diciendo que si no no hay colicion 
(esta diciendo que si distancia es mayor hay coliciion*/
else{
console.log("no hay colision");
}

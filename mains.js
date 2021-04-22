// ordenar una serie de 6 numeros ingerados para poder hacer un ordenamiento dependinedo del precio ;
 const numerosAOrdenar = [];


 class Precios {
    constructor(nombre, stock, precios){
        this.nombre = nombre;
        this.stock = stock;
        this.precios = precios;
    }
    

    }

    while (numerosAOrdenar.length < 4) {
        
        numerosAOrdenar.push(new Precios(prompt("ingrese el nombre del producto"),
          parseInt(prompt("ingrese la cantidad recibida ")),
           parseInt(prompt("ingrese el precio unitario"))))};
            
           numerosAOrdenar.sort((a, b) => {
            return a.precios - b.precios;
        });
             console.log(numerosAOrdenar);
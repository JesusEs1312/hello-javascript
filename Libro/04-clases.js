//Ejemplo de como se utilizan las clases en JavaScript
class Point {
    //El constructor es un método especial que se llama cuando se crea un objeto e inicializar nuevas instancias
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    //Metodo que calcula la distancia entre dos puntos
    distancia() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

//Instanciamos un objeto de la clase Point
let p = new Point(1, 1);//{x:1, y:1}
console.log(p.distancia());//1.41
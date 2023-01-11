class Circle {

    constructor() {
        this.radius = 1.0;
        this.color = "red";
    }

    //getter method for radius
    getradius() {
        console.log(`The radius of the circle: ${this.radius}`);
    }

    //setter method for radius
    setRadius(radius) {
        this.radius = radius.toFixed(1);
    }

    //getter method for color
    getColor() {
        console.log(`The color of the circle : ${this.color}`);
    }

    //setter method for color
    setColor(color) {
        this.color = color;
    }

    toString() {
        console.log(`Circle[radisus = ${this.radius} color = ${this.color}]`);
    }

    getArea() {
        console.log(`The area of the circle: ${(Math.PI * (this.radius ** 2)).toFixed(1)}`);
    }

    getCircumference() {
        console.log(this.radius);
        console.log(`The circumference of the circle: ${(2 * Math.PI * this.radius).toFixed(1)}`);
    }
}
//Instantiation
const circle_1 = new Circle();
console.log(circle_1);

circle_1.getradius();
circle_1.setRadius(5);
console.log(circle_1);

circle_1.getColor();
circle_1.setColor("blue");
console.log(circle_1);

circle_1.toString();
circle_1.getArea();
circle_1.getCircumference();
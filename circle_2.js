class Circle {
    constructor(radius) {
        this.radius = radius;
        this.color = "red";
    }

    //getter method for radius
    getRadius() {
        console.log(`The radius of the circle: ${this.radius}.`);
    }

    //setter method for radius
    setRadius(radi) {
        this.radius = radi;
    }

    //gettter method for color
    getColor() {
        console.log(`The color of the circle: ${this.color}`);
    }

    //setter method for color
    setColor(clr) {
        this.color = clr;
    }

    //toString
    toString() {
        console.log(`Circle[radius = ${this.radius}, color = ${this.color}]`);
    }

    //getArea
    getArea() {
        console.log(`Area of the circle: ${(Math.PI * (this.radius ** 2)).toFixed(1)}`);
    }
    ///getCircumference
    getCircumference() {
        console.log(`The circumference of the circle: ${ (2 * Math.PI * this.radius).toFixed(1)}`)
    }

}

//Instantiation
const circle_2 = new Circle(5);
console.log(circle_2);

circle_2.getRadius();
circle_2.setRadius(10);
console.log(circle_2);

circle_2.getColor();
circle_2.setColor("Green");
console.log(circle_2);

circle_2.toString();
circle_2.getArea();
circle_2.getCircumference();
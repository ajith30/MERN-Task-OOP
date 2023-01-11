class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    //getter methd for radius
    getRadius() {
        console.log(`The radius of the circle: ${this.radius}`);
    }

    //setter method for radius
    setRadius(radius) {
        this.radius = radius;
    }

    //getter method for color
    getColor() {
        console.log(`The color of the circle: ${this.color}`);
    }

    //setter method for color
    setColor(color) {
        this.color = color;
    } 

    //toString
    toString() {
        console.log(`Circle[radius = ${this.radius}, color = ${this.color}]`);
    }

    //gerArea
    getArea() {
        console.log(`The area of the circle is: ${(Math.PI * (this.radius ** 2)).toFixed(1)}`);
    }

    //getCircumference
    getCircumference() {
        console.log(`The circumference o the circle is: ${(2 * Math.PI * this.radius).toFixed(1)}`);
    }
}

//Instantiation
const circle_3 = new Circle(5,"blue");
console.log(circle_3);

circle_3.getRadius();
circle_3.setRadius(20);
console.log(circle_3);

circle_3.getColor();
circle_3.setColor("Yellow");
console.log(circle_3);

circle_3.toString();
circle_3.getArea();
circle_3.getCircumference();

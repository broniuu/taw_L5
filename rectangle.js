"use strict";
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(xDirection, yDirection) {
        this.x += xDirection;
        this.y += yDirection;
    }
}
class Rectangle {
    constructor(firstCorner, secondCorner, thirdCorner, fourthCorner) {
        this.firstCorner = firstCorner;
        this.secondCorner = secondCorner;
        this.thirdCorner = thirdCorner;
        this.fourthCorner = fourthCorner;
    }
    move(xDirection, yDirection) {
        this.firstCorner.move(xDirection, yDirection);
        this.secondCorner.move(xDirection, yDirection);
        this.fourthCorner.move(xDirection, yDirection);
        this.fourthCorner.move(xDirection, yDirection);
    }
    getAera() {
        let a = Math.sqrt(Math.pow(this.firstCorner.x - this.secondCorner.x, 2) + Math.pow(this.firstCorner.y - this.secondCorner.y, 2));
        let b = Math.sqrt(Math.pow(this.firstCorner.x - this.fourthCorner.x, 2) + Math.pow(this.fourthCorner.y - this.fourthCorner.y, 2));
        return a * b;
    }
}

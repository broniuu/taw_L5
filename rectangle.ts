class Point {
    constructor(public x: number, public y: number) {}
    move(xDirection: number, yDirection: number) : void {
        this.x += xDirection;
        this.y += yDirection;
    }
}

class Rectangle {
    constructor(public firstCorner: Point,
                public secondCorner: Point,
                public thirdCorner: Point,
                public fourthCorner: Point,) {}
    move(xDirection: number, yDirection: number) : void {
        this.firstCorner.move(xDirection, yDirection);
        this.secondCorner.move(xDirection, yDirection);
        this.fourthCorner.move(xDirection, yDirection);
        this.fourthCorner.move(xDirection, yDirection);
    }

    getAera() : number {
        let a = Math.sqrt(Math.pow(this.firstCorner.x - this.secondCorner.x,2) + Math.pow(this.firstCorner.y - this.secondCorner.y,2));
        let b = Math.sqrt(Math.pow(this.firstCorner.x - this.fourthCorner.x, 2) + Math.pow(this.fourthCorner.y - this.fourthCorner.y,2));
        return a * b;
    }
}

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width =width;
    }
    getS(){
        return this.width*this.height;
    }
    getP(){
        return (this.width + this.height)*2;
    }
}
let samplerec = new Rectangle(10,15);
var ctx = document.getElementById("rec").getContext("2d");
ctx.beginPath();
ctx.rect(10,20,samplerec.width,samplerec.height);
ctx.stroke();
alert("chiều dài: " +  samplerec.width + ", chiều rộng: " + samplerec.height + ", chu vi: " + samplerec.getP() + ", diện tích: " + samplerec.getS());
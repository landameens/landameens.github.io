document.querySelector('button').onclick = function() {
    alert('А это еще не готово! Надо подождать...');
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//прямоугольник
ctx.fillStyle = "rgba(245, 117, 224, 0.46)";
ctx.fillRect(150, 180, 140, 70)

//дуга
ctx.moveTo(150, 180);
ctx.arc(150, 180, 70, Math.PI, (Math.PI / 2), true);
ctx.fill();

//треугольник
ctx.beginPath();
ctx.moveTo(150, 40);
ctx.lineTo(220, 180);
ctx.lineTo(150, 180);
ctx.lineTo(150, 40);
ctx.fill();
ctx.closePath();

//оси
ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(150,0);
ctx.lineTo(150, 330);
ctx.moveTo(0, 180)
ctx.lineTo(330,180);
ctx.closePath();
ctx.stroke();

//засечки
ctx.beginPath();
ctx.moveTo(147, 40);
ctx.lineTo(153, 40);
ctx.stroke();

ctx.moveTo(147, 110);
ctx.lineTo(153, 110);
ctx.stroke();

ctx.moveTo(220, 177);
ctx.lineTo(220, 183);
ctx.stroke();

ctx.moveTo(290, 177);
ctx.lineTo(290, 183);
ctx.stroke();

ctx.moveTo(147, 250);
ctx.lineTo(153, 250);
ctx.stroke();

ctx.moveTo(147, 320);
ctx.lineTo(153, 320);
ctx.stroke();

ctx.moveTo(80, 177);
ctx.lineTo(80, 183);
ctx.stroke();

ctx.moveTo(10, 177);
ctx.lineTo(10, 183);
ctx.stroke();

ctx.moveTo(320, 175);
ctx.lineTo(330, 180);
ctx.lineTo(320, 185);
ctx.stroke();

ctx.moveTo(145, 10);
ctx.lineTo(150, 0);
ctx.lineTo(155, 10);
ctx.stroke()
ctx.closePath();

ctx.font = "15px Verdana";
ctx.strokeText("R/2", 210, 170);
ctx.strokeText("R/2", 70, 170);
ctx.strokeText("R/2", 160, 115);
ctx.strokeText("R/2", 160, 255);

ctx.strokeText("R", 285, 170);
ctx.strokeText("R", 5, 170);
ctx.strokeText("R", 160, 45);
ctx.strokeText("R", 160, 325);
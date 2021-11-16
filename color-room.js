// 화면 사이즈 맞추기
const body = document.querySelector('body');
document.body.clientWidth = window.innerWidth;
document.body.clientHeight = window.innerHeight;


// 공 튕기기
let stageWidth, stageHeight;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');


window.addEventListener('resize', resize.bind(), false);
resize();
function resize(){
    stageWidth = window.innerWidth;
    stageHeight = window.innerHeight;
    canvas.width = stageWidth;
    canvas.height = stageHeight;
}

class Ball{
    constructor(x, y, radius, speed, color){
        this.x = x;
        this.y = y;
        this.vx = speed;
        this.vy = speed;
        this.radius = radius;
        this.color = color;

        this.draw();
    }
    draw(){
        const minX = this.radius;
        const maxX = stageWidth - this.radius;
        const minY = this.radius;
        const maxY = stageHeight - this.radius;

        if(this.x<=minX || this.x>=maxX){
            if((this.x-this.vx)>=maxX){
                this.x = maxX;
            }else if((this.x-this.vx)<=minX){
                this.x = minX;
            }
            this.vx *= -1;
            this.x += this.vx;
        }else if(this.y<=minY || this.y>=maxY){
            if((this.y-this.vy)>=maxY){
                this.y = maxY;
            }else if((this.y-this.vy)<=minY){
                this.y = minY;
            }
            this.vy *= -1;
            this.y += this.vy;
        }else{
            this.x += this.vx;
            this.y += this.vy;
        }

        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, Math.PI*2, false);
        ctx.fill();
    }
}

let boxes = [];

function render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i=0; i<20; i++){
        boxes[i].draw();
    }
    requestAnimationFrame(render);
}

let tempX, tempY, tempRadius, tempSpeed, tempColor;
for(let i=0; i<20; i++){
    tempRadius = Math.random() * 20 + 20;
    tempX = Math.random() * stageWidth;
    tempY = Math.random() * stageHeight;
    tempSpeed = Math.random() * 1 + 1.5;
    tempColor = colors[i]+"CC";
    boxes.push(new Ball(tempX, tempY, tempRadius, tempSpeed, tempColor));
}

render();

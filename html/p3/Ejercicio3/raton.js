window.addEventListener('load', ()=>{
    resize(); //Cambia el tamaño al cargar la pantalla
    document.addEventListener('mousedown', starDrawing);
    document.addEventListener('mouseup', stopDrawing);
    document.addEventListener('mousemove', draw);
    window.addEventListener('resize', resize);
});

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

function resize(){
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    console.log(ctx.canvas.height);
}

let coord = {x:0, y:0};
let paint = false;

function getPosition(event){
    coord.x = event.clientX - canvas.offsetLeft;
    coord.y = event.clientY - canvas.offsetTop;
    console.log(coord);
}

function starDrawing(event){
    paint = true;
    getPosition(event);
}

function stopDrawing(){
    paint = false;
}

function draw(event){
    if(!paint) return;
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.moveTo(coord.x, coord.y);
    getPosition(event);
    ctx.lineTo(coord.x, coord.y);
    ctx.stroke();
};


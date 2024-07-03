//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"


const xMid = 400;
const yMid = 300;

function star(ctx, x, y){
    ctx.fillStyle = 'white'
    ctx.beginPath();
    ctx.arc(x, y, 3,0, 2*Math.PI)
    ctx.fill();
}

function ufoDots(ctx, xMid, yMid, x, xmove) {
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(xMid + x + xmove, yMid - 20, 7, 0, 2 * Math.PI);
    ctx.fill();
}

function ufo(ctx, xmove, beam) {

    for(let i = 0; i < 40; i++){
        let xrand = Math.floor(Math.random() * 800)
        let yrand = Math.floor(Math.random() * 600)
        star(ctx, xrand, yrand);
    }


    ctx.fillStyle = 'grey';
    ctx.beginPath();
    ctx.moveTo(300 + xmove, yMid);
    ctx.quadraticCurveTo(300 + xmove, yMid - 30, 350 + xmove, yMid - 40);
    ctx.lineTo(450 + xmove, yMid - 40);
    ctx.quadraticCurveTo(500 + xmove, yMid - 30, 500 + xmove, yMid);
    ctx.fill();

    if(beam == 300)
        ctx.fillStyle = 'red';
    else
        ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.moveTo(380 + xmove, yMid);
    ctx.lineTo(420 + xmove, yMid);
    ctx.lineTo(440 + xmove + (1/5 * beam), 300 + beam);
    ctx.lineTo(360 + xmove - (1/5 * beam), 300 + beam);
    ctx.fill();
    console.log(beam)

    ctx.fillStyle = 'lightblue';
    ctx.beginPath();
    ctx.arc(xMid + xmove, yMid - 40, 50, 0, Math.PI, true);
    ctx.fill();

    ufoDots(ctx, xMid, yMid, 0, xmove);
    ufoDots(ctx, xMid, yMid, 35, xmove);
    ufoDots(ctx, xMid, yMid, 70, xmove);
    ufoDots(ctx, xMid, yMid, -35, xmove);
    ufoDots(ctx, xMid, yMid, -70, xmove);
}

function render() {
    let c = document.querySelector("canvas");
    let xmove = parseInt(document.getElementById('x').value, 10);
    let beam = document.getElementById('beam').value
    beam = parseInt(beam)
    if (c.getContext) {
        let ctx = c.getContext('2d');
        ctx.clearRect(0, 0, 800, 600);
        ufo(ctx, xmove, beam);
    } else {
        document.write("There was an error with your canvas");
    }
}



document.body.onload = render;
document.getElementById('x').oninput = render;
document.getElementById('beam').oninput = render

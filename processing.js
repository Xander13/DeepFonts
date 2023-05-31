/*
 * Name: Alex Kauffman
 * Version: 0.1
 * Breif: P5 Js will recrate the visual images of the fonts using particles 
 * that are assigned by arrray of dots.
 */

let bubbles = [];
let saveButton = document.getElementById('saveButton');
var cnv;
let canvasDiv = document.getElementById('fontCanvas');
let width = canvasDiv.clientWidth;
let height = canvasDiv.clientHeight;

function setup() {
    //setting up the canvas match to the screen size of the deep font window size
    cnv = createCanvas(width, height);
    cnv.parent('fontCanvas');

    //create bubbles from Bubble class
    for(let i = 0; i < 1800; i++){
        bubbles[i] = new Bubble(random(0, width),random(0, height),4);
    }
}

//When user press keys on keybard, particles does its job.
function keyTyped(){
    //creates the circle shape particles
    if(key === 'c'){
        updatePartciles()
    }

    //Reset the array manipulation 
    if(key === 'r'){
        console.log("C key is activated, array has been reset");
    }
}


//Tell each of the ellipse to be assgined to a place on canvas
function updatePartciles() {
    console.log('C key is activated, circle shape is shown.');
    
    //Does a for loop of the arry arpticles and assign them to a place on the cnvas
    for(var j = 0; j < bubbles.length; j++){
        
    }
}

function draw() {
    background('#ecf0f1');
    for(let i = 0; i < 1800; i++){
        bubbles[i].move();
        bubbles[i].show();
    }
}


//resize window inner width and height so particles stays in the canvas window
function windowResized(){
    cnv.resizeCanvas(width, height);
}


class Bubble{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move(){
        this.x = this.x + random(-1,1);
        this.y = this.y + random(-1,1);
    }

    show(){
        noStroke();
        fill('#00f');
        ellipse(this.x,this.y, this.r);
    }
}


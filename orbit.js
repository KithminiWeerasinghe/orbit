"use strict";
function setup(){
    createCanvas(1000,600);
}

let planetD = 40;
let moond = planetD/2;
let angle1 = 0; //yellow moon
let angle2 = 0; //white moon
let angle3 = 0; //red moon

function draw(){
    background(0);
    angleMode(DEGREES);

    let centerX = width/2
    let centerY = height/2

    let radiusX1 = 300 //yellow moon
    let radiusY1 = 50
    let X1 = centerX + radiusX1 * cos(angle1);
    let Y1 = centerY + radiusY1 * sin(angle1);

    let radiusX2 = 100//white moon
    let radiusY2 = 250
    let X2 = centerX + radiusX2 * cos(angle2)
    let Y2 = centerY + radiusY2 * sin(angle2)

    noStroke()//planet
    fill(255, 255, 255);
    arc(centerX, centerY, planetD, planetD, angle1 + 270, angle1 + 90);
    fill(120, 120, 120);
    arc(centerX, centerY, planetD, planetD, angle1 + 90, angle1 + 270);


    fill(255, 255, 0); //yellow moon
    ellipse(X1, Y1, moond, moond);

    angle1+=2;

    noFill(); //yellow moon elliptic track
    stroke(255, 255, 0);
    strokeWeight(2);
    ellipse(centerX, centerY, radiusX1 * 2, radiusY1 * 2);

    fill(255, 255, 255); // white moon
    noStroke();
    ellipse(X2, Y2, moond, moond);

    angle2+=3;

    noFill(); //white moon elliptic track
    stroke(255, 255, 255);
    ellipse(centerX, centerY, radiusX2 * 2, radiusY2 * 2);

    let centerX3 = X2 //red moon
    let centerY3 = Y2
    let radius = 50
    let X3 = centerX3 + radius * cos(angle3)
    let Y3 = centerY3 + radius * sin(angle3)

    fill(255, 0, 0);
    noStroke();
    ellipse (X3, Y3, planetD/3);

    angle3+=3

    noFill();
    stroke(255, 0, 0);
    ellipse(X2, Y2, radius * 2, radius * 2);

    let dy = dist(centerX, centerY, X1, Y1) //distance from the center of the planet to the yellow moon
    let dw = dist(centerX, centerY, X2, Y2) //distance from the center of the planet to the white moon

    if(dy < dw) {
        fill(255, 255, 0);
        noStroke();
       
    } else {
        fill(255, 255, 255);
        noStroke();
    }

    ellipse(centerX, centerY, planetD/3);



}

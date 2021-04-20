canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 100;
car1_height = 90;
car1_x = 10;
car1_y = 10;
car1_image = "car1.png";

background_image = "road.webp";

function add() {
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;
    car1_imageTag = new Image();
    car1_imageTag.onload = uploadcar1;
    car1_imageTag.src = car1_image;
}

function uploadBackground() {
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1() {
    ctx.drawImage(car1_imageTag, car1_x, car1_y, car1_width, car1_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed); 
    if (keyPressed == '38') { up(); console.log("up"); }
    if (keyPressed == '40') { down(); console.log("down"); }
    if (keyPressed == '37') { left(); console.log("left"); }
    if (keyPressed == '39') { right(); console.log("right"); }
}

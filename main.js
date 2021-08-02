canvas=document.getElementById("mars");

 ctx=canvas.getContext("2d");

 x=20;

 y=30;

 width=100;

 height=100;

 mars_pics=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

 randomno= Math.floor (Math.random() * 5 );

 backgroundImg=mars_pics[randomno];
 
 roverImg="rover.png";
function add(){
 backgroundTag = new Image();
 backgroundTag.onload = uploadbackground;
 backgroundTag.src =  backgroundImg;

 roverTag = new Image();
 roverTag.onload = uploadrover;
 roverTag.src =  roverImg;
}

function uploadbackground() {
    ctx.drawImage(backgroundTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(roverTag, x, y,width,height);
}

window.addEventListener("keydown", mykeydown);
function mykeydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == 38){

        up();
        console.log("up")
    }

    if(keyPressed == 40){
  
        down();
        console.log("down")
    }

    if(keyPressed == 37){

        left();
        console.log("left ")
    }

    if(keyPressed == 39){

        right();
        console.log("right")
    }

}

function up()
{

    if(y >= 0)

    {
        y-=10;
        console.log("When up arrow is pressed = " + x + "-" +y);
        uploadbackground();
        uploadrover();
    }
}
 
function down()
{

    if(y <= 400)

    {
        y+=10;
        console.log("When down arrow is pressed, = " + x + "-" +y);
        uploadbackground();
        uploadrover();
    }
}

function left()
{

    if(x >= 0)

    {
        x-=10;
        console.log("When left arrow is pressed = " + x + "-" +y);
        uploadbackground();
        uploadrover();
    }
}

function right()
{

    if(x <= 600)

    {
        x+=10;
        console.log("When right arrow is pressed = " + x + "-" +y);
        uploadbackground();
        uploadrover();
    }
}
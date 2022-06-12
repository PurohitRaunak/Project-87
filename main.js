
var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img)
	{
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:block_y,
	left:block_x
	});
	canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '49') 
	{
		block_x = 0;
		new_image('rr1.png');
		console.log("1");
	}
	if(keyPressed == '50')
	{
		block_x = 220;
		new_image('gr.png');
		console.log("2");
	}
	
	if(keyPressed == '51')
	{
		block_x =370;
		new_image('yr.png');
		console.log("3");
	}
	if(keyPressed == '52')
	{
		block_x = 620;
		new_image('pr.png');
		console.log("4");
	}
	if(keyPressed == '53')
	{
		block_x = 710;
		new_image('br.png');
		console.log("5");
	}
	
}


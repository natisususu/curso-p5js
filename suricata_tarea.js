var texto='LA PLANTA ABIERTA';
var fuente;
//repeat=10
//var tamano=80;

 function preload(){ //función preload para cargar objetos previo a ejecutar setup (función asíncrona)
  fuente = loadFont('./assets/BebasNeue Book.ttf');
 }

function setup(){
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100, 1);
 
}

function draw() {
	background(168, 76, 62, 1);
	translate(width/2, height/2);
  strokeWeight(mouseX / 10);
  fill(map(mouseX, 0, width, 0, 360),360, map(mouseY, 0, height, 0, 360));
	//textSize(tamano);
  textSize(12 + (mouseX / width)*72);
  //text(texto, 0, 0);
  
  for (var i=0; i<width/30; i++) {
  rotate(HALF_PI);
    text(texto, mouseX/5, mouseY/5);
    //textSize(repeat*i);
  fill(map(mouseX, 0, width, 0, 360),360, map(mouseY, 0, height, 0, 360));
  
  
	}
}


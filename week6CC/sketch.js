

function setup(){
  createCanvas(800,800)
}

function draw(){
  background('black')
  setCenter(width/2, height/2);
  
  fill('#fff9bd')
  noStroke()
  polarEllipses(6,50,50,100)
  
  push()
  translate(10,10)
  rotate(frameCount/70)
  fill('#ffd678')
  polarEllipses(6,30,30,120)
  
  pop()
  rotate(frameCount*0.001)
  fill('#ff9e42')
  polarTriangles(12, 40, 200);
  
  rotate(frameCount*0.005)
  fill('#F00505')
  polarSquares(12,20,260)
  
  fill('#f75939')
  polarEllipses(12,20,20,200)
  
  
  rotate(frameCount*0.01)
  fill('white')
  polarEllipses(12,5,5,260)
  
}
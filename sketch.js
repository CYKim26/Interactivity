let ball = {}

function setup() {
  createCanvas(400, 400);
  ellipseMode(RADIUS)
  ball = createBall()
  ball2 = createBall()
  noStroke() 
}

function draw() {
  background(0)
  updateBall(ball)
  updateBall(ball2)
  ballInteraction(ball,ball2)
  }
  
function createBall() {
  let newBall = {}
  newBall.r = random(10,20)
  setRandomPosition(newBall)
  setRandomVelocity(newBall)
  
  newBall.c = createRandomColor() 
  return newBall
}

function setRandomPosition( b, xMin = b.r, yMin = b.r, xMax = width-b.r, yMax = height-b.r) {
  b.x = random(xMin, xMax)
  b.y = random(yMin, yMax)  
}

function setRandomVelocity(b) {
  b.dx = random(-3,3)
  b.dy = random(-3,3)  
}

function createRandomColor() {
    return color(random(255),random(255),random(255))
}

function ballInteraction(b,b2){
  if(dist(b.x,b.y,b2.x,b2.y) < b.r + b2.r){
    [b.dx,b.dy,b2.dx,b2.dy] = [b2.dx,b2.dy,b.dx,b.dy] 
        
    let centervec = [(b2.x - b.x), (b2.y - b.y)]
    let vecmag = sqrt((b2.x - b.x)**2 + (b2.y - b.y)**2)
    
    let moveamount = 7
    
    centervec[0] /= vecmag / moveamount
    centervec[1] /= vecmag / moveamount

    b.x -= centervec[0]
    b.y -= centervec[1]
    b2.x += centervec[0]
    b2.y += centervec[1]
    
    b.r += 7
    b2.r += 7
  }
}

function updateBall(b) {
  fill(b.c)
  circle(b.x,b.y,b.r)
  b.x += b.dx 
  b.y += b.dy
  if( b.x < b.r || b.x > width- b.r) {
    b.dx *= -1
  }
  if( b.y < b.r || b.y > height - b.r ) {
    b.dy *= -1
  }
}





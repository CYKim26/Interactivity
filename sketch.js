let ax, ay, ar, adx, ady
let bx, by, br, bdx, bdy
let r, g, b
let axdir
let aydir
let bxdir
let bydir

function setup() {
  createCanvas(400, 400);
  ellipseMode(RADIUS)
 
  ar = random(15,25)
  ax = random(ar,width-ar)
  ay = random(ar,height-ar)
  adx = random(-3,3)
  ady = random(-3,3)
  axdir = -1
  aydir = -1
  
  br = random(15,25)
  bx = random(br,width-br)
  by = random(br,height-br)
  bdx = random(-3,3)
  bdy = random(-3,3)
  bxdir = -1
  bydir = -1

  teledist = (ar + br) - dist(ax, ay, bx, by)

  acr = random(255)
  acg = random(255)
  acb = random(255)
  
  bcr = random(255)
  bcg = random(255)
  bcb = random(255)
    
  noStroke()
}

function draw() {
  background(0);
  
  fill(color(acr,acg,acb))
  circle(ax,ay,ar)
  ax += adx * axdir
  ay += ady * aydir
  if(ax < ar || ax > width-ar) {
    axdir *= -1
    acr = random(255)
    acg = random(255)
    acb = random(255)
  
  }
  if(ay < ar || ay > height-ar) {
    aydir *= -1
    acr = random(255)
    acg = random(255)
    acb = random(255)
  
  }
  
  fill(color(bcr,bcg,bcb))
  circle(bx,by,br)
  bx += bdx * bxdir
  by += bdy * bydir
  if(bx < br || bx > width-br) {
    bxdir *= -1
    bcr = random(255)
    bcg = random(255)
    bcb = random(255)
  
  }
  if(by < br || by > height-br) {
    bydir *= -1
    bcr = random(255)
    bcg = random(255)
    bcb = random(255)
  
  }
  
  if(dist(ax,ay,bx,by) < ar + br){
    [adx,ady,bdx,bdy] = [bdx,bdy,adx,ady] 
        
    let centervec = [(bx - ax), (by - ay)]
    let vecmag = sqrt((bx - ax)**2 + (by - ay)**2)
    
    let moveamount = 7
    
    centervec[0] /= vecmag / moveamount
    centervec[1] /= vecmag / moveamount

    ax -= centervec[0]
    ay -= centervec[1]
    bx += centervec[0]
    by += centervec[1]
    
    ar += 3
    br += 3
  }
  
}
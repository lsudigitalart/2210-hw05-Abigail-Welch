
//based on Wall Drawing 1186

    let dotx1 = 0
    let doty1 = 0
    let dotx2 = 0
    let doty2 = 0
    let dotx3 = 0
    let doty3 = 0
    let dotx4 = 0
    let doty4 = 0

    function setup() {
      createCanvas(600, 400);
      background(225);
      
    }
    
    function draw() {
      
      push ();
      scale (4)
      noStroke(0);
      fill (0);
      ellipse (dotx1, doty1, 4, 10);
      dotx1 = random(0,63);
      doty1 = random (0, width);
      pop ();

      push ();
      noStroke(0);
      fill (255)
      rotate (0.05);
      ellipse (dotx2, doty2, 10, 16);
      dotx2 = random(200,420);
      doty2 = random (-10, 700);
      pop ();

      push ();
      scale (4)
      noStroke(0);
      fill (0);
      ellipse (dotx3, doty3, 4, 10);
      dotx3 = random(90,200);
      doty3 = random (0, width);
      pop ();

      noStroke(0);
      fill (255)
      ellipse (dotx4, doty4, 4, 8);
      dotx4 = random(170,450);
      doty4 = random (0, width);
      
      frameRate (1000);
    
    
    }

    
    
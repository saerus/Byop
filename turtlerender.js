class TurtleRenderer {
  constructor() {
    this.lengthF = 300;
    this.lengthG = 150;
    this.lengthH = 20;
    this.lengthI = 50;
    this.rot = PI/20;
  }
  //
  render(sentence) {
    console.log("render");
    //console.log(sentence);
    //
    this.i = 0;
    this.angle = -PI/2;
    this.a = createVector(width/2, height);
    this.b = createVector(width/2, height);
    this.saved = [];
    //
    // push();
    // translate(width/2, height);
    // rotate(-PI/2);
    // stroke(0);
    // for (var i = 0; i < sentence.length; i++) {
    //
    //   //console.log("III: "+i);
    // }
    //this.iterate(0, sentence);
    // pop();
    clearInterval(this.interval);
    var that = this;
    this.interval = setInterval(function() {
      //console.log("s");
      for(var j=0; j<1000; j++) {
        that.iterateStandard(sentence);
      }
    }, 1);
  }
  iterateStandard(sentence) {
    if(this.i == 0) {
      resetMatrix();
      translate(width/2, height);
      rotate(-PI/2);
    }
    if(this.i < sentence.length) {
      var c = sentence.charAt(this.i);
      //console.log("----------: "+c);
      if (c == 'F') {
        this.branchStandard(this.lengthF, imgF);
        //line(0, 0, this.lengthF, 0);
        //translate(this.lengthF, 0);
      } else if (c == 'G') {
        this.branchStandard(this.lengthG, imgG);
        // line(0, 0, this.lengthG, 0);
        // translate(this.lengthG, 0);
      } else if (c == 'H') {
        this.branchStandard(this.lengthH, imgH);
        // line(0, 0, this.lengthH, 0);
        // translate(this.lengthH, 0);
      } else if (c == 'I') {
        this.branchStandard(this.lengthI, imgI);
        // line(0, 0, this.lengthI, 0);
        // translate(this.lengthI, 0);
      } else if (c == '+') {
        rotate(this.rot);
      } else if (c == '-') {
        rotate(-this.rot);
      } else if (c == '[') {
        push();
      } else if (c == ']') {
        pop();
      }
      //
      var that = this;
      this.i++;
      //console.log("relaunch");
      //setTimeout(that.iterate(i+1, sentence), 100000);
    } else {
      console.log("done");
      clearInterval(this.interval);
    }
  }
  iterate(sentence) {
    //console.log("iterate "+this.i+" / "+sentence.length);
    if(this.i < sentence.length) {
      var c = sentence.charAt(this.i);
      //console.log("----------: "+c);
      if (c == 'F') {
        this.branch(this.lengthF, tige);
        //line(0, 0, this.lengthF, 0);
        //translate(this.lengthF, 0);
      } else if (c == 'G') {
        this.branch(this.lengthG, tige);
        // line(0, 0, this.lengthG, 0);
        // translate(this.lengthG, 0);
      } else if (c == 'H') {
        this.branch(this.lengthH, feuille);
        // line(0, 0, this.lengthH, 0);
        // translate(this.lengthH, 0);
      } else if (c == 'I') {
        this.branch(this.lengthI, feuille);
        // line(0, 0, this.lengthI, 0);
        // translate(this.lengthI, 0);
      } else if (c == '+') {
        this.angle += this.rot;
        // rotate(this.angle);
      } else if (c == '-') {
        this.angle -= this.rot;
        // rotate(-this.angle);
      } else if (c == '[') {
        this.customPush();
      } else if (c == ']') {
        this.customPop();
      }
      //
      var that = this;
      this.i++;
      //console.log("relaunch");
      //setTimeout(that.iterate(i+1, sentence), 100000);
    } else {
      console.log("done");
      clearInterval(this.interval);
    }
  }
  branchStandard(length, img) {
    //line(0, 0, length, 0);
    scale(0.9);
    image(img, 0, -length/2, length, length);
    translate(length, 0);
  }
  branch(length, img) {
    this.b.x = this.a.x+cos(this.angle)*length;
    this.b.y = this.a.y+sin(this.angle)*length;
    line(this.a.x, this.a.y, this.b.x, this.b.y);
    image(img, this.a.x, this.a.y, 10, 10);
    this.a.x = this.b.x;
    this.a.y = this.b.y;
  }
  customPop() {
    var popped = this.saved.pop();
    // console.log("pop");
    //console.log(popped);
    // console.log(this.saved);
    this.a.x = popped.pos.x;
    this.a.y = popped.pos.y;
    this.angle = 0+popped.angle;
    // this.saved.pop();
    // console.log(this.saved.length);
  }
  customPush() {
    // console.log("push");
    this.saved.push({pos: createVector(this.a.x, this.a.y), angle: 0+this.angle});
    //console.log(this.saved);
    // console.log(this.saved.length);
  }
}

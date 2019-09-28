class TurtleRenderer {
  constructor() {
    this.lengthF = 10;
    this.lengthG = 10;
    this.lengthH = 10;
    this.lengthI = 10;
    this.angle = PI/20;
    this.a = 0;
    this.p = createVector(0, 0);
  }
  //
  render(sentence) {
    push();
    translate(width/2, height);
    rotate(-PI/2);
    stroke(0);
    for (var i = 0; i < sentence.length; i++) {
      var c = sentence.charAt(i);
      if (c == 'F') {
        line(0, 0, this.lengthF, 0);
        translate(this.lengthF, 0);
      } else if (c == 'G') {
        line(0, 0, this.lengthG, 0);
        translate(this.lengthG, 0);
      } else if (c == 'H') {
        line(0, 0, this.lengthH, 0);
        translate(this.lengthH, 0);
      } else if (c == 'I') {
        line(0, 0, this.lengthI, 0);
        translate(this.lengthI, 0);
      } else if (c == '+') {
        rotate(this.angle);
      } else if (c == '-') {
        rotate(-this.angle);
      } else if (c == '[') {
        push();
      } else if (c == ']') {
        pop();
      }
    }
    pop();
  }
}

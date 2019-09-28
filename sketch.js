var lsystem;
//
var rules = [];
var turtle;
var qtt = 2;
var tige;
var feuille;
//
function preload() {
  tige = loadImage('srces/tube2.png');
  feuille = loadImage('srces/cone.png');
    //console.log(tige);
}
function setup() {
  var x = [];
  x.push({a: "a", b: "b"});
  x.push({a: "asdfsdf", b: "b"});
  x.push({a: "a", b: "b"});
  x.push({a: "asdf", b: "b"});
  x.push({a: "sa", b: "b"});
  x.push({a: "a", b: "bsfa"});
  x.pop();
  console.log(x);
  console.log("sadgfdhd");
  //
  createCanvas(windowWidth, windowHeight);
  turtle = new TurtleRenderer();
  rSlider = createSlider(0, 255, 100);
  // CONTROLS
  document.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
      render();
    }
  });
  document.querySelector("#lengthF").addEventListener("input", function(e) {
    turtle.lengthF = this.value;
    render();
  });
  document.querySelector("#lengthG").addEventListener("input", function(e) {
    turtle.lengthG = this.value;
    render();
  });
  document.querySelector("#lengthH").addEventListener("input", function(e) {
    turtle.lengthH = this.value;
    render();
  });
  document.querySelector("#lengthI").addEventListener("input", function(e) {
    turtle.lengthI = this.value;
    render();
  });
  document.querySelector("#qtt").addEventListener("input", function(e) {
    qtt = this.value;
    render();
  });
  //
  render();
}
function render() {
  background(255);
  //
  var ruleF = document.querySelector("#ruleF").value;
  var ruleG = document.querySelector("#ruleG").value;
  var ruleH = document.querySelector("#ruleH").value;
  var ruleI = document.querySelector("#ruleI").value;
  //console.log(ruleF);
  //
  rules = [];
  if(ruleF) {
    rules.push(new Rule("F", ruleF));
  }
  if(ruleG) {
    rules.push(new Rule("G", ruleG));
  }
  if(ruleH) {
    rules.push(new Rule("H", ruleH));
  }
  if(ruleI) {
    rules.push(new Rule("I", ruleI));
  }
  //console.log(rules.length);
  var generated = "F";
  for(var i=0; i<qtt; i++) {
    generated = lSystemGenerate(rules, generated);
  }
  //console.log(generated);
  turtle.render(generated);
}

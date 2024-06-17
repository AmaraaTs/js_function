let a = 10;
let b = 20;

function hevle() {
  console.log("2 toonii niilber: ", a + b);
}

function hevle2(too1, too2) {
  console.log("2 toonii niilber: ", too1 + too2);
}

console.log("functions");
hevle();
hevle2(11, 33);

function nemeh(x, y) {
  return x + y;
}
let sum = nemeh(15, 15);
console.log("nemeh: ", sum);

function hasah(x, y) {
  return x - y;
}
let has = hasah(15, 15);
console.log("hasah: ", has);

function vrjih(x, y) {
  return x * y;
}
let vrj = vrjih(15, 15);
console.log("vrjih: ", vrj);

// declaration - function iig zarlaj hereglej bn
function huwaah(x, y) {
  return x / y;
}
// let huwaa = huwaah(15, 15);
console.log("huwaah: ", huwaah(15, 14));

// expresstion - function iig zarlahgvi heregleh
let nogdwor = function (x, y) {
  return x / y;
};
nogdwor();

// ES6 => Arrow function
let square = (x) => {
  return x * x;
};
square();

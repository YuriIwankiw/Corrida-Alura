function setup() {
  createCanvas(500, 400);
}

let xJogador = [425, 425, 425, 425];
let yJogador = [80, 160, 240, 320];
let corredor = ["🏍", "🚜", "🏎", "🚂"];
let tecla = ["a", "u", "1", "9"];
let quantidade = corredor.length;

function keyReleased() {
  for (let i = 0; i < quantidade; i++) {
    if (key === tecla[i]) {
      xJogador[i] += -random(50);
    }
  }
}

function draw() {
  inicio();
  veiculos();
  linhaChegada();
  bandeiradaFinal();
}

function inicio() {
  if (focused == true) {
    background(220);
  } else {
    background("orange");
  }
}

function veiculos() {
  textSize(60);
  for (let i = 0; i < quantidade; i++)
  {
    text(corredor [i], xJogador[i], yJogador[i]);
  }
}

function linhaChegada() {
  fill("white");
  rect(40, 0, 10, 400);
  fill("black");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(40, yAtual, 10, 10);
  }
}

function bandeiradaFinal() {
  textSize(30);
  for (let i = 0; i < quantidade; i++) {
    if (xJogador[i] < 40) {
      text(corredor[i] + "venceu!", 125, 200);
      noLoop();
    }
  }
}
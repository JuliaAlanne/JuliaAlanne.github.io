  
let andarD= [ ]
let andarE=[ ]
let morrerD=[ ]
let morrerE=[ ]
let pararD=[ ]
let pararE=[ ]
let img;
var animacao = 0;

function preload {
        img = loadImage('img/livro.png');
    for (var i=0;i<=9;i++){
        andarD[i]= loadImage('img/run_direito/Run__00'+i+'.png');
        andarE[i]= loadImage('img/run_esquerdo/Runv__00'+i+'png');
        morrerD[i]= loadImage('img/dead_direito/Dead__00'+i+'png');
        morrerE[i]= loadImage('img/dead_esquerdo/Deadv__00'+i+'png');
        pararD[i]= loadImage('img/idle_direito/Idle__00'+i+'png');
        pararE[i]= loadImage('img/idle_esquerdo/Idlev__00'+i+'png');
    }

}

function animação() {
  
  if (animacao == 1) {
    for(var j=0; j<=9; j++) {
      image(andarD[j], x, y, 30,30);
    }
  } else {
      if (animacao == 2) {
        for(var j=0; j<=9; j++){
          image(andarE[j], x, y, 30,30);
        }
      } else {
          if (animacao == 3) {
            for (var j=0; j<=9; j++) {
              image(morrerD[j], x, y, 30,30);
            }
          } else {
              if (animacao == 4){
                for(var j=0; j<=9; j++){
                  image(morrerE[j], x, y, 30,30);
                }
              } else {
                  for(var j=0; j<=9; j++){
                  image(andarE[j], x, y, 30,30);
                  }
                  for(var j=0; j<=9; j++){
                  image(andarE[j], x, y, 30,30);
                  }
            }
        }  
    }
}

function menu() {

  background('#a1d391');
  image(img, 310, 300, 600, 200)
  
   
  fill('#ffc000');
  stroke('white');
  strokeWeight(1);
  rect(450, 100, 300, 55, 10);
  rect(450, 170, 300, 55, 10);
  rect(450, 240, 300, 55, 10);
  
  textSize(32);
  fill('white');
  
  text('Jogar', 560, 140);
  text('Regras', 560, 210);
  text('Sair', 560, 280);
  
  noFill();
  strokeWeight(1);
  rect(x_menu, y_menu, 310, 65,10);
}

function voltarMenu() {
  alert("vc é muito lerdo. perdeu otário!");
  tentativas=3;
  x=600;
  y=470;
  telaAtiva=0;
  return true;
}

function regras() {
   
  background('#a1d391');
   
  fill('white');
  stroke('black');
  strokeWeight(1);
  
  textSize(28);
  fill('black');
  
  text('regras ainda não importadas. pensando em carregar vídeo de gamaplay.', 40, 55);
}


function sair() {
   
  background('#7FDBFF');
   
  fill('white');
  stroke('black');
  strokeWeight(1);
  
  textSize(28);
  fill('black');
  
  text('saindo', 40, 55);
  window.close();
}



let map = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  
];

let boneco;

var x_menu = 445,
    y_menu = 95,
    x = 600,
    y = 470;

var bloco1=50,
    bloco2=500,
    bloco3=1100;
    b1=0,
    b2=0,
    b3=0;
var tentativas=3;
var opcoes = [0,1];
var tileSize=30;
var opcao = 1 
var telaAtiva = 0;
let img;
function preload() {
  img = loadImage('img/livro.png');
  boneco = loadImage('img/run_direito/Run__000.png');

  }
function setup() {
  createCanvas(1200, 540);
  
}

function draw() {

  
  switch(telaAtiva) {
    case 0:
      menu();
      break;
    case 1:
      jogar();
      break; 
    case 2:
      regras();
      break;  
    case 3:
      sair();
      break;
  }
}


function menu() {

  background('#a1d391');
  image(img, 480, 300, 400, 200)
  
   
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
  //stroke(255, 0, 0);
  strokeWeight(1);
  rect(x_menu, y_menu, 310, 65,10);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function jogar() {

   background(200);
  
  fill(250,250,250);
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] != 0) {
        rect(j * tileSize, i * tileSize, tileSize, tileSize);
      }
    }
  }
  
  if (keyIsDown(LEFT_ARROW) && !bateuNoMapa(x-5,y)) {   
    if (colisaoBloco(x,y)) {
       tentativas--;
       if (tentativas==0) {
        voltarMenu();
      }else{
        alert("restão: "+tentativas);
        x = 600;
        y = 470;
      }
        

    } x-=5;   
  }
   
  if (keyIsDown(RIGHT_ARROW) && !bateuNoMapa(x+5,y) ){ 
    if(colisaoBloco(x,y)){
      tentativas--;
      if (tentativas==0) {
        voltarMenu();
        }else{
         alert("restão: "+tentativas);
        x = 600;
        y = 470; 
        }
        
    } x+=5;   
  }

  if (keyIsDown(UP_ARROW) && !bateuNoMapa(x,y-5) ) {
    if(colisaoBloco(x,y)){
      tentativas--;
      if (tentativas==0) {
        voltarMenu();
        }else{
        alert("restão: "+tentativas);
        x = 600;
        y = 470;
        }
    } y-=5;
  }

  if (keyIsDown(DOWN_ARROW) && !bateuNoMapa(x,y+5) ){
    if(colisaoBloco(x,y)){
      tentativas--;
      if (tentativas==0) {
        alert("vc é muito lerdo. perdeu otário!")
        voltarMenu();
      }else{
        alert("restão: "+tentativas);
        x = 600;
        y = 470;
      }
    } y+=5;
  }
  if (colisaoBloco(x,y)) {
    tentativas--;
    if (tentativas==0) {
        alert("vc é muito lerdo. perdeu otário!")
        voltarMenu();
      }else{
        alert("restão: "+tentativas);
        x = 600;
        y = 470;
      }
        
  }


  if (bloco1<1150 && b1==0) {
    bloco1 = bloco1+5;
  } else{
      b1=1;
      bloco1=bloco1-5
      if (bloco1==30) {
        b1=0
      }
    }

  if (bloco2<1150 && b2==0) {
    bloco2 = bloco2+5;
  } else{
      b2=1;
      bloco2=bloco2-5
      if (bloco2==30) {
        b2=0
      }
    }

  if (bloco3<1150 && b3==0) {
    bloco3 = bloco3+5;
  } else{
      b3=1;
      bloco3=bloco3-5
      if (bloco3==30) {
        b3=0
      }
    }

  image(boneco, x, y, 30,30);
  fill(0, 0, 204);
  rect(bloco1, 390,20, 30);
  rect(bloco2, 330,20, 30);
  rect(bloco3, 270,20, 30);

 
  function bateuNoMapa(a, b) {
    let bateu=false; 
      for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
          if (map[i][j]==1 && colisaoMapa(a,b,j * tileSize,i * tileSize)){
            bateu=true;
            
          }
        }
      }
      return bateu;
  }
     

function colisaoMapa(x1,y1,x2,y2) {
  if(x1 > x2 + 25)
    return false;
  if(y1 > y2 + 25)
    return false;
  if(x1 + 25 < x2)
    return false;
  if(y1 + 25 < y2)
    return false;
  return true;
  
 }

 function colisaoBloco(a,b) {
    if ((bloco1+20==a || bloco1-20==a) && 390==b )
      return true;
    if ((bloco2+20==a || bloco2-20==a) && 330==b )
      return true;
    if ((bloco3+20==a || bloco3-20==a)&& 270==b )
      return true;
    return false;
 }
}


function regras() {
   
  background('#7FDBFF');
   
  fill('white');
  stroke('black');
  strokeWeight(1);
  
  textSize(28);
  fill('black');
  
  text('Aqui vao as regras', 40, 55);
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

function voltarMenu() {
  alert("vc é muito lerdo. perdeu otário!");
  tentativas=3;
  x=600;
  y=470;
  telaAtiva=0;
  return true;
}
function keyPressed() {
  console.log(keyCode);
  
  if (keyCode === ESCAPE)
    telaAtiva=0;
  
  if (keyCode === ENTER) 
    telaAtiva=opcao;
     
  if (keyCode === DOWN_ARROW) {
    if (y_menu<230) {
      y_menu+=70;
      if (opcao==1)
        opcao=2;
      else if (opcao==2)
          opcao=3; 
    } 
  } else if (keyCode === UP_ARROW) {
    if (y_menu>95) {
       y_menu-=70;
       if (opcao==2) {
         opcao=1;
       } else { 
          if (opcao==3) {
           opcao=2;
          }
         }
    }
   
    }
  console.log("opcao: "+opcao);
  console.log("telaAtiva: "+telaAtiva);
}



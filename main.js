// Dimensions
var w = $(window).width();
var h = $(window).height();

// Ball
var ball = $('.ball');
var posX = Math.random() * w;
var posY = Math.random() * h;

var maxVel = 10;
var velX = Math.random() * maxVel*2 - maxVel;
var velY = Math.random() * maxVel*2 - maxVel;

ball.css({
  'left': posX,
  'top': posY
});


//Buttons
var overeatingButton = $('.box box-1');
var healthyButton = $('.box box-2');
var junkfoodButton = $('.box box-3');
var overeatingtimesButton = $('.box box-4');
var healthytimesButton = $('.box box-5');
var junkfoodtimesButton = $('.box box-6');


// Score 

var overeatingtimesScore = 0;
var healthytimesScore = 0;
var junkfoodtimesScore = 0;
var overeatingScoreElement = $('.score-overeating');
var healthyScoreElement = $('.score-healthy');
var junkfoodScoreElement = $('.score-junkfood');


//choices


overeatingtimesButton.on('click', function(){
  
  overeatingScoreElement.text(overeatingtimesScore); 

});

  
  if(overeatingtimesButton){
    overeatingtimesScore += 1;
  }


function update() {
  checkBoundary();
  posX += velX;
  posY += velY;

  ball.css({
    'left': posX,
    'top': posY
  });

  requestAnimationFrame(update);
}

update();

function checkBoundary() {
  if (posX < 0) {
    velX *= -1;
    posX = 0;
  } else if (posX > w) {
    velX *= -1;
    posX = w;
  }

  if (posY < 0) {
    velY *= -1;
    posY = 0;
  } else if (posY > h) {
    velY *= -1;
    posY = h;
  }
}









		








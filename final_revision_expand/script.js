$(document).ready(function(){
    $(".pbutton").click(function(){
      $(".pink").show();
        $(".orange").show();
        $(".black").show();
        $(".blue").show();
        $(".yellow").show();
      $(".orange").toggle();
      $(".black").toggle();
      $(".blue").toggle();
      $(".yellow").toggle();
      $(".txt-1").toggle();
      $(".txt-2").hide();
      $(".txt-3").hide();
      $(".txt-4").hide();
      $(".txt-5").hide();
    });
  });

$(document).ready(function(){
    $(".obutton").click(function(){
        $(".pink").show();
        $(".orange").show();
        $(".black").show();
        $(".blue").show();
        $(".yellow").show();
        $(".pink").show();
        $(".orange").show();
        $(".black").show();
        $(".blue").show();
        $(".yellow").show();
        $(".pink").toggle();
        $(".black").toggle();
        $(".blue").toggle();
        $(".yellow").toggle();
        $(".txt-2").toggle();
        $(".txt-1").hide();
        $(".txt-3").hide();
        $(".txt-4").hide();
        $(".txt-5").hide();
    });
  });

$(document).ready(function(){
    $(".bkbutton").click(function(){
        $(".pink").show();
        $(".orange").show();
        $(".black").show();
        $(".blue").show();
        $(".yellow").show();
        $(".pink").toggle();
        $(".orange").toggle();
        $(".blue").toggle();
        $(".yellow").toggle();
        $(".txt-3").toggle();
        $(".txt-1").hide();
        $(".txt-2").hide();
        $(".txt-4").hide();
        $(".txt-5").hide();
    });
  });

$(document).ready(function(){
    $(".bbutton").click(function(){
        $(".pink").show();
        $(".orange").show();
        $(".black").show();
        $(".blue").show();
        $(".yellow").show();
        $(".pink").toggle();
        $(".orange").toggle();
        $(".black").toggle();
        $(".yellow").toggle();
        $(".txt-4").toggle();
        $(".txt-1").hide();
        $(".txt-2").hide();
        $(".txt-3").hide();
        $(".txt-5").hide();
    });
  });

$(document).ready(function(){
    $(".ybutton").click(function(){
        $(".pink").show();
        $(".orange").show();
        $(".black").show();
        $(".blue").show();
        $(".yellow").show();
        $(".pink").toggle();
        $(".orange").toggle();
        $(".black").toggle();
        $(".blue").toggle();;
        $(".txt-5").toggle();
        $(".txt-1").hide();
        $(".txt-2").hide();
        $(".txt-3").hide();
        $(".txt-4").hide();
    });
  });
  $(document).ready(function(){
    $(".all").click(function(){
        $(".pink").show();
        $(".orange").show();
        $(".black").show();
        $(".blue").show();
        $(".yellow").show();
        $(".txt-1").hide();
        $(".txt-2").hide();
        $(".txt-3").hide();
        $(".txt-4").hide();
        $(".txt-5").hide();
    });
  });

  $(document).ready(function(){
    $(".conversation").click(function(){
      $(".pink").show();
      $(".orange").show();
      $(".black").show();
      $(".blue").show();
      $(".yellow").show();
      $(".orange").toggle();
      $(".black").toggle();
      $(".blue").toggle();
      $(".yellow").toggle();
      $(".pink").toggle();
      $(".txt-1").hide();
      $(".txt-2").hide();
      $(".txt-3").hide();
      $(".txt-4").hide();
      $(".txt-5").hide();
    });
  });


var audone = new Audio();
audone.src = "station.mp3";
audone.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);

var p = document.getElementsByTagName('p');
// get window width and height
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

// i stands for "index". you could also call this banana or haircut. it's a variable
for ( var i=0; i < p.length; i++ ) {
 	
    // shortcut! the current div in the list
    var thisP = p[i];
    
    // get random numbers for each element
    randomTop = getRandomNumber(0, winHeight-100);
    randomLeft = getRandomNumber(0, winWidth * 4.23);
    
    // update top and left position
    thisP.style.top = randomTop +"px";
    thisP.style.left = randomLeft +"px";
    
}

// function that returns a random number between a min and max


function setup(){

  let v = createCapture(VIDEO);
  v.style('z-index','-1');
  v.style('position','fixed');
  v.style('margin-left', '-80px');
  v.style('margin-top', '-50px');
  v.size(1800,1300);
  v.style('scale', '-1,1');
 
let speechRec = new p5.SpeechRec('en-US', gotSpeech);
  
  let continuous = true;
  let interim = false;

  speechRec.start(continuous, interim);

  function gotSpeech(){
    if (speechRec.resultValue){
      var k = createP(speechRec.resultString);
      k.style('font-family', 'Courier new');
      k.style('border-radius', '20px');
      k.style('border', '2px');
      k.style('color', 'white');
      k.style('background-color', 'black');
      k.style('font-family', 'Courier new');
      k.style('border-style', 'solid');
      k.style('border-color', 'white');
      k.style('text-align', 'center');
      k.style('width', '250px');
      k.style('padding', '4px');
      k.style('z-index', '10');
      k.style('position', 'absolute');
      randomTop = getRandomNumber(0, winHeight-100);
      randomLeft = getRandomNumber(0, winWidth * 4.23);
      console.log(randomTop);
      k.style('top', randomTop +"px");
      k.style('left', randomLeft +"px");
      // k.style.top = randomTop +"px";
      // k.style.left = randomLeft +"px";
    }
  }   
}
function getRandomNumber(min, max) {
    
  return Math.random() * (max - min) + min;
    
}

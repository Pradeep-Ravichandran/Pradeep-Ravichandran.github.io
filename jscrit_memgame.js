var choices = [];
var tilevalues = [];
var tileids = [];
var matches = 0;
var tries = 0;

function start() {
  var elements = ["P", "R", "A", "D", "E", "C", "H", "M"];

  var j = 0;  //for looping use
  for (i = 0; i < 16; i = i + 2) {
    choices[i] = elements[j];
    choices[i + 1] = elements[j];
    j++;
  }
  choices.sort(function cal() {
    return 0.5 - Math.random()
  });
  document.getElementById("starts").innerHTML = "CLICK ON TILES TO PLAY!!";
}

function tile_1() {
  flip("tile1", choices[0]);
}

function tile_2() {
  flip("tile2", choices[1]);
}

function tile_3() {
  flip("tile3", choices[2]);
}

function tile_4() {
  flip("tile4", choices[3]);
}

function tile_5() {
  flip("tile5", choices[4]);
}

function tile_6() {
  flip("tile6", choices[5]);
}

function tile_7() {
  flip("tile7", choices[6]);
}

function tile_8() {
  flip("tile8", choices[7]);
}

function tile_9() {
  flip("tile9", choices[8]);
}

function tile_10() {
  flip("tile10", choices[9]);
}

function tile_11() {
  flip("tile11", choices[10]);
}

function tile_12() {
  flip("tile12", choices[11]);
}

function tile_13() {
  flip("tile13", choices[12]);
}

function tile_14() {
  flip("tile14", choices[13]);
}

function tile_15() {
  flip("tile15", choices[14]);
}

function tile_16() {
  flip("tile16", choices[15]);
}


function flip(tile, val) {

  document.getElementById(tile).style.background = 'url(orange.gif)'; 
  document.getElementById(tile).innerHTML = val;
  if (tilevalues.length == 0) {
    tilevalues.push(val);
    tileids.push(document.getElementById(tile).id);
    tries++;
    document.getElementById("nooftries").innerHTML = "NO. OF TRIES : " + tries;
  } else if (tilevalues.length == 1) {
    tilevalues.push(val);
    tileids.push(document.getElementById(tile).id);

    if (tilevalues[0] == tilevalues[1]) {
      matches += 2;
      document.getElementById("points").innerHTML = "POINTS :" + (matches / 2);
      tilevalues = [];
      tileids = [];
      if (matches == choices.length) {
        alert("GAME OVER!!");
      }
    } else {
      function flipBack() {
        var tile_1 = document.getElementById(tileids[0]);
        var tile_2 = document.getElementById(tileids[1]);
        tile_1.style.background = 'url(Dp3Xq6o.jpg) no-repeat';
        tile_1.innerHTML = "";
        tile_2.style.background = 'url(Dp3Xq6o.jpg) no-repeat';
        tile_2.innerHTML = "";
        tilevalues = [];
        tileids = [];
      }
      setTimeout(flipBack, 500);
    }
  }
}



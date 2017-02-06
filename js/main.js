"use strict"
function moveOne() {
  var elem = document.getElementById("barOne");
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      document.getElementById("labelOne").innerHTML = width * 1  + '%';
    }
  }
}
function moveTwo() {
  var elem = document.getElementById("barTwo");
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%';
      document.getElementById("labelTwo").innerHTML = width * 1;
    }
  }
}



// var count, data, val;
var leaderOver = function () {
  $('#leaderStar').find('li').addClass('disable');
  var count = $(this).data('val'),
    data = $('#contLider').data('pct'),
    val = data,
    $circle1 = $('#bar1'),
    $circle2 = $('#bar2'),
    $circle3 = $('#bar3'),
    $circle4 = $('#bar4'),
    $circle5 = $('#bar5'),
    $circle6 = $('#bar6'),
    r1 = $circle1.attr('stroke-dasharray'),
    r2 = $circle2.attr('stroke-dasharray'),
    r3 = $circle3.attr('stroke-dasharray'),
    r4 = $circle4.attr('stroke-dasharray'),
    r5 = $circle5.attr('stroke-dasharray'),
    r6 = $circle6.attr('stroke-dasharray'),
    c1 = r1*(val*2)/100,
    c2 = r2*(val-50)*2/100,
    c3 = r3*(val-100)*2/100,
    c4 = r4*(val-150)*2/100,
    c5 = r5*(val-200)*2/100,
    c6 = r6*(val-250)*2/100;
    $circle1.css({ strokeDashoffset: c1 });
  if (val < 0) { val = 0;}
  if (val > 50) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: c2 });
  } else {
    $circle2.css({ strokeDashoffset: 0 });
    $circle3.css({ strokeDashoffset: 0 });
    $circle4.css({ strokeDashoffset: 0 });
    $circle5.css({ strokeDashoffset: 0 });
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 100) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: r2 });
    $circle3.css({ strokeDashoffset: c3 });
  } else {
    $circle3.css({ strokeDashoffset: 0 });
    $circle4.css({ strokeDashoffset: 0 });
    $circle5.css({ strokeDashoffset: 0 });
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 150) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: r2 });
    $circle3.css({ strokeDashoffset: r3 });
    $circle4.css({ strokeDashoffset: c4 });
  } else {
    $circle4.css({ strokeDashoffset: 0 });
    $circle5.css({ strokeDashoffset: 0 });
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 200) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: r2 });
    $circle3.css({ strokeDashoffset: r3 });
    $circle4.css({ strokeDashoffset: r4 });
    $circle5.css({ strokeDashoffset: c5 });
  } else {
    $circle5.css({ strokeDashoffset: 0 });
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 250) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: r2 });
    $circle3.css({ strokeDashoffset: r3 });
    $circle4.css({ strokeDashoffset: r4 });
    $circle5.css({ strokeDashoffset: r5 });
    $circle6.css({ strokeDashoffset: c6 });
  } else {
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 300) {
    val = 300;
    $circle6.css({ strokeDashoffset: r6 });
  };
  $('#contLider').attr('data-pct',val);
};

var leaderEnter = function () {
  $('#leaderStar').find('li').removeClass('disable');
  var count = $(this).data('val'),
    data = $('#contLider').data('pct'),
    val = count + data,
    $circle1 = $('#bar1'),
    $circle2 = $('#bar2'),
    $circle3 = $('#bar3'),
    $circle4 = $('#bar4'),
    $circle5 = $('#bar5'),
    $circle6 = $('#bar6'),
    r1 = $circle1.attr('stroke-dasharray'),
    r2 = $circle2.attr('stroke-dasharray'),
    r3 = $circle3.attr('stroke-dasharray'),
    r4 = $circle4.attr('stroke-dasharray'),
    r5 = $circle5.attr('stroke-dasharray'),
    r6 = $circle6.attr('stroke-dasharray'),
    c1 = r1*(val*2)/100,
    c2 = r2*(val-50)*2/100,
    c3 = r3*(val-100)*2/100,
    c4 = r4*(val-150)*2/100,
    c5 = r5*(val-200)*2/100,
    c6 = r6*(val-250)*2/100;
    $circle1.css({ strokeDashoffset: c1 });
  if (val < 0) { val = 0;}
  if (val > 50) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: c2 });
  } else {
    $circle2.css({ strokeDashoffset: 0 });
    $circle3.css({ strokeDashoffset: 0 });
    $circle4.css({ strokeDashoffset: 0 });
    $circle5.css({ strokeDashoffset: 0 });
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 100) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: r2 });
    $circle3.css({ strokeDashoffset: c3 });
  } else {
    $circle3.css({ strokeDashoffset: 0 });
    $circle4.css({ strokeDashoffset: 0 });
    $circle5.css({ strokeDashoffset: 0 });
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 150) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: r2 });
    $circle3.css({ strokeDashoffset: r3 });
    $circle4.css({ strokeDashoffset: c4 });
  } else {
    $circle4.css({ strokeDashoffset: 0 });
    $circle5.css({ strokeDashoffset: 0 });
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 200) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: r2 });
    $circle3.css({ strokeDashoffset: r3 });
    $circle4.css({ strokeDashoffset: r4 });
    $circle5.css({ strokeDashoffset: c5 });
  } else {
    $circle5.css({ strokeDashoffset: 0 });
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 250) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: r2 });
    $circle3.css({ strokeDashoffset: r3 });
    $circle4.css({ strokeDashoffset: r4 });
    $circle5.css({ strokeDashoffset: r5 });
    $circle6.css({ strokeDashoffset: c6 });
  } else {
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 300) {
    val = 300;
    $circle6.css({ strokeDashoffset: r6 });
  };
  $('#contLider').attr('data-pct',val);
      $circle1 = $('#bar1'),
      $circle2 = $('#bar2'),
      $circle3 = $('#bar3'),
      $circle4 = $('#bar4'),
      $circle5 = $('#bar5'),
      $circle6 = $('#bar6'),
      r1 = $circle1.attr('stroke-dasharray'),
      r2 = $circle2.attr('stroke-dasharray'),
      r3 = $circle3.attr('stroke-dasharray'),
      r4 = $circle4.attr('stroke-dasharray'),
      r5 = $circle5.attr('stroke-dasharray'),
      r6 = $circle6.attr('stroke-dasharray'),
      c1 = r1*(val*2)/100,
      c2 = r2*(val-50)*2/100,
      c3 = r3*(val-100)*2/100,
      c4 = r4*(val-150)*2/100,
      c5 = r5*(val-200)*2/100,
      c6 = r6*(val-250)*2/100;
      $circle1.css({ strokeDashoffset: c1 });
      if (val < 0) { val = 0;}
      if (val > 50) {
        $circle1.css({ strokeDashoffset: r1 });
        $circle2.css({ strokeDashoffset: c2 });
      } else {
          $circle2.css({ strokeDashoffset: 0 });
          $circle3.css({ strokeDashoffset: 0 });
          $circle4.css({ strokeDashoffset: 0 });
          $circle5.css({ strokeDashoffset: 0 });
          $circle6.css({ strokeDashoffset: 0 });
      }
      if (val > 100 ) {
         $circle1.css({ strokeDashoffset: r1 });
         $circle2.css({ strokeDashoffset: r2 });
         $circle3.css({ strokeDashoffset: c3 });
      } else {
        $circle3.css({ strokeDashoffset: 0 });
        $circle4.css({ strokeDashoffset: 0 });
        $circle5.css({ strokeDashoffset: 0 });
        $circle6.css({ strokeDashoffset: 0 });
      }
      if (val > 150 ) {
         $circle1.css({ strokeDashoffset: r1 });
         $circle2.css({ strokeDashoffset: r2 });
         $circle3.css({ strokeDashoffset: r3 });
         $circle4.css({ strokeDashoffset: c4 });
      } else {
         $circle4.css({ strokeDashoffset: 0 });
         $circle5.css({ strokeDashoffset: 0 });
         $circle6.css({ strokeDashoffset: 0 });
      }
      if (val > 200) {
         $circle1.css({ strokeDashoffset: r1 });
         $circle2.css({ strokeDashoffset: r2 });
         $circle3.css({ strokeDashoffset: r3 });
         $circle4.css({ strokeDashoffset: r4 });
         $circle5.css({ strokeDashoffset: c5 });
      } else {
         $circle5.css({ strokeDashoffset: 0 });
         $circle6.css({ strokeDashoffset: 0 });
      }
      if (val > 250) {
         $circle1.css({ strokeDashoffset: r1 });
         $circle2.css({ strokeDashoffset: r2 });
         $circle3.css({ strokeDashoffset: r3 });
         $circle4.css({ strokeDashoffset: r4 });
         $circle5.css({ strokeDashoffset: r5 });
         $circle6.css({ strokeDashoffset: c6 });
      } else {
         $circle6.css({ strokeDashoffset: 0 });
      }
      if (val > 300) {
        val = 300;
        $circle6.css({ strokeDashoffset: r6 });
      };
      $('#contLider').attr('data-pct',val);
};

var speakOver = function () {
  var count = $(this).data('val'),
    data = $('#contSpeak').data('spct'),
    val = data,
    $circle1 = $('#bar7'),
    $circle2 = $('#bar8'),
    $circle3 = $('#bar9'),
    $circle4 = $('#bar10'),
    $circle5 = $('#bar11'),
    $circle6 = $('#bar12'),
    r1 = $circle1.attr('stroke-dasharray'),
    r2 = $circle2.attr('stroke-dasharray'),
    r3 = $circle3.attr('stroke-dasharray'),
    r4 = $circle4.attr('stroke-dasharray'),
    r5 = $circle5.attr('stroke-dasharray'),
    r6 = $circle6.attr('stroke-dasharray'),
    c1 = r1*(val*2)/100,
    c2 = r2*(val-50)*2/100,
    c3 = r3*(val-100)*2/100,
    c4 = r4*(val-150)*2/100,
    c5 = r5*(val-200)*2/100,
    c6 = r6*(val-250)*2/100;
    $circle1.css({ strokeDashoffset: c1 });
  if (val < 0) { val = 0;}
  if (val > 50) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: c2 });
  } else {
    $circle2.css({ strokeDashoffset: 0 });
    $circle3.css({ strokeDashoffset: 0 });
    $circle4.css({ strokeDashoffset: 0 });
    $circle5.css({ strokeDashoffset: 0 });
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 100) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: r2 });
    $circle3.css({ strokeDashoffset: c3 });
  } else {
    $circle3.css({ strokeDashoffset: 0 });
    $circle4.css({ strokeDashoffset: 0 });
    $circle5.css({ strokeDashoffset: 0 });
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 150) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: r2 });
    $circle3.css({ strokeDashoffset: r3 });
    $circle4.css({ strokeDashoffset: c4 });
  } else {
    $circle4.css({ strokeDashoffset: 0 });
    $circle5.css({ strokeDashoffset: 0 });
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 200) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: r2 });
    $circle3.css({ strokeDashoffset: r3 });
    $circle4.css({ strokeDashoffset: r4 });
    $circle5.css({ strokeDashoffset: c5 });
  } else {
    $circle5.css({ strokeDashoffset: 0 });
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 250) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: r2 });
    $circle3.css({ strokeDashoffset: r3 });
    $circle4.css({ strokeDashoffset: r4 });
    $circle5.css({ strokeDashoffset: r5 });
    $circle6.css({ strokeDashoffset: c6 });
  } else {
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 300) {
    val = 300;
    $circle6.css({ strokeDashoffset: r6 });
  };
  $('#contSpeak').attr('data-pct',val);
}

var speakEnter = function () {
  var count = $(this).data('val'),
    data = $('#contSpeak').data('spct'),
    val = count + data,
    $circle1 = $('#bar7'),
    $circle2 = $('#bar8'),
    $circle3 = $('#bar9'),
    $circle4 = $('#bar10'),
    $circle5 = $('#bar11'),
    $circle6 = $('#bar12'),
    r1 = $circle1.attr('stroke-dasharray'),
    r2 = $circle2.attr('stroke-dasharray'),
    r3 = $circle3.attr('stroke-dasharray'),
    r4 = $circle4.attr('stroke-dasharray'),
    r5 = $circle5.attr('stroke-dasharray'),
    r6 = $circle6.attr('stroke-dasharray'),
    c1 = r1*(val*2)/100,
    c2 = r2*(val-50)*2/100,
    c3 = r3*(val-100)*2/100,
    c4 = r4*(val-150)*2/100,
    c5 = r5*(val-200)*2/100,
    c6 = r6*(val-250)*2/100;
    $circle1.css({ strokeDashoffset: c1 });
  if (val < 0) { val = 0;}
  if (val > 50) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: c2 });
  } else {
    $circle2.css({ strokeDashoffset: 0 });
    $circle3.css({ strokeDashoffset: 0 });
    $circle4.css({ strokeDashoffset: 0 });
    $circle5.css({ strokeDashoffset: 0 });
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 100) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: r2 });
    $circle3.css({ strokeDashoffset: c3 });
  } else {
    $circle3.css({ strokeDashoffset: 0 });
    $circle4.css({ strokeDashoffset: 0 });
    $circle5.css({ strokeDashoffset: 0 });
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 150) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: r2 });
    $circle3.css({ strokeDashoffset: r3 });
    $circle4.css({ strokeDashoffset: c4 });
  } else {
    $circle4.css({ strokeDashoffset: 0 });
    $circle5.css({ strokeDashoffset: 0 });
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 200) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: r2 });
    $circle3.css({ strokeDashoffset: r3 });
    $circle4.css({ strokeDashoffset: r4 });
    $circle5.css({ strokeDashoffset: c5 });
  } else {
    $circle5.css({ strokeDashoffset: 0 });
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 250) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: r2 });
    $circle3.css({ strokeDashoffset: r3 });
    $circle4.css({ strokeDashoffset: r4 });
    $circle5.css({ strokeDashoffset: r5 });
    $circle6.css({ strokeDashoffset: c6 });
  } else {
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 300) {
    val = 300;
    $circle6.css({ strokeDashoffset: r6 });
  };
  $('#contSpeak').attr('data-pct',val);
      $circle1 = $('#bar7'),
      $circle2 = $('#bar8'),
      $circle3 = $('#bar9'),
      $circle4 = $('#bar10'),
      $circle5 = $('#bar11'),
      $circle6 = $('#bar12'),
      r1 = $circle1.attr('stroke-dasharray'),
      r2 = $circle2.attr('stroke-dasharray'),
      r3 = $circle3.attr('stroke-dasharray'),
      r4 = $circle4.attr('stroke-dasharray'),
      r5 = $circle5.attr('stroke-dasharray'),
      r6 = $circle6.attr('stroke-dasharray'),
      c1 = r1*(val*2)/100,
      c2 = r2*(val-50)*2/100,
      c3 = r3*(val-100)*2/100,
      c4 = r4*(val-150)*2/100,
      c5 = r5*(val-200)*2/100,
      c6 = r6*(val-250)*2/100;
      $circle1.css({ strokeDashoffset: c1 });
      if (val < 0) { val = 0;}
      if (val > 50) {
        $circle1.css({ strokeDashoffset: r1 });
        $circle2.css({ strokeDashoffset: c2 });
      } else {
          $circle2.css({ strokeDashoffset: 0 });
          $circle3.css({ strokeDashoffset: 0 });
          $circle4.css({ strokeDashoffset: 0 });
          $circle5.css({ strokeDashoffset: 0 });
          $circle6.css({ strokeDashoffset: 0 });
      }
      if (val > 100 ) {
         $circle1.css({ strokeDashoffset: r1 });
         $circle2.css({ strokeDashoffset: r2 });
         $circle3.css({ strokeDashoffset: c3 });
      } else {
        $circle3.css({ strokeDashoffset: 0 });
        $circle4.css({ strokeDashoffset: 0 });
        $circle5.css({ strokeDashoffset: 0 });
        $circle6.css({ strokeDashoffset: 0 });
      }
      if (val > 150 ) {
         $circle1.css({ strokeDashoffset: r1 });
         $circle2.css({ strokeDashoffset: r2 });
         $circle3.css({ strokeDashoffset: r3 });
         $circle4.css({ strokeDashoffset: c4 });
      } else {
         $circle4.css({ strokeDashoffset: 0 });
         $circle5.css({ strokeDashoffset: 0 });
         $circle6.css({ strokeDashoffset: 0 });
      }
      if (val > 200) {
         $circle1.css({ strokeDashoffset: r1 });
         $circle2.css({ strokeDashoffset: r2 });
         $circle3.css({ strokeDashoffset: r3 });
         $circle4.css({ strokeDashoffset: r4 });
         $circle5.css({ strokeDashoffset: c5 });
      } else {
         $circle5.css({ strokeDashoffset: 0 });
         $circle6.css({ strokeDashoffset: 0 });
      }
      if (val > 250) {
         $circle1.css({ strokeDashoffset: r1 });
         $circle2.css({ strokeDashoffset: r2 });
         $circle3.css({ strokeDashoffset: r3 });
         $circle4.css({ strokeDashoffset: r4 });
         $circle5.css({ strokeDashoffset: r5 });
         $circle6.css({ strokeDashoffset: c6 });
      } else {
         $circle6.css({ strokeDashoffset: 0 });
      }
      if (val > 300) {
        val = 300;
        $circle6.css({ strokeDashoffset: r6 });
      };
      $('#contSpeak').attr('data-pct',val);
};

var skillOver = function () {
  var count = $(this).data('val'),
    data = $('#contSpeak').data('skpct'),
    val = data,
    $circle1 = $('#bar13'),
    $circle2 = $('#bar14'),
    $circle3 = $('#bar15'),
    $circle4 = $('#bar16'),
    $circle5 = $('#bar17'),
    $circle6 = $('#bar18'),
    r1 = $circle1.attr('stroke-dasharray'),
    r2 = $circle2.attr('stroke-dasharray'),
    r3 = $circle3.attr('stroke-dasharray'),
    r4 = $circle4.attr('stroke-dasharray'),
    r5 = $circle5.attr('stroke-dasharray'),
    r6 = $circle6.attr('stroke-dasharray'),
    c1 = r1*(val*2)/100,
    c2 = r2*(val-50)*2/100,
    c3 = r3*(val-100)*2/100,
    c4 = r4*(val-150)*2/100,
    c5 = r5*(val-200)*2/100,
    c6 = r6*(val-250)*2/100;
    $circle1.css({ strokeDashoffset: c1 });
  if (val < 0) { val = 0;}
  if (val > 50) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: c2 });
  } else {
    $circle2.css({ strokeDashoffset: 0 });
    $circle3.css({ strokeDashoffset: 0 });
    $circle4.css({ strokeDashoffset: 0 });
    $circle5.css({ strokeDashoffset: 0 });
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 100) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: r2 });
    $circle3.css({ strokeDashoffset: c3 });
  } else {
    $circle3.css({ strokeDashoffset: 0 });
    $circle4.css({ strokeDashoffset: 0 });
    $circle5.css({ strokeDashoffset: 0 });
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 150) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: r2 });
    $circle3.css({ strokeDashoffset: r3 });
    $circle4.css({ strokeDashoffset: c4 });
  } else {
    $circle4.css({ strokeDashoffset: 0 });
    $circle5.css({ strokeDashoffset: 0 });
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 200) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: r2 });
    $circle3.css({ strokeDashoffset: r3 });
    $circle4.css({ strokeDashoffset: r4 });
    $circle5.css({ strokeDashoffset: c5 });
  } else {
    $circle5.css({ strokeDashoffset: 0 });
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 250) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: r2 });
    $circle3.css({ strokeDashoffset: r3 });
    $circle4.css({ strokeDashoffset: r4 });
    $circle5.css({ strokeDashoffset: r5 });
    $circle6.css({ strokeDashoffset: c6 });
  } else {
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 300) {
    val = 300;
    $circle6.css({ strokeDashoffset: r6 });
  };
  $('#contSpeak').attr('data-pct',val);
}

var skillEnter = function () {
  var count = $(this).data('val'),
    data = $('#contSkill').data('skpct'),
    val = count + data,
    $circle1 = $('#bar13'),
    $circle2 = $('#bar14'),
    $circle3 = $('#bar15'),
    $circle4 = $('#bar16'),
    $circle5 = $('#bar17'),
    $circle6 = $('#bar18'),
    r1 = $circle1.attr('stroke-dasharray'),
    r2 = $circle2.attr('stroke-dasharray'),
    r3 = $circle3.attr('stroke-dasharray'),
    r4 = $circle4.attr('stroke-dasharray'),
    r5 = $circle5.attr('stroke-dasharray'),
    r6 = $circle6.attr('stroke-dasharray'),
    c1 = r1*(val*2)/100,
    c2 = r2*(val-50)*2/100,
    c3 = r3*(val-100)*2/100,
    c4 = r4*(val-150)*2/100,
    c5 = r5*(val-200)*2/100,
    c6 = r6*(val-250)*2/100;
    $circle1.css({ strokeDashoffset: c1 });
  if (val < 0) { val = 0;}
  if (val > 50) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: c2 });
  } else {
    $circle2.css({ strokeDashoffset: 0 });
    $circle3.css({ strokeDashoffset: 0 });
    $circle4.css({ strokeDashoffset: 0 });
    $circle5.css({ strokeDashoffset: 0 });
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 100) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: r2 });
    $circle3.css({ strokeDashoffset: c3 });
  } else {
    $circle3.css({ strokeDashoffset: 0 });
    $circle4.css({ strokeDashoffset: 0 });
    $circle5.css({ strokeDashoffset: 0 });
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 150) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: r2 });
    $circle3.css({ strokeDashoffset: r3 });
    $circle4.css({ strokeDashoffset: c4 });
  } else {
    $circle4.css({ strokeDashoffset: 0 });
    $circle5.css({ strokeDashoffset: 0 });
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 200) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: r2 });
    $circle3.css({ strokeDashoffset: r3 });
    $circle4.css({ strokeDashoffset: r4 });
    $circle5.css({ strokeDashoffset: c5 });
  } else {
    $circle5.css({ strokeDashoffset: 0 });
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 250) {
    $circle1.css({ strokeDashoffset: r1 });
    $circle2.css({ strokeDashoffset: r2 });
    $circle3.css({ strokeDashoffset: r3 });
    $circle4.css({ strokeDashoffset: r4 });
    $circle5.css({ strokeDashoffset: r5 });
    $circle6.css({ strokeDashoffset: c6 });
  } else {
    $circle6.css({ strokeDashoffset: 0 });
  }
  if (val > 300) {
    val = 300;
    $circle6.css({ strokeDashoffset: r6 });
  };
  $('#contSkill').attr('data-pct',val);
      $circle1 = $('#bar7'),
      $circle2 = $('#bar8'),
      $circle3 = $('#bar9'),
      $circle4 = $('#bar10'),
      $circle5 = $('#bar11'),
      $circle6 = $('#bar12'),
      r1 = $circle1.attr('stroke-dasharray'),
      r2 = $circle2.attr('stroke-dasharray'),
      r3 = $circle3.attr('stroke-dasharray'),
      r4 = $circle4.attr('stroke-dasharray'),
      r5 = $circle5.attr('stroke-dasharray'),
      r6 = $circle6.attr('stroke-dasharray'),
      c1 = r1*(val*2)/100,
      c2 = r2*(val-50)*2/100,
      c3 = r3*(val-100)*2/100,
      c4 = r4*(val-150)*2/100,
      c5 = r5*(val-200)*2/100,
      c6 = r6*(val-250)*2/100;
      $circle1.css({ strokeDashoffset: c1 });
      if (val < 0) { val = 0;}
      if (val > 50) {
        $circle1.css({ strokeDashoffset: r1 });
        $circle2.css({ strokeDashoffset: c2 });
      } else {
          $circle2.css({ strokeDashoffset: 0 });
          $circle3.css({ strokeDashoffset: 0 });
          $circle4.css({ strokeDashoffset: 0 });
          $circle5.css({ strokeDashoffset: 0 });
          $circle6.css({ strokeDashoffset: 0 });
      }
      if (val > 100 ) {
         $circle1.css({ strokeDashoffset: r1 });
         $circle2.css({ strokeDashoffset: r2 });
         $circle3.css({ strokeDashoffset: c3 });
      } else {
        $circle3.css({ strokeDashoffset: 0 });
        $circle4.css({ strokeDashoffset: 0 });
        $circle5.css({ strokeDashoffset: 0 });
        $circle6.css({ strokeDashoffset: 0 });
      }
      if (val > 150 ) {
         $circle1.css({ strokeDashoffset: r1 });
         $circle2.css({ strokeDashoffset: r2 });
         $circle3.css({ strokeDashoffset: r3 });
         $circle4.css({ strokeDashoffset: c4 });
      } else {
         $circle4.css({ strokeDashoffset: 0 });
         $circle5.css({ strokeDashoffset: 0 });
         $circle6.css({ strokeDashoffset: 0 });
      }
      if (val > 200) {
         $circle1.css({ strokeDashoffset: r1 });
         $circle2.css({ strokeDashoffset: r2 });
         $circle3.css({ strokeDashoffset: r3 });
         $circle4.css({ strokeDashoffset: r4 });
         $circle5.css({ strokeDashoffset: c5 });
      } else {
         $circle5.css({ strokeDashoffset: 0 });
         $circle6.css({ strokeDashoffset: 0 });
      }
      if (val > 250) {
         $circle1.css({ strokeDashoffset: r1 });
         $circle2.css({ strokeDashoffset: r2 });
         $circle3.css({ strokeDashoffset: r3 });
         $circle4.css({ strokeDashoffset: r4 });
         $circle5.css({ strokeDashoffset: r5 });
         $circle6.css({ strokeDashoffset: c6 });
      } else {
         $circle6.css({ strokeDashoffset: 0 });
      }
      if (val > 300) {
        val = 300;
        $circle6.css({ strokeDashoffset: r6 });
      };
      $('#contSpeak').attr('data-pct',val);
};

$(document).ready(function(){
  $('#lider').on('mouseenter', leaderEnter);
  $('#lider').on('mouseleave', leaderOver);
  $('#speak').on('mouseenter', speakEnter);
  $('#speak').on('mouseleave', speakOver);
  $('#skill').on('mouseenter', skillEnter);
  $('#skill').on('mouseleave', skillOver);
});




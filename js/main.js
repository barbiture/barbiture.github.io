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


"use strict"
// var count, data, val;
var xOver = function () {
  var count = $(this).data('val'),
      data = $('.cont').data('pct'),
      val = data,
      $circle1 = $('.bar1'),
      $circle2 = $('.bar2'),
      $circle3 = $('.bar3'),
      $circle4 = $('.bar4'),
      $circle5 = $('.bar5'),
      $circle6 = $('.bar6'),
      r = $circle1.attr('stroke-dasharray'),
      r2 = $circle2.attr('stroke-dasharray'),
      r3 = $circle3.attr('stroke-dasharray'),
      r4 = $circle4.attr('stroke-dasharray'),
      r5 = $circle5.attr('stroke-dasharray'),
      r6 = $circle6.attr('stroke-dasharray'),
      c = r*(val*2)/100,
      c2 = r2*(val-50)*2/100,
      c3 = r3*(val-100)*2/100,
      c4 = r4*(val-150)*2/100,
      c5 = r5*(val-200)*2/100,
      c6 = r6*(val-250)*2/100;
      $circle1.css({ strokeDashoffset: c });
      if (val < 0) { val = 0;}
      if (val > 50) {
        $circle1.css({ strokeDashoffset: r });
        $circle2.css({ strokeDashoffset: c2 });
      } else {
          $circle2.css({ strokeDashoffset: 0 });
          $circle3.css({ strokeDashoffset: 0 });
          $circle4.css({ strokeDashoffset: 0 });
          $circle5.css({ strokeDashoffset: 0 });
          $circle6.css({ strokeDashoffset: 0 });
      }
      if (val > 100) {
           $circle1.css({ strokeDashoffset: r });
           $circle2.css({ strokeDashoffset: r2 });
           $circle3.css({ strokeDashoffset: c3 });
        } else {
          $circle3.css({ strokeDashoffset: 0 });
          $circle4.css({ strokeDashoffset: 0 });
          $circle5.css({ strokeDashoffset: 0 });
          $circle6.css({ strokeDashoffset: 0 });
        }
        if (val > 150) {
             $circle1.css({ strokeDashoffset: r });
             $circle2.css({ strokeDashoffset: r2 });
             $circle3.css({ strokeDashoffset: r3 });
             $circle4.css({ strokeDashoffset: c4 });
          } else {
             $circle4.css({ strokeDashoffset: 0 });
             $circle5.css({ strokeDashoffset: 0 });
             $circle6.css({ strokeDashoffset: 0 });
          }
          if (val > 200) {
             $circle1.css({ strokeDashoffset: r });
             $circle2.css({ strokeDashoffset: r2 });
             $circle3.css({ strokeDashoffset: r3 });
             $circle4.css({ strokeDashoffset: r4 });
             $circle5.css({ strokeDashoffset: c5 });
          } else {
             $circle5.css({ strokeDashoffset: 0 });
             $circle6.css({ strokeDashoffset: 0 });
          }
          if (val > 250) {
             $circle1.css({ strokeDashoffset: r });
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
      $('.cont').attr('data-pct',val);
}

var xEnter = function () {
  var count = $(this).data('val'),
      data = $('.cont').data('pct'),
      val = count + data,
      $circle1 = $('.bar1'),
      $circle2 = $('.bar2'),
      $circle3 = $('.bar3'),
      $circle4 = $('.bar4'),
      $circle5 = $('.bar5'),
      $circle6 = $('.bar6'),
      r = $circle1.attr('stroke-dasharray'),
      r2 = $circle2.attr('stroke-dasharray'),
      r3 = $circle3.attr('stroke-dasharray'),
      r4 = $circle4.attr('stroke-dasharray'),
      r5 = $circle5.attr('stroke-dasharray'),
      r6 = $circle6.attr('stroke-dasharray'),
      c = r*(val*2)/100,
      c2 = r2*(val-50)*2/100,
      c3 = r3*(val-100)*2/100,
      c4 = r4*(val-150)*2/100,
      c5 = r5*(val-200)*2/100,
      c6 = r6*(val-250)*2/100;
      $circle1.css({ strokeDashoffset: c });
      if (val < 0) { val = 0;}
      if (val > 50) {
        $circle1.css({ strokeDashoffset: r });
        $circle2.css({ strokeDashoffset: c2 });
      } else {
          $circle2.css({ strokeDashoffset: 0 });
          $circle3.css({ strokeDashoffset: 0 });
          $circle4.css({ strokeDashoffset: 0 });
          $circle5.css({ strokeDashoffset: 0 });
          $circle6.css({ strokeDashoffset: 0 });
      }
      if (val > 100 ) {
         $circle1.css({ strokeDashoffset: r });
         $circle2.css({ strokeDashoffset: r2 });
         $circle3.css({ strokeDashoffset: c3 });
      } else {
        $circle3.css({ strokeDashoffset: 0 });
        $circle4.css({ strokeDashoffset: 0 });
        $circle5.css({ strokeDashoffset: 0 });
        $circle6.css({ strokeDashoffset: 0 });
      }
      if (val > 150 ) {
         $circle1.css({ strokeDashoffset: r });
         $circle2.css({ strokeDashoffset: r2 });
         $circle3.css({ strokeDashoffset: r3 });
         $circle4.css({ strokeDashoffset: c4 });
      } else {
         $circle4.css({ strokeDashoffset: 0 });
         $circle5.css({ strokeDashoffset: 0 });
         $circle6.css({ strokeDashoffset: 0 });
      }
      if (val > 200) {
         $circle1.css({ strokeDashoffset: r });
         $circle2.css({ strokeDashoffset: r2 });
         $circle3.css({ strokeDashoffset: r3 });
         $circle4.css({ strokeDashoffset: r4 });
         $circle5.css({ strokeDashoffset: c5 });
      } else {
         $circle5.css({ strokeDashoffset: 0 });
         $circle6.css({ strokeDashoffset: 0 });
      }
      if (val > 250) {
         $circle1.css({ strokeDashoffset: r });
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
      $('.cont').attr('data-pct',val);
};

$(document).ready(function(){
  $('.percent').on('mouseenter', xEnter);
  $('.percent').on('mouseleave', xOver);
});




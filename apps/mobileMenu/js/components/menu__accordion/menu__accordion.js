$.fn.extend({
  // Define the threeBarToggle function by extending the jQuery object
  threeBarToggle: function(options){
    // Set the default options
    var defaults = {
      color: 'black',
      width: 30,
      height: 25,
      speed: 400,
      animate: true
    }
    var options = $.extend(defaults, options);

    return this.each(function(){

      $(this).empty().css({'width': options.width, 'height': options.height, 'background': 'transparent'});
      $(this).addClass('menu__toggles');
      $(this).prepend('<i></i><i></i><i></i>').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('menu__toggles_active');
        if (options.animate) { $(this).toggleClass('menu__toggles_animate'); }
        $('.menu__content_acoordion').slideToggle(options.speed);
      });
      $(this).children().css('background', options.color);
    });
  },
  // Define the accordionMenu() function that adds the sliding functionality
  accordionMenu: function(options) {
    // Set the default options
    var defaults = {
      speed: 400
    }
    var options =  $.extend(defaults, options);

    return this.each(function(){
      $(this).addClass('menu__content_acoordion');
      var menuItems = $(this).children('li');
      menuItems.find('.menu__sub_accordion').parent().addClass('menu__content_parent');
      $('.menu__content_parent ul').hide();
      $('.menu__content_parent > a').on('click', function(event) {
        event.stopPropagation();
        event.preventDefault();
        $(this).siblings().slideToggle(options.speed);
      });
    });
  }
});
// Convert any element into a three bar toggle
// Optional arguments are 'speed' (number in ms, 'slow' or 'fast') and 'animation' (true or false) to disable the animation on the toggle
$('#menuToggleAccordion').threeBarToggle({color: 'red', width: 30, height: 25});

// Make any nested ul-based menu mobile
// Optional arguments are 'speed' and 'accordion' (true or false) to disable the behavior of closing other sub
$('#menuContentAccordion').accordionMenu();
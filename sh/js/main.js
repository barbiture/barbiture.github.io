(function($) {

  $(document).ready(function() {
    $('.left-side--nav_list a').click(function(){
      var target = $(this).attr('href');
      $('html, body').animate({scrollTop: $(target).offset().top}, 300);
      return false;
    });
    //ScrollUp
    $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
              $('.scroll-up').fadeIn();
          } else {
              $('.scroll-up').fadeOut();
          }
      });
      $('.scroll-up').click(function () {
          $("html, body").animate({
              scrollTop: 0
          }, 600);
          return false;
      });
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 200000,
      values: [ 5000, 125836 ],
      slide: function( event, ui ) {
        $( "#amount-a" ).val(ui.values[ 0 ]);
        $( "#amount-b" ).val(ui.values[ 1 ]);
      }
      });

      $(".amount").on("keyup", function() {
        var a = $("#amount-a").val();
        var b = $("#amount-b").val();
        $("#slider-range").slider("values", 0, a);
        $("#slider-range").slider("values", 1, b);
      });

      $("#amount-a")
      .val( $("#slider-range").slider("values", 0) );
      $("#amount-b")
      .val( $( "#slider-range").slider("values", 1) );

    // amount +1 -1

    $('.down').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.up').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });

    //SelectBox
    $('select').each(function () {

        // Cache the number of options
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;


        // Hides the select element
        $this.addClass('s-hidden');

        // Wrap the select element in a div
        $this.wrap('<div class="select"></div>');

        // Insert a styled div to sit over the top of the hidden select element
        $this.after('<div class="styledSelect"></div>');

        // Cache the styled div
        var $styledSelect = $this.next('div.styledSelect');

        // Show the first select option in the styled div
        $styledSelect.text($this.children('option').eq(0).text());

        // Insert an unordered list after the styled div and also cache the list
        var $list = $('<ul />', {
            'class': 'options'
        }).insertAfter($styledSelect);

        // Insert a list item into the unordered list for each select option
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        // Cache the list items
        var $listItems = $list.children('li');

        // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.styledSelect.active').each(function () {
                $(this).removeClass('active').next('ul.options').hide();
            });
            $(this).toggleClass('active').next('ul.options').toggle();
        });

        // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
        // Updates the select element to have the value of the equivalent option
        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            /* alert($this.val()); Uncomment this for demonstration! */
        });

        // Hides the unordered list when clicking outside of it
        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });
    // disable open_mobile
    $(function() {
      var $window = $(window),
        $modalToggle = $('.block-goods--inCart .defaultBtn');
        function resize() {
          if ($window.width() < 800) {
           $.each($modalToggle, function() {
               $(this).removeAttr("data-toggle");
           })
          }else{
           $.each($modalToggle, function() {
               $(this).attr("data-toggle", "modal" );
           })
          }
         }
         $window
             .resize(resize)
             .trigger('resize');
    });
    // add blurBG
    $( "#myModal" ).on('hidden.bs.modal', function(){
        $('.main').addClass('blur-out');
        $('.main').removeClass('blur-in');
        e.stopPropagation();
    });
    $( "#myModal" ).on('shown.bs.modal', function(){
        $('.main').addClass('blur-in');
        $('.main').removeClass('blur-out');
        e.stopPropagation();
    });
    $('.toggle-search').click(function(){
        $('.search').slideToggle().toggleClass('active');
        document.getElementById("inputFocus").focus();
    });
    $('.toggle-link').click(function(){
      $(this).siblings('.toggle-content').slideToggle().toggleClass('active');
      $(this).toggleClass('toggle-link--active');
    });

    $(function() {
      var $window = $(window),
      $catalog = $('.left-side--catalog_content');
      function resize() {
        if ($window.width() < 1065) {
          $catalog.addClass("toggle-content");
        }else{
          $catalog.removeClass("toggle-content");
        }
       }
        $window
        .resize(resize)
        .trigger('resize');
    });
  });
  $(function() {

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
     $('.carousel-single').jcarousel({
    });
  })

  var connector = function(itemNavigation, carouselStage) {
    return carouselStage.jcarousel('items').eq(itemNavigation.index());
  };
  $(function() {
      var jcarouselStage = $('.carousel-stage');

      jcarouselStage
          .on('jcarousel:reload jcarousel:create', function () {
              var carousel = $(this),
                  width = carousel.innerWidth();
              jcarouselStage.jcarousel('items').css('width', Math.ceil(width) + 'px');
          });

      var carouselStage      = $('.carousel-stage').jcarousel(),
          carouselNavigation = $('.carousel-navigation').jcarousel();

      carouselNavigation.jcarousel('items').each(function() {
          var item = $(this);

          // This is where we actually connect to items.
          var target = connector(item, carouselStage);

          item
              .on('jcarouselcontrol:active', function() {
                  carouselNavigation.jcarousel('scrollIntoView', this);
                  item.addClass('active');
              })
              .on('jcarouselcontrol:inactive', function() {
                  item.removeClass('active');
              })
              .jcarouselControl({
                  target: target,
                  carousel: carouselStage
              });
      });
  });
  var carouselResponsive = $('.carousel-single');
  $('.slider')
  .on('jcarousel:create jcarousel:reload', function() {
      var element = $(this),
          width = element.innerWidth();

      // This shows 1 item at a time.
      // Divide `width` to the number of items you want to display,
      // eg. `width = width / 3` to display 3 items at a time.
      element.jcarousel('items').css('width', width + 'px');
  })
  .jcarousel({
    wrap: 'circular'
  });
  $('.left-side--catalog_slider .slider').jcarouselAutoscroll({
    interval: 3500
  });
  carouselResponsive
    .on('jcarousel:reload jcarousel:create', function () {
      var carousel = $(this),
          width = carousel.innerWidth();

      if (width >= 1276) {
          width = width / 5;
      } else if (width >= 1036) {
          width = width / 4;
      } else if (width >= 994) {
          width = width / 3;
      } else if (width >= 476) {
          width = width / 2;
      }

      carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
    })
    .jcarousel({

        wrap: 'circular'
    });
  $('.jcarousel-control-prev')
    .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
    })
    .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
    })
    .jcarouselControl({
      target: '-=1'
    });

  $('.jcarousel-control-next')
    .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
    })
    .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
    })
    .jcarouselControl({
      target: '+=1'
    });


  });
})(jQuery);
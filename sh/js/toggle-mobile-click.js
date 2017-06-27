$(document).ready(function() {
  $('.toggle-mobile-click').click(function() {
    $(this).toggleClass('active').next('.toggle-mobile-content').toggle();
  });
});
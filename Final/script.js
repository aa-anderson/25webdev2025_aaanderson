$(document).ready(function () {
    $('#image-map .pin').each(function () {
      const $pin = $(this);
      const xpos = $pin.data('xpos');
      const ypos = $pin.data('ypos');
      $pin.css({ left: xpos + 'px', top: ypos + 'px' });
    });
  
    let hideTimeout;
  
    $('.pin').on('mouseenter', function () {
      clearTimeout(hideTimeout);
      $(this).find('.tooltip').addClass('show');
    });
  
    $('.pin').on('mouseleave', function () {
      const tooltip = $(this).find('.tooltip');
      hideTimeout = setTimeout(() => {
        tooltip.removeClass('show');
      }, 3000);
    });
  
    $('.tooltip').on('mouseenter', function () {
      clearTimeout(hideTimeout);
    });
  
    $('.tooltip').on('mouseleave', function () {
      const tooltip = $(this);
      hideTimeout = setTimeout(() => {
        tooltip.removeClass('show');
      }, 3000);
    });
  });
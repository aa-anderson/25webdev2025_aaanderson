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
    }, 1000);
  });
  $('.tooltip').on('mouseenter', () => clearTimeout(hideTimeout));
  $('.tooltip').on('mouseleave', function () {
    const tooltip = $(this);
    hideTimeout = setTimeout(() => {
      tooltip.removeClass('show');
    }, 1000);
  });

  const $popup = $('#quiz-popup');
  const $closeBtn = $('#close-popup');
  const $button = $('#destination-button');
  const $result = $('#destination-result');
  let popupShown = false;
  $(window).on('scroll', function () {
    if (!popupShown && $(window).scrollTop() > 200) {
      $popup.fadeIn().css('display', 'flex');
      popupShown = true;
    }
  });
  $closeBtn.on('click', function () {
    $popup.fadeOut();
  });

  $button.on('click', function () {
    const destinations = [
      { name: "London", link: "London.html" },
      { name: "Jamaica", link: "Jamaica.html" },
      { name: "Nantucket", link: "Nantucket.html" },
      { name: "Thailand", link: "Thailand.html" },
      { name: "South Korea", link: "Korea.html" },
      { name: "Texas", link: "Texas.html" }
    ];
    const selected = destinations[Math.floor(Math.random() * destinations.length)];
    $result.html(`
      <p>Start your next adventure in <strong>${selected.name}</strong>!</p>
      <a href="${selected.link}">Learn More</a>
    `);
    $result[0].scrollIntoView({ behavior: "smooth" });
  });
  $('#contact-form').on('submit', function (e) {
    e.preventDefault();
    this.reset();

    const $button = $('#contact-form button[type="submit"]');
    const originalText = $button.text();
    $button.text('Sent ✓').prop('disabled', true);
    setTimeout(() => {
      $button.text(originalText).prop('disabled', false);
    }, 2000);
  });
  $('.cube').on('click', function () {
    $(this).toggleClass('flipped');
  });
});

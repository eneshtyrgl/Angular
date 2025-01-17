document.addEventListener('DOMContentLoaded', function () {
    new SweetScroll({
      trigger: '[data-scroll]',
      header: '.header',
      duration: 1000,
      easing: 'easeOutQuint',
    });
  });

  
$(function () {

  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    autoplay: true,
  });

  $('[data-fancybox]').fancybox({
    
  });

  $('.products__item').hover(
    function () { $(this).addClass('products__item--active') },   
    function () { $(this).removeClass('products__item--active') } 
  );

});
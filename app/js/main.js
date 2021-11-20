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
  $('.link-box__search, .link-box__cart, .link-box__like').hover(
    function () { $(this).addClass('link-box--active') },
    function () { $(this).removeClass('link-box--active') }
  );

});
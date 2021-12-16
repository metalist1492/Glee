

$(function () {
  
  $('.products__item').hover(
    function () { $(this).addClass('products__item--active') },
    function () { $(this).removeClass('products__item--active') }
  );
  $('.link-box__search, .link-box__cart, .link-box__like').hover(
    function () { $(this).addClass('link-box--active')},
    function () { $(this).removeClass('link-box--active') }
  );

  $('.product-tabs__top-link').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-link').removeClass('product-tabs__top-link--active');
    $(this).addClass('product-tabs__top-link--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')    
  })

  
  $('.product-one__num').styler();
  

  $('.filter-recent__star').rateYo({
    starWidth: "14px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "14px"
  });

  $('.star').rateYo({
    starWidth: "20px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "6px"
  });



  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },

  });


  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    autoplay: true,
  });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
  });

  $('.product-related__slider').slick({
    slidesToShow: 4,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icon/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icon/arrow-right.svg" alt=""></button>',
  });

  $('[data-fancybox]').fancybox({

  });

  var containerEl1 = document.querySelector('[data-ref="container__mixitup-1"]');
  var containerEl2 = document.querySelector('[data-ref="container__mixitup-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);



});
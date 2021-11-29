$(function () {

  $(function () {

    $('.filter-recent__star').rateYo({

    });

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

  $('.products__item').hover(
    function () { $(this).addClass('products__item--active') },
    function () { $(this).removeClass('products__item--active') }
  );
  $('.link-box__search, .link-box__cart, .link-box__like').hover(
    function () { $(this).addClass('link-box--active') },
    function () { $(this).removeClass('link-box--active') }
  );

});
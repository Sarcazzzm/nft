$(document).ready(function(){
    $('.slider__wrapper').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        appendArrows: $('.slider_arrows'),
            prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i><img src="icons/left.png"></button>',
            nextArrow: '<button id="next" type="button" class="btn btn-juliet"><i class="fa fa-chevron-right" aria-hidden="true"></i><img src="icons/right.png"></button>'
    });
  });
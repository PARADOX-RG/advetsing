$(function(){

    $('.top-slider__inner').slick({
        fade: true,
        autoplay: true,
        swipe: true,
        autoplaySpeed: 4000,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/slider-arrow.svg" alt="arrow-right"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/slider-arrow.svg" alt="arrow-right"></button>',
    });

    $('[data-fancybox="gallery"]').fancybox({
       
    });

    $('.aside__text').click(function() { 
        var $this = $(this);
      
          if ($this.next().hasClass('open')) {
              $this.next().removeClass('open');
              $this.next().slideUp(350);
          } else {
              $this.parent().parent().find('.subtext').removeClass('open');
              $this.parent().parent().find('.subtext').slideUp(350);
              $this.next().toggleClass('open');
              $this.next().slideToggle(350);
          }
    });
    $('.header__menu-open').click(function() { 
        var $this = $(this);
      
          if ($this.next().hasClass('open')) {
              $this.next().removeClass('open');
              $this.next().slideUp(350);
          } else {
              $this.parent().parent().find('.submenu').removeClass('open');
              $this.parent().parent().find('.submenu').slideUp(350);
              $this.next().toggleClass('open');
              $this.next().slideToggle(350);
          }
    });

    $('.header__btn').on('click', function(){
        $('.header__menu').toggleClass('header__menu--active')
    });
    $('.header__close').on('click', function(){
        $('.header__menu').removeClass('header__menu--active')
    });

});
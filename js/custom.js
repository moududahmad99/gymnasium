$(function () {
    $('#banner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        prevArrow: '<i class="fa-solid fa-angle-left slick-arrow1"></i>',
        nextArrow: '<i class="fa-solid fa-angle-right slick-arrow2"></i>'
    });
    $('.classes-brand').slick({
        infinite: true,
        slidesToShow: 5,
        centerMode: true,
        centerPadding: '60px',
        autoplay: true,
        prevArrow: '<i class="fa-solid fa-less-than brand-arrow1"></i>',
        nextArrow: '<i class="fa-solid fa-greater-than brand-arrow2"></i>',
      })
      $('.counter').counterUp({
        delay: 10,
        time: 2000,
        offset: 70,
        beginAt: 5,
        formatter: function (n) {
          return n.replace(/,/g, '.');
        }
      });
      new VenoBox({
        selector: ".venobox",
        spinner: 'wander',
        autoplay: true,
      });
      lightbox.option({
        'resizeDuration': 100,
        'wrapAround': true
      })
      $('.testimonial-main').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        // prevArrow: '<i class="fa-solid fa-less-than brand-arrow1"></i>',
        // nextArrow: '<i class="fa-solid fa-greater-than brand-arrow2"></i>',    
        prevArrow: false,
        nextArrow: false
      });
      $('#colorful').colorfulTab();
      new WOW().init();
      // $('#Grid').mixitup();
});
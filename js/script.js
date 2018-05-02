$(document).ready(function() {
    $(document).on('click','.js-videoPoster',function(ev) {
      ev.preventDefault();
      var $poster = $(this);
      var $wrapper = $poster.closest('.js-videoWrapper');
      videoPlay($wrapper);
    });

    // play the targeted video (and hide the poster frame)
    function videoPlay($wrapper) {
      var $iframe = $wrapper.find('.js-videoIframe');
      var src = $iframe.data('src');
      // hide poster
      $wrapper.addClass('videoWrapperActive');
      // add iframe src in, starting the video
      $iframe.attr('src',src);
    }

    $('.blog-slider').slick({
    	slidesToShow: 3,
    	slidesToScroll: 1,
    	arrows: true,
        dots: false,
        prevArrow: '<img class="left" src="images/svg/arrow-left.svg"/>',
        nextArrow: '<img class="right" src="images/svg/arrow-right.svg"/>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 980,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    $('.testimonials-slider').slick({
    	slidesToShow: 3,
    	slidesToScroll: 1,
    	arrows: true,
        dots: false,
        prevArrow: '<img class="left" src="images/svg/arrow-left.svg"/>',
        nextArrow: '<img class="right" src="images/svg/arrow-right.svg"/>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 980,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    $('.slick').show();

});

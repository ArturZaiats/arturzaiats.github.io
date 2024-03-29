$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="src/icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="src/icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 955,
                settings: {
                dots: false,
                arrows: false,
                }
            }
        ]
      });

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active',);
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active',);
            })
          });
      };

      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');

    //   MODAL

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modall__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modall__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                  },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Введите Ваше имя",
                    minlength: jQuery.validator.format("Минимум {0} символа")
                  },
                phone: "Введите Ваш номер телефона",
                email: {
                    required: "Введите Ваше email",
                    email: "Неправильнаяя почта, попробуйте еще раз"
                }
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');
});
      
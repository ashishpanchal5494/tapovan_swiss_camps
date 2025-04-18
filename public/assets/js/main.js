(function ($) {
    "use strict";
    
    /*====================
    PRELOADER JS
    ======================*/
    $(window).on('load', function() {
        $('.preloader-style').fadeOut();
    });

    // Banner Slider
    var bannerSlider = $(".banner-slider");
    if (bannerSlider.length) {
        bannerSlider.owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: [
                "<i class='bx bx-chevron-left'></i>", 
                "<i class='bx bx-chevron-right'></i>"],
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 500,
            animateOut: "slideOutLeft",
            animateIn: "slideInRight",
            responsive: {
                0: {
                    nav: false
                },
                768: {
                    nav: false
                },
                992: {
                    nav: true
                },
                1200: {
                    nav: true
                }
            },
        });
    }
    
    // Open Search Box
    $('.searchbtn').on('click', function() {
        $('.search-area').toggleClass('open');
    });
    $('.close-searchbox').on('click', function() {
        $('.search-area').removeClass('open');
    });

    // Language Dropdown
    $(".language-option").each(function () {
        var each = $(this)
        each.find(".lang-name").html(each.find(".language-dropdown-menu a:nth-child(1)").text());
        var allOptions = $(".language-dropdown-menu").children('a');
        each.find(".language-dropdown-menu").on("click", "a", function () {
            allOptions.removeClass('selected');
            $(this).addClass('selected');
            $(this).closest(".language-option").find(".lang-name").html($(this).text());
        });
    })

    // Sticky Header
    var wind = $(window);
    var sticky = $('.header-wrap');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });

    // Responsive Menu
    $(window).on('resize', function() {
        if($(window).width() <= 1199) {
            $('.collapse.navbar-collapse').removeClass('collapse');
        }else{
            $('.navbar-collapse').addClass('collapse');
        }
    });
    $('.mobile-menu a').on('click', function() {
        $('.main-menu-wrap').addClass('open');
        $('.collapse.navbar-collapse').removeClass('collapse');
    });

    $('.mobile_menu a').on('click', function () {
        $(this).parent().toggleClass('open');
        $('.main-menu-wrap').toggleClass('open');
    });

    $('.menu-close').on('click', function () {
        $('.main-menu-wrap').removeClass('open')
    });
    $('.mobile-top-bar').on('click', function () {
        $('.header-top').addClass('open')
    });
    $('.close-header-top button').on('click', function () {
        $('.header-top').removeClass('open')
    });
    var $offcanvasNav = $('.navbar-nav'),
    $offcanvasNavSubMenu = $offcanvasNav.find('.dropdown-menu');
    $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="ri-arrow-down-s-line"></i></span>');
    $offcanvasNavSubMenu.slideUp();
    $offcanvasNav.on('click', 'li a, li .menu-expand', function (e) {
        var $this = $(this);
        if (($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.siblings('ul').slideUp('slow');
            } else {
                $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                $this.siblings('ul').slideDown('slow');
            }
        }
        if ($this.is('a') || $this.is('span') || $this.attr('class').match(/\b(menu-expand)\b/)) {
            $this.parent().toggleClass('menu-open');
        } else if ($this.is('li') && $this.attr('class').match(/\b('dropdown-menu')\b/)) {
            $this.toggleClass('menu-open');
        }
    });

    /*====================
    ODOMETER JS
    ======================*/
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    /*====================
    POPUP JS
    ======================*/
    $('.popup-youtube').magnificPopup({
        disableOn: 300,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });

    // Data Aos
    AOS.init({
        duration: 1200,
        once: true,
        disable: function() {
            var maxWidth = 991;
            return window.innerWidth < maxWidth;
        }
    })

    /*====================
    FAQ Accordion JS
    ======================*/
    $('.accordion').find('.accordion-title').on('click', function(){
        // Adds Active Class
        $(this).toggleClass('active');
        // Expand or Collapse This Panel
        $(this).next().slideToggle('fast');
        // Hide The Other Panels
        $('.accordion-content').not($(this).next()).slideUp('fast');
        // Removes Active Class From Other Titles
        $('.accordion-title').not($(this)).removeClass('active');       
    });

    // Contact Form Script
    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;

    // Success Function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 6000);
        form.find('input:not([type="submit"]), textarea').val('');
    }

    // Fail Function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-success');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 6000);
    }
    
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });
    
    var form2 = $('.subscribe__form'),
        message2 = $('.subscribe__msg'),
        form_data2;

    // Success Function 2
    function done_func2(response) {
        message2.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message2.text(response);
        setTimeout(function () {
            message2.fadeOut();
        }, 6000);
        form2.find('input:not([type="submit"]), textarea').val('');
    }

    // Fail Function 2
    function fail_func2(data) {
        message2.fadeIn().removeClass('alert-success').addClass('alert-success');
        message2.text(data.responseText);
        setTimeout(function () {
            message2.fadeOut();
        }, 6000);
    }

    form2.submit(function (e) {
        e.preventDefault();
        form_data2 = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form2.attr('action'),
            data: form_data2
        })
        .done(done_func2)
        .fail(fail_func2);
    });
    
    // Testimonial Slider
    $('.testimonial-slider').owlCarousel({
        nav: true,
        loop: true,
        dots: false,
        autoplay: false,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items:2,
                margin:30
            },
            992: {
                items:3,
                margin:40
            },
            1200:{
                items:3,
                margin:40
            }
        }
    });
    
    /*==================== 
    Team Slider
    ======================*/
    $('.team-slider').owlCarousel({
        loop:true,
        nav:false,
        mouseDrag:true,
        items:1,
        dots:true,
        autoplay:false,
        smartSpeed:1500,
        autoplayHoverPause:true,
        center:false,
        navText: [
            "<i class='bx bx-chevrons-left'></i>",
            "<i class='bx bx-chevrons-right'></i>"
        ],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2,
                margin:30
            },
            992:{
                items:4,
                margin:40
            },
            1200:{
                items:4,
                margin:40
            }
        }
    });

    /*==================== 
    Room Slider
    ======================*/
    $('.room-slider').owlCarousel({
        loop:true,
        nav:true,
        mouseDrag:true,
        items:1,
        dots:true,
        autoplay:false,
        smartSpeed:1500,
        autoplayHoverPause:true,
        center:false,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2,
                margin:0
            },
            992:{
                items:3,
                margin:0
            },
            1200:{
                items:3,
                margin:0
            }
        }
    });

    /*==================== 
    Blog Slider
    ======================*/
    $('.blog-slider').owlCarousel({
        loop:true,
        nav:false,
        mouseDrag:true,
        items:1,
        dots:true,
        autoplay:false,
        smartSpeed:1500,
        autoplayHoverPause:true,
        center:false,
        navText: [
            "<i class='bx bx-chevrons-left'></i>",
            "<i class='bx bx-chevrons-right'></i>"
        ],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2,
                margin:30
            },
            992:{
                items:3,
                margin:40
            },
            1200:{
                items:3,
                margin:40
            }
        }
    });

    //Back To Top
    function BackToTop() {
        $('.back-to-top').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 100);
            return false;
        });

        $(document).scroll(function () {
            var y = $(this).scrollTop();
            if (y > 600) {
                $('.back-to-top').fadeIn();
                $('.back-to-top').addClass('open');
            } else {
                $('.back-to-top').fadeOut();
                $('.back-to-top').removeClass('open');
            }
        });
    }
    BackToTop();

    /*====================
    Popup Image JS
    ======================*/
    $('.popup-btn').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });

    /*************************
        Slick Slider
    *************************/
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.slider-nav'
    });
    
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

    // Slider JS
    if ($('.slider-carousel').length) {

        $('.slider-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            active: true,
            smartSpeed: 1000,
            autoplay: 5000,
            navText: [ '<span class="bx bx-chevron-left"></span>', '<span class="bx bx-chevron-right"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                }
            }
        });

    }

})(jQuery);

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('clim_theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('clim_theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('clim_theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
    }
})();

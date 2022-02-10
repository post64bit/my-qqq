$(document).ready(function () {

    $('.burger, .menu__link').click(function () {
        $('.burger, .menu').toggleClass('active')
        $('body').toggleClass('lock')
        if(window.pageYOffset > 200) {
            $('.small-header').toggleClass('active')
        }
    })

    $(window).on('scroll', function() {
        $('.header__img').css({
            opacity: 1 - $(window).scrollTop() * 0.0035
        })
    });

    let mouseCursor = document.querySelector('.cursor')
    window.addEventListener('mousemove', cursor)
    function cursor(e) {
        mouseCursor.style.top = e.clientY + 'px'
        mouseCursor.style.left = e.clientX + 'px'
    }

    let smallHeader = document.querySelector('.small-header')
    let burger = document.querySelector('.burger')
    window.addEventListener('scroll', showSmallHeader)
    function showSmallHeader() {
        if(window.pageYOffset > 200) {
            smallHeader.classList.add('active')
            burger.classList.add('new-position')
            if( document.location.pathname.includes('bio') || document.location.pathname.includes('address')) {
                burger.classList.add('bio-burger-black')
            }
        } else {
            smallHeader.classList.remove('active')
            burger.classList.remove('new-position')
            burger.classList.remove('bio-burger-black')
        }
    }

    window.addEventListener("scroll", function () {
        if (document.location.pathname.includes('bio')) {
            document.querySelector('.story__bigstar')
                .style.transform = "rotate(" + window.pageYOffset / 5 + "deg)";
            document.querySelector('.entrep__lilstar')
                .style.transform = "rotate(" + -window.pageYOffset / 5 + "deg)";
            document.querySelector('.prefooter__star-1')
                .style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
            document.querySelector('.prefooter__star-2')
                .style.transform = "rotate(" + -window.pageYOffset / 5 + "deg)";
        } else if (!document.location.pathname.includes('bio') && !document.location.pathname.includes('address')) {
            document.querySelector('.business__lilstar')
                .style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
            document.querySelector('.business__bigstar')
                .style.transform = "rotate(" + -window.pageYOffset / 5 + "deg)";
            document.querySelector('.media__lilstar')
                .style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
            document.querySelector('.media__bigstar')
                .style.transform = "rotate(" + -window.pageYOffset / 5 + "deg)";
        }
    });

    $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });

    new Rellax('.rellax', {
        breakpoints: [0, 801, 1201]
    })
    new Rellax('.parellax', {
        breakpoints: [0, 801, 1201],
        horizontal: true
    })

    for (let i = 1; i < 20; i++) {
        new Parallax(document.getElementById(`scene${i}`));
    }

})

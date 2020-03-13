$(document).ready(function () {
    let viewportHeight = $(window).height();
    let headerHeight = $('header').height();
    let jumbotronHeight = viewportHeight - headerHeight;
    $('.jumbotron').css('marginTop', headerHeight);
    $('.jumbotron').css('height', jumbotronHeight);

    if ($(window).width() > 760) {
        $('.jumbotron').css('height', jumbotronHeight/2);
    } 
    
    if ($(window).width() > 900) {
        let newHeight = (jumbotronHeight/2) + 100;
        $('.jumbotron').css('height', newHeight);
    }

    if ($(window).width() > 1100) {
        let newHeight = (jumbotronHeight/2) + 300;
        $('.jumbotron').css('height', newHeight);
    }

    $('.covid_alert_close').click(function () {
        $('.covid_alert').addClass('covid_alert_hide');
        $('.jumbo_logo_container').addClass('jumbo_logo_container_slideup');
        $('.jumbo_content').css('marginTop', '0');

    });

    function opacityAnimate() {
        $('.anim-text-soluciones').each(function (index) {
            $(this).addClass('anim-text-soluciones' + index);
            let divTop = $('.anim-text-soluciones' + index).offset().top;
            let contactScreenTop = $(window).scrollTop() + $(window).height();
            if (divTop < (contactScreenTop - 100)) {
                $('.anim-text-soluciones' + index).addClass('contact_div_show');
            }
        });
    }

    function slideUp() {
        $('.hin-beneficios-col').each(function (i) {
            $(this).addClass('hin-beneficios-col' + i);
            let colTop = $('.hin-beneficios-col' + i).offset().top;
            let contactScreenTop = $(window).scrollTop() + $(window).height();
            if (colTop < (contactScreenTop - 100)) {
                $('.hin-beneficios-col' + i).addClass('beneficios_slideUp');
            }
        });
    }

    function headerMinimize() {
        if ($(window).width() > 1000) {
            $('header').addClass('header_minimize');
        }
    }

    $(window).scroll(function () {
        opacityAnimate();
        slideUp();
        headerMinimize();
    });

    $('.contact_form_container').hide();

    $('.contact_form_btn').click(function () {
        $('.contact_form_container').slideDown("slow");
        setTimeout(function () {
            document.querySelector('.contact_form_container').scrollIntoView({
                behavior: 'smooth'
            });
        }, 500);
    });

    if ($(window).width() > 1000) {
        $('.jumbo_form_submit_btn').appendTo('.select_container');
    }
    
});
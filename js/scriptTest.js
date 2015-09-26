$(document).ready(function () {
    $('.banners-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: false
    });

    $("#email").focus(function () {
        $(this).attr('placeholder', '');
    });
    $("#email").blur(function () {
        $(this).attr('placeholder', 'Your e-mail');
    });

    $("#password").focus(function () {
        $(this).attr('placeholder', '');
        $(this).attr('type', 'password');
    });

    $("#password").blur(function () {
        $(this).attr('placeholder', 'Your password');

    });



    $('.slider-bottom').slick({
        dots: false,
        infinite: true,
        speed: 100,
        fade: true,
        cssEase: 'linear'       
    });

    

      
        $(function () {
            $(".char9 h4").each(function (i) {
                len = $(this).text().length;
                if (len > 9) {
                    $(this).text($(this).text().substr(0,09) + '...');
                }
            });
        });
        
        if ($('.char8 h4').text().length > 8) {
            $('.char8 h4').text($('.char8 h4').text().substring(0,08) + "...");
        }

        if ($('.char10 h4').text().length > 10) {
            $('.char10 h4').text($('.char10 h4').text().substring(0,10) + "...");
        }
        if ($('#footer h3').text().length > 25) {
            $('#footer h3').text($('#footer h3').text().substring(0, 25) + "...");
        }
    
        $(".description").hide();
        $(".see-more").click(function () {
            $(this).next(".description").toggle();
            
        });
       
        $(".see-more").click(function (e) {
            e.preventDefault();
            $(this).find(".number")
                    .toggleClass("bg-black");
            });

        $(".description-small-btn").hide();
        $(".see-more").click(function () {
            $(this).next(".description-small-btn").toggle();
        });

      
       
    $(".hidden-buttons").hide();
    $("#view-more").click(function () {
        $('.hidden-buttons').slideToggle();
    });
     
   
    
   
    var screen = $(window).width();
    if (screen >= 1024) {
        $("#modaltrigger").click(function () {
            $('.login-form').fadeToggle(1000);
        });
    }
    else {
        $('#modaltrigger').leanModal({ top: 110, overlay: 0.8, closeButton: ".hidemodal" });
    }
    
    
    $(function () {
        $('#loginform').submit(function (e) {
            return false;
        });

       
    });


    

});
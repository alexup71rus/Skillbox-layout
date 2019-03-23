var imageElms, menuMobileShow = false, scrollEnabled = true;
// $(window).resize(function(){
//     if(document.documentElement.clientWidth >= 1024){
//         $(".top-menu__list_menu").removeClass("showM");
//     }
// });

$(document).ready(function(){
    var menuList = $(".top-menu__list_menu");
    $(document).click(function(){
        if(menuList.css("height") >= "10px" && menuMobileShow == true) {
            menuList.removeClass("showM");
        }
    });

    $("#burger-menu").click(function(){
        menuList.addClass("showM");
        menuMobileShow = true;
    });

    $('a').click( function(){
	    var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
	        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
        }
	    // return false;
    });

    // imageElms = $(".section__slider_container");
    // $gallery = $('.section__slider');

    $(".section__slider").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });

    $("#scroll-left").click(function(){
    });

    $("#scroll-right").click(function(){
    });



    // 



    var window_recall = //html
`<i id="window_bg" onclick="$('#windows').fadeOut('fast', function(){$(this).html('')}); document.body.style.overflow = 'overlay';"></i>
<div id="window"><i class="fas fa-times close" onclick="$('#windows').fadeOut('fast', function(){$(this).html('')}); document.body.style.overflow = 'overlay';"></i>
    <div class="window-content">
    <p>Имя:</p>
    <input type="text" class='input' name="name" id="name" placeholder="Имя">
    <p>Телефон:</p>
    <input type="phone" class='input' name="phone" id="phone" placeholder="+7 (999) 999-99-99">
    <input type="button" value="Отправить" name="send" id="send">
    </div>
</div>
`;
    var window_buy = //html
`<i id="window_bg" onclick="$('#windows').fadeOut('fast', function(){$(this).html('')}); document.body.style.overflow = 'overlay';"></i>
<div id="window"><i class="fas fa-times close" onclick="$('#windows').fadeOut('fast', function(){$(this).html('')}); document.body.style.overflow = 'overlay';"></i>
    <div class="window-content">
        <p>Имя:</p>
        <input type="text" class='input' name="name" id="name" placeholder="Имя">
        <p>Телефон:</p>
        <input type="phone" class='input' name="phone" id="phone" placeholder="+7 (999) 999-99-99">
        <p>Почта:</p>
        <input type="email" class='input' name="email" id="email" placeholder="mail@gmail.com">
        <input type="button" value="Отправить" name="send" id="send">
    </div>
</div>
`;
    $(".button_call").click(function(){
        $("#windows").hide().html(window_recall).fadeIn();
        $("#window").fadeIn("slow");
        // $("#window").animate({}, 500);
        document.body.style.overflow = 'hidden';
    });

    $(".button_buy").click(function(){
        $("#windows").hide().html(window_buy).fadeIn();
        $("#window").fadeIn("slow");
        document.body.style.overflow = 'hidden';
    });
});
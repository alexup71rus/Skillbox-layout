'use strict';
var imageElms, menuMobileShow = false;
var templateMailRecall = "Имя: {{name}}<br />Телефон: {{phone}}";
var templateMailChat = "Имя: {{name}}<br />Телефон: {{phone}}<br />Почта: {{mail}}";
var template;

$(document).ready(function(){
    var popupChat = $("#popup-chat");
    var popupRecall = $("#popup-recall");
    var popupBG = $("#popup_bg");

    // включение мобильного меню
    var menuList = $(".top-menu__list_menu");
    $(document).click(function(){
        if(menuList.css("height") >= "1px" && menuMobileShow == true) {
            menuList.removeClass("show-mobile-menu");
        }
    });

    $("#burger-menu").click(function(){
        menuList.addClass("show-mobile-menu");
        menuMobileShow = true;
    });

    // плавный скролл
    $('a').click( function(){
        var scroll_el = this.hash;
        if (scroll_el.length > 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
        }
    });

    $(".section__slider").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });


    //вызов модальных окон
    $(".button_call").click(function(){
        popupRecall.fadeIn();
        popupBG.fadeIn();
        document.body.style.overflow = 'hidden';
    });

    $(".button_buy").click(function(){
        popupChat.fadeIn();
        popupBG.fadeIn();
        document.body.style.overflow = 'hidden';
    });

    // валидация форм и отправка писем
    popupRecall[0].childNodes[3].childNodes[9].addEventListener('click', function (e) {
        if (!popupRecall[0].childNodes[3].childNodes[3].value) {
            popupRecall[0].childNodes[3].childNodes[3].style.outline = '2px solid red';
            e.preventDefault();
        } else {
            popupRecall[0].childNodes[3].childNodes[3].style.outline = 'none';
        }

        if (!popupRecall[0].childNodes[3].childNodes[7].value) {
            popupRecall[0].childNodes[3].childNodes[7].style.outline = '2px solid red';
            e.preventDefault();
        } else {
            popupRecall[0].childNodes[3].childNodes[7].style.outline = 'none';
        }

        if (popupRecall[0].childNodes[3].childNodes[3].value && popupRecall[0].childNodes[3].childNodes[7].value) {
            template = templateMailRecall.replace('{{name}}', popupRecall[0].childNodes[3].childNodes[3].value),
                template = template.replace('{{phone}}', popupRecall[0].childNodes[3].childNodes[7].value);
            
            popupRecall[0].childNodes[3].childNodes[9].href += template;
        } else {
            e.preventDefault();
        }
    });

    popupChat[0].childNodes[3].childNodes[13].addEventListener('click', function (e) {
        if (!popupChat[0].childNodes[3].childNodes[3].value) {
            popupChat[0].childNodes[3].childNodes[3].style.outline = '2px solid red';
            e.preventDefault();
        } else {
            popupChat[0].childNodes[3].childNodes[3].style.outline = 'none';
        }

        if (!popupChat[0].childNodes[3].childNodes[7].value) {
            popupChat[0].childNodes[3].childNodes[7].style.outline = '2px solid red';
            e.preventDefault();
        } else {
            popupChat[0].childNodes[3].childNodes[7].style.outline = 'none';
        }

        if (!popupChat[0].childNodes[3].childNodes[11].value) {
            popupChat[0].childNodes[3].childNodes[11].style.outline = '2px solid red';
            e.preventDefault();
        } else {
            popupChat[0].childNodes[3].childNodes[11].style.outline = 'none';
        }

        if (popupChat[0].childNodes[3].childNodes[3].value && popupChat[0].childNodes[3].childNodes[7].value && popupChat[0].childNodes[3].childNodes[11].value) {
            template = templateMailChat.replace('{{name}}', popupChat[0].childNodes[3].childNodes[3].value),
                template = template.replace('{{phone}}', popupChat[0].childNodes[3].childNodes[7].value),
                template = template.replace('{{mail}}', popupChat[0].childNodes[3].childNodes[11].value);

            popupChat[0].childNodes[3].childNodes[13].href += template;
        } else {
            e.preventDefault();
        }
    });
});
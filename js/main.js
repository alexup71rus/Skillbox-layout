'use strict';

var templateMailRecall = "Имя: {{name}}<br />Телефон: {{phone}}";
var templateMailChat = "Имя: {{name}}<br />Телефон: {{phone}}<br />Почта: {{mail}}";
var template;

$(document).ready(function(){
    var popupChat = $("#popup-chat");
    var popupRecall = $("#popup-recall");
    var popupBG = $("#popup_bg");

    $(".phone-number").mask("+7 (999) 999-99-99");

    // включение мобильного меню
    var menuList = $(".top-menu__list_menu");
    $(menuList).click(function(){
        if(menuList.css("height") != "0px") {
            menuList.removeClass("show-mobile-menu");
        }
    });

    $("#burger-menu").click(function(){
        menuList.addClass("show-mobile-menu");
    });

    $(window).resize(function(){
        menuList.removeClass("show-mobile-menu");
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
    $("#button_send-recall").click(function(e) {
        var userName = $('.name');
        var phoneNumber = $('.phone-number');
        if (!userName.val()) {
            userName.css("outline", '2px solid red');
            e.preventDefault();
        } else {
            userName.css("outline", 'none');
        }

        if (!phoneNumber.val()) {
            phoneNumber.css("outline", '2px solid red');
            e.preventDefault();
        } else {
            phoneNumber.css("outline", 'none');
        }

        if (userName.val() && phoneNumber.val()) {
            template = templateMailRecall.replace('{{name}}', userName.val()),
                template = template.replace('{{phone}}', phoneNumber.val());

            var uri = $("#button_send-recall").attr("href") + template;
            $("#button_send-recall").attr("href", uri);
        } else {
            e.preventDefault();
        }
    });

    $("#button_send-chat").click(function (e) {
        var userName = $($('.name')[1]);
        var phoneNumber = $($('.phone-number')[1]);
        var email = $($('.email')[0]);

        if (!userName.val()) {
            userName.css("outline", '2px solid red');
            e.preventDefault();
        } else {
            userName.css("outline", 'none');
        }

        if (!phoneNumber.val()) {
            phoneNumber.css("outline", '2px solid red');
            e.preventDefault();
        } else {
            phoneNumber.css("outline", 'none');
        }

        if (!email.val()) {
            email.css("outline", '2px solid red');
            e.preventDefault();
        } else {
            email.css("outline", 'none');
        }

        if (userName.val() && phoneNumber.val() && email.val()) {
            template = templateMailChat.replace('{{name}}', popupChat[0].childNodes[3].childNodes[3].value),
                template = template.replace('{{phone}}', popupChat[0].childNodes[3].childNodes[7].value),
                template = template.replace('{{mail}}', popupChat[0].childNodes[3].childNodes[11].value);

            var uri = $("#button_send-chat").attr("href") + template;
            $("#button_send-chat").attr("href", uri);
        } else {
            e.preventDefault();
        }
    });
});
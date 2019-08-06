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

    // slick
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
        var userName = $('#form-recall_name-input');
        var phoneNumber = $('#form-recall_phone-input');
        
        validate(userName, phoneNumber);

        if (userName.val() && phoneNumber.val()) {
            template = templateMailRecall.replace('{{name}}', userName.val()),
                template = template.replace('{{phone}}', phoneNumber.val());

            var uri = $("#popup-recall form").attr("action") + template;
            window.open(uri, "_blank");
        }
        e.preventDefault();
    });

    $("#button_send-chat").click(function (e) {
        var userName = $('#form-chat_name-input');
        var phoneNumber = $('#form-chat_phone-input');
        var email = $('#form-chat_email-input');

        validate(userName, phoneNumber, email);

        if (userName.val() && phoneNumber.val() && email.val()) {
            template = templateMailChat.replace('{{name}}', userName.val()),
                template = template.replace('{{phone}}', phoneNumber.val()),
                template = template.replace('{{mail}}', email.val());

            var uri = $("#popup-chat form").attr("action") + template;
            window.open(uri, "_blank");
        }
        e.preventDefault();
    });
});

function validate() {
    [].forEach.call(arguments, function (element) {
        if (element.attr('required') && ! element.val()) {
            element.css("outline", '2px solid red');
        } else {
            element.css("outline", 'none');
        }
    });
}

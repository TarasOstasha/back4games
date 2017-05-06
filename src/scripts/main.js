$(document).ready(function(){

    //**button scroll to top**//
    // $(window).scroll(function() {
    //     if ( $(window).scrollTop() > 300 ) {
    //         $('a.back-to-top').fadeIn('slow');
    //     } else {
    //         $('a.back-to-top').fadeOut('slow');
    //     }
    // });

    $('a.back-to-top').click(function() {
	    $('html,body').animate({
	        scrollTop: 0
	    }, 1000);
    		return false;
	});



    // **form validation**//
    (function( $ ){
        $(function() {
            $('#application').each(function(){
                //oбявлення перемінної(форма і кнопка відправки)
                var form = $(this),
                    btn = form.find('#btn');
                //додаємо кожному полю котре перевіряємо, вказуємо що поле пусте
                form.find('.rfield').addClass('empty_field');
                //функція провірки полів форми
                function checkInput(){
                    form.find('.rfield').each(function(){
                        if($(this).val() != ''){
                            //якщо поле не пусте то видаляємо клас-указание
                            $(this).removeClass('empty_field');
                        } else {
                            // якщо поле пусте додаємо класс-указание
                            $(this).addClass('empty_field');
                        }
                    });
                }

                // функція підсвідки незаповнених полів
                function lightEmpty(){
                    form.find('.empty_field').css({'border-color':'#d8512d'});
                    // через півсекунди видаляємо підсвідку
                    setTimeout(function(){
                        form.find('.empty_field').removeAttr('style');
                    },500);
                }

                // перевірка в режимі реального часу
                setInterval(function(){
                    //запускаємо функцію перевірки полів на заповненість
                    checkInput();
                    //рахуємо кількість незаповнених полів
                    var sizeEmpty = form.find('.empty_field').size();
                    // Вешаем условие-тригер на кнопку отправки формы
                    if(sizeEmpty > 0){
                        if(btn.hasClass('disabled')){
                            return false
                        } else {
                            btn.addClass('disabled')
                        }
                    } else {
                        btn.removeClass('disabled')
                    }
                },500);

                // Событие клика по кнопке отправить
                btn.click(function(){
                    if($(this).hasClass('disabled')){
                        // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
                        lightEmpty();
                        return false
                    }
                });
            });
        });

    })( jQuery );


    //**transition download page**//
    $("body").css("display", "none");
    $("body").fadeIn(2000);
    $("a.transition").click(function(event){
        event.preventDefault();
        //linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
    });
    function redirectPage() {
        window.location = linkLocation;
    }
    //**download page transition end**//

});






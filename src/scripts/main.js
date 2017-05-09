$(document).ready(function(){

    //**button scroll to top**//
    $(window).scroll(function() {
        if ( $(window).scrollTop() > 300 ) {
            $('a.back-to-top').fadeIn('slow');
        } else {
            $('a.back-to-top').fadeOut('slow');
        }
    });
    //
    $('a.back-to-top').click(function() {
	    $('html,body').animate({
	        scrollTop: 0
	    }, 1000);
    		return false;
    });

    // //**transition download page**//
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
    // //**download page transition end**//

    // //**slider top**//
    $(function() {
        $('#slider').carouFredSel({
            width: '100%',
            align: false,
            items: 3,
            items: {
                width: $('#wrapper').width() * 0.15,
                height: 500,
                visible: 1,
                minimum: 1
            },
            scroll: {
                items: 1,
                timeoutDuration : 5000,
                onBefore: function(data) {

                    //	find current and next slide
                    var currentSlide = $('.slide.active', this),
                        nextSlide = data.items.visible,
                        _width = $('#wrapper').width();

                    //	resize currentslide to small version
                    currentSlide.stop().animate({
                        width: _width * 0.15
                    });
                    currentSlide.removeClass( 'active' );

                    //	hide current block
                    data.items.old.add( data.items.visible ).find( '.slide-block' ).stop().fadeOut();

                    //	animate clicked slide to large size
                    nextSlide.addClass( 'active' );
                    nextSlide.stop().animate({
                        width: _width * 0.7
                    });
                },
                onAfter: function(data) {
                    //	show active slide block
                    data.items.visible.last().find( '.slide-block' ).stop().fadeIn();
                }
            },
            onCreate: function(data){

                //	clone images for better sliding and insert them dynamacly in slider
                var newitems = $('.slide',this).clone( true ),
                    _width = $('#wrapper').width();

                $(this).trigger( 'insertItem', [newitems, newitems.length, false] );

                //	show images
                $('.slide', this).fadeIn();
                $('.slide:first-child', this).addClass( 'active' );
                $('.slide', this).width( _width * 0.15 );

                //	enlarge first slide
                $('.slide:first-child', this).animate({
                    width: _width * 0.7
                });

                //	show first title block and hide the rest
                $(this).find( '.slide-block' ).hide();
                $(this).find( '.slide.active .slide-block' ).stop().fadeIn();
            }
        });

        //	Handle click events
        $('#slider').children().click(function() {
            $('#slider').trigger( 'slideTo', [this] );
        });

        //	Enable code below if you want to support browser resizing
        $(window).resize(function(){

            var slider = $('#slider'),
                _width = $('#wrapper').width();

            //	show images
            slider.find( '.slide' ).width( _width * 0.15 );

            //	enlarge first slide
            slider.find( '.slide.active' ).width( _width * 0.7 );

            //	update item width config
            slider.trigger( 'configuration', ['items.width', _width * 0.15] );
        });

    });

    //**filter list**//
    // $("#myList").listnav({
    //     //currently letter start//
    //     initLetter: 'a',
    //     //false to show all elements//
    //     includeAll: false,
    //     //disabled when no element//
    //     flagDisabled: true,
    //     //delete search to number//
    //     includeNums:false
    // });

    var data = [
        {
            title: "RainbowSix: Siege",
            saleInfo: "-25% offer",
            languages: ["en", "ru"],
            categories: ["Action","Multy-palyer","Shooter"],
            platform: ["windows"],
            activation: ["/images/main/steam.png","images/main/ulpay.png"],
            publisher: ["ubisoft"],
            release_data: ["2015"],
            imageUrl: "images/main/slider2-img1.png",
            totalPrice: 25.99,
            id: 1,
            offerEstimateDate: "11/05/2017T14:00Z"
        },
        {
            title: "Call off Duty",
            saleInfo: "-15% offer",
            languages: ["en", "ru"],
            categories: ["Action","Multy-palyer","Shooter"],
            platform: ["windows"],
            activation: ["/images/main/steam.png","images/main/ulpay.png"],
            publisher: ["ubisoft"],
            release_data: ["2016"],
            imageUrl: "images/main/slider2-img1.png",
            totalPrice: 25.99,
            id: 2,
            offerEstimateDate: "11/05/2017T14:00Z"
        },
        {
            title: "RainbowSix: Siege",
            saleInfo: "-40% offer",
            languages: ["en", "ru"],
            categories: ["Action","Multy-palyer","Shooter"],
            platform: ["windows"],
            activation: ["/images/main/steam.png","images/main/ulpay.png"],
            publisher: ["ubisoft"],
            release_data: ["2019"],
            imageUrl: "images/main/slider2-img1.png",
            totalPrice: 44.99,
            id: 3,
            offerEstimateDate: "11/05/2017T14:00Z"
        },
        {
            title: "RainbowSix: Siege",
            saleInfo: "-10% offer",
            languages: ["en", "ru"],
            categories: ["Multy-palyer","Shooter"],
            platform: ["windows"],
            activation: ["/images/main/steam.png","images/main/ulpay.png"],
            publisher: ["ubisoft"],
            release_data: ["2014"],
            imageUrl: "images/main/slider2-img1.png",
            totalPrice: 35.99,
            id: 4,
            offerEstimateDate: "11/05/2017T14:00Z"
        },
        {
            title: "RainbowSix: Siege",
            saleInfo: "-90% offer",
            languages: ["en", "ru"],
            categories: ["Action","Multy-palyer"],
            platform: ["windows"],
            activation: ["/images/main/steam.png","images/main/ulpay.png"],
            publisher: ["ubisoft","eagames"],
            release_data: ["2010"],
            imageUrl: "images/main/slider2-img1.png",
            totalPrice: 55.99,
            id: 5,
            offerEstimateDate: "11/05/2017T14:00Z"
        },
        {
            title: "RainbowSix: Siege",
            saleInfo: "-40% offer",
            languages: ["en", "ru"],
            categories: ["Action","Multy-palyer"],
            platform: ["windows"],
            activation: ["/images/main/steam.png","images/main/ulpay.png"],
            publisher: ["ubisoft","eagames"],
            release_data: ["2010"],
            imageUrl: "images/main/slider2-img1.png",
            totalPrice: 55.99,
            id: 5,
            offerEstimateDate: "11/05/2017T14:00Z"
        },
        {
            title: "RainbowSix: Siege",
            saleInfo: "-60% offer",
            languages: ["en", "ru"],
            categories: ["Action","Multy-palyer"],
            platform: ["windows"],
            activation: ["/images/main/steam.png","images/main/ulpay.png"],
            publisher: ["ubisoft","eagames"],
            release_data: ["2010"],
            imageUrl: "images/main/slider2-img1.png",
            totalPrice: 55.99,
            id: 5,
            offerEstimateDate: "11/05/2017T14:00Z"
        },
        {
            title: "RainbowSix: Siege",
            saleInfo: "-50% offer",
            languages: ["en", "ru"],
            categories: ["Action","Multy-palyer"],
            platform: ["windows"],
            activation: ["/images/main/steam.png","images/main/ulpay.png"],
            publisher: ["ubisoft","eagames"],
            release_data: ["2010"],
            imageUrl: "images/main/slider2-img1.png",
            totalPrice: 55.99,
            id: 5,
            offerEstimateDate: "11/05/2017T14:00Z"
        }
    ];

    var $flipsterContainer = $("#carousel > ul");
    $(data).each(function(i, currentDataItem) {
        /*
         <div class="active-title active">
             Spesial offer
             <span class="time">
                24:15:75
             </span>
         </div>
         */

        var $li = $("<li>");
        $li.addClass("hot-offers-item");
        $li.get(0).__data = currentDataItem;
        $flipsterContainer.append($li);
        var specialOfferHtml = '<div class="active-title">\
            Spesial offer\
            <span class="time" data-estimate-date="' + currentDataItem.offerEstimateDate + '">\
                24:15:75\
            </span>\
            </div>';
        $(specialOfferHtml).appendTo($li);
        $("<img>").attr("src", currentDataItem.imageUrl).appendTo($li);
    });

    var $title = $("#title");
    var $saleInfo = $("#saleInfo");
    var $lenguages = $("#lenguages");
    var $platform = $("#platform");
    var $activation = $("#activation");
    var $publisher = $("#publisher");
    var $releaseData = $("#release_data");
    var $totalPrice = $("#totalPrice");
    var $linkSlide = $("#linkSlide");
    var $btnByNow = $('#BtnByNow');
    $btnByNow.click(function () {
        var id = this.getAttribute('data-id');
        $.ajax({
            url: "script.php", //change url add to cart handler
            method: "POST",
            data: { id : id },
            dataType: "json"
        })
    });
    //**slider info**//
    $(function() {
        var myFlipster =   $('#carousel').flipster({
            style: 'carousel',
            spacing: -0.5,
            nav: false,
            itemSelector: 'li',
            start: 'center',
            fadeIn: 400,
            loop: true,
            autoplay: false,
            pauseOnHover: true,
            click: true,
            keyboard: true,
            scrollwheel: false,
            touch: true,
            onItemSwitch: function(currentItem, previousItem) {
                // console.dir(currentItem);
                //$saleInfo.html(JSON.stringify(dataToDisplay));

                load($(currentItem), $(previousItem));
            }
        });



        myFlipster.flipster('jump', 0);
        var dataMiddleIndex = Math.round(data.length / 2)
        myFlipster.flipster('jump', dataMiddleIndex);

        myFlipster.flipster('play', 5000); // Set autoplay duration
        load($($flipsterContainer.children()[dataMiddleIndex]));


        function load($el, $prev) {
            $el.addClass("active");
            if ($prev && $prev.length) {
                $prev.removeClass("active");
            }

            var dataToDisplay = $el.get(0).__data;

            $saleInfo.html(dataToDisplay.saleInfo);
            $title.html(dataToDisplay.title);
            $lenguages.html(dataToDisplay.languages.join(","));
            $platform.html(dataToDisplay.platform.join(","));
            $publisher.html(dataToDisplay.publisher.join(","));
            $releaseData.html(dataToDisplay.release_data.join(","));
            $totalPrice.html(dataToDisplay.totalPrice);
            $linkSlide.html("");
            var categories = dataToDisplay.categories;
            for (var i = 0; i < categories.length; i++) {
                var currentCategory = categories[i];
                var li = $("<li>");
                var a = $("<a href='#'>");
                a.text(currentCategory);
                a.appendTo(li);
                li.appendTo($linkSlide);
            }
            var activation = dataToDisplay.activation;
            $activation.html("");
            for (var i = 0; i < activation.length; i++) {
                var currentImg = activation[i];
                var img = $("<img>");
                img.attr("src",currentImg);
                img.appendTo($activation);
            }
        }
    });
    //**tabslet**//
    $(function () {
        $('.tabs').tabslet({
            mouseevent: 'click',
            attribute: 'href',
            animation: true
        });
    });


    //**chart**//
    var ctx = $("#myChart");
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        options: {
            cutoutPercentage: 90,
            animation:{
                animateScale:true
            },
            responsive: true
        },
        // responsive: true,
        percentageInnerCutout: 10,
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            indexLabelPlacement: "outside",

            datasets: [{
                label: '# of Votes',
                backgroundColor: [
                    "#f3f3f3",
                    "#1c1919"
                ],
                hoverBackgroundColor: [
                    "#eb5937",
                    "#f3f3f3"
                ],
                 data: [80, 20],
                borderColor: "#1c1919",
                pointRadius: 10,
                label:['ddsfdsf','dsfdsf']

            }]
        }
    });


});





// var d = new Date
// undefined
// d
// Tue May 09 2017 18:50:31 GMT+0300 (Eastern Europe Daylight Time)
// d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
// "18:50:31"
// var end = new Date("11/05/2017 14:00")
// undefined
// var diff = end - new Date
// undefined
// diff.getHours() + ":" + diff.getMinutes() + ":" + diff.getSeconds()
// VM6715:1 Uncaught TypeError: diff.getHours is not a function
// at <anonymous>:1:6
// (anonymous) @ VM6715:1
// diff = new Date(diff)
// Mon Jun 29 1970 23:08:13 GMT+0300 (Eastern Europe Daylight Time)
// diff.getHours() + ":" + diff.getMinutes() + ":" + diff.getSeconds()
// "23:8:13"


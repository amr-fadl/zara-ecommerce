

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });




    /*------------------
    Navigation
    --------------------*/

    var btnSrch = $(".header-top .input-group button")
    var Search = $(".Search")
    btnSrch.click(function () {
        Search.toggle()
    })

    // var logoHid = $(".logo-mega a")
    // var navScroll = $("#navbar").offset().top
    var prevScrollpos = window.pageYOffset;

    window.onscroll = function () {
        // var navhit = $("#navbar").height()
        // var docScroll = $(document).scrollTop()
        // if (docScroll >= navScroll + navhit) {
        //     logoHid.css("visibility", "visible")
        // } else {
        //     logoHid.css("visibility", "hidden")
        // }


        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos >= currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;

    }

    // start nav Collection

    // start nav Collection the wear//
    let imgcoll1 = $(".img-coll-1 img")
    $(".wear-department .single-menu li:nth-child(1)").hover(function () {
        imgcoll1.attr('src', 'img/nav/man-nav.png');
    })
    $(".wear-department .single-menu li:nth-child(3)").hover(function () {
        imgcoll1.attr('src', 'img/nav/man-2-nav.png');
    })
    $(".wear-department .single-menu li:nth-child(2)").hover(function () {
        imgcoll1.attr('src', 'img/nav/women-nav.png');
    })
    $(".wear-department .single-menu li:nth-child(4)").hover(function () {
        imgcoll1.attr('src', 'img/nav/women-2-nav.png');
    })
    // End nav Collection the wear//

    // start nav Collection the phones//
    let imgcoll2 = $(".img-coll-2 img")
    $(".Phones-department .single-menu li:nth-child(1)").hover(function () {
        imgcoll2.attr('src', 'img/nav/nav-iphone.png');
    })
    $(".Phones-department .single-menu li:nth-child(2)").hover(function () {
        imgcoll2.attr('src', 'img/nav/nav-oppo.png');
    })
    $(".Phones-department .single-menu li:nth-child(3)").hover(function () {
        imgcoll2.attr('src', 'img/nav/nav-samsung.png');
    })
    $(".Phones-department .single-menu li:nth-child(4)").hover(function () {
        imgcoll2.attr('src', 'img/nav/nav-Huawei.png');
    })
    // End nav Collection the phones//

    // start nav Collection the phones//
    let imgcoll3 = $(".img-coll-3 img")
    $(".Electronics-department .single-menu li:nth-child(1)").hover(function () {
        imgcoll3.attr('src', 'img/nav/nav-Digital-Cameras.png');
    })
    $(".Electronics-department .single-menu li:nth-child(2)").hover(function () {
        imgcoll3.attr('src', 'img/nav/nav-Lcd.png');
    })
    $(".Electronics-department .single-menu li:nth-child(3)").hover(function () {
        imgcoll3.attr('src', 'img/nav/nav-laptops.jpg');
    })
    $(".Electronics-department .single-menu li:nth-child(4)").hover(function () {
        imgcoll3.attr('src', 'img/nav/nav-watch.jpg');
    })
    $(".Electronics-department .single-menu li:nth-child(5)").hover(function () {
        imgcoll3.attr('src', 'img/nav/nav-accessories.png');
    })

    // End nav Collection the phones//

    ///////////////////////////////////////////////////////////////////////////////

    // start nav mega sport ///////
    // start nav wear sport //
    let WearSport = $(".img-sport-1 img")
    $(".wear-Shoes-sport ul li:nth-child(1)").hover(function () {
        WearSport.attr('src', 'img/nav/sport-man-shos.png');
    })
    $(".wear-Shoes-sport ul li:nth-child(2)").hover(function () {
        WearSport.attr('src', 'img/nav/sport-man.png');
    })
    $(".wear-Shoes-sport ul li:nth-child(3)").hover(function () {
        WearSport.attr('src', 'img/nav/sport-women-shos.png');
    })
    $(".wear-Shoes-sport ul li:nth-child(4)").hover(function () {
        WearSport.attr('src', 'img/nav/sport-women.png');
    })

    // start nav shop by sport //
    let shopSport = $(".img-sport-2 img")
    $(".shop-Sport ul li:nth-child(1)").hover(function () {
        shopSport.attr('src', 'img/nav/sport-Football.png');
    })
    $(".shop-Sport ul li:nth-child(2)").hover(function () {
        shopSport.attr('src', 'img/nav/sport-yoga.png');
    })
    $(".shop-Sport ul li:nth-child(3)").hover(function () {
        shopSport.attr('src', 'img/nav/sport-Tennis.png');
    })
    $(".shop-Sport ul li:nth-child(4)").hover(function () {
        shopSport.attr('src', 'img/nav/sport-boxing.png');
    })
    $(".shop-Sport ul li:nth-child(5)").hover(function () {
        shopSport.attr('src', 'img/nav/sport-WaterSports.png');
    })

    // start nav shop by sport //
    let brandSport = $(".img-sport-2 img")
    $(".shop-Sport ul li:nth-child(1)").hover(function () {
        brandSport.attr('src', 'img/nav/sport-Football.png');
    })
    $(".shop-Sport ul li:nth-child(2)").hover(function () {
        brandSport.attr('src', 'img/nav/sport-yoga.png');
    })
    $(".shop-Sport ul li:nth-child(3)").hover(function () {
        brandSport.attr('src', 'img/nav/sport-Tennis.png');
    })
    $(".shop-Sport ul li:nth-child(4)").hover(function () {
        brandSport.attr('src', 'img/nav/sport-boxing.png');
    })
    $(".shop-Sport ul li:nth-child(5)").hover(function () {
        brandSport.attr('src', 'img/nav/sport-WaterSports.png');
    })


    // End nav mega sport ///////



    // $("body").click(function () {
    //     let menuCategory2 = $(".main-category")
    //     let amrr = menuCategory2.css("display")
    //     console.log(amrr);
    //     if (amrr == "block") {
    //         $("body").click(function () {

    //             $(".main-category").css("display", "none")
    //             console.log("amr1");
    //         })

    //     }
    //     else {
    //         $(".all-category").click(function () {
    //             $(".main-category").slideDown()
    //         })
    //         console.log("amr2");

    //     }
    //     console.log(amrr);

    // })

    $(".all-category").click(function () {
        $(".main-category").slideToggle("slow")
    })

    // start sub category
    $(".main-category .sub-category li.mans-Fashion").hover(function () {
        $(".li-img").attr('src', 'img/nav/Arrivals1.png');
    })
    $(".main-category .sub-category li.womens-Fashion").hover(function () {
        $(".li-img").attr('src', 'img/nav/Arrivals2.png');
    })
    $(".main-category .sub-category li.Kids-Fashion").hover(function () {
        $(".li-img").attr('src', 'img/nav/Arrivals3.png');
    })
    $(".main-category .sub-category li.baby").hover(function () {
        $(".li-img").attr('src', 'img/nav/Arrivals4.png');
    })
    $(".main-category .sub-category li.top-brands").hover(function () {
        $(".li-img").attr('src', 'img/nav/Arrivals5.png');
    })
    $(".main-category .sub-category li.best-selling").hover(function () {
        $(".li-img").attr('src', 'img/nav/Arrivals6.png');
    })
    $(".main-category .sub-category li.top-offer").hover(function () {
        $(".li-img").attr('src', 'img/nav/Arrivals7.png');
    })
    $(".main-category .sub-category li.ladies").hover(function () {
        $(".li-img").attr('src', 'img/nav/Arrivals9.png');
    })
    $(".main-category .sub-category li.westrn-dress").hover(function () {
        $(".li-img").attr('src', 'img/nav/Arrivals10.png');
    })
    $(".main-category .sub-category li.denim").hover(function () {
        $(".li-img").attr('src', 'img/nav/Arrivals11.png');
    })


    // , "img/nav/Arrivals1 .png"
    // $(".main-category .sub-category li:nth-child(1)").hover(function () {
    //     $(".app-sub-img").attr("src", "img/nav/Arrivals1 .png");
    //     console.log("amr");
    // })

    $("#menu-wrap").click(function () {
        $(".nav-app-mop").toggle("slow");
    });

    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });





    /*------------------
    Hero Slider
    --------------------*/
    $(".hero-items").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

    /*------------------
        min card
    --------------------*/
    $(".click-hart").click(function () {
        $("click-hart").css("color", "red")
    })

    /*------------------
    Product Slider
    --------------------*/
    $(function () {

        var swiper = new Swiper('.carousel-gallery .swiper-container', {
            effect: 'slide',
            speed: 900,
            slidesPerView: 5,
            spaceBetween: 20,
            simulateTouch: true,
            autoplay: {
                delay: 5000,
                stopOnLastSlide: false,
                disableOnInteraction: false
            },
            pagination: {
                el: '.carousel-gallery .swiper-pagination',
                clickable: true
            },
            breakpoints: {
                // when window width is <= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 5
                },
                // when window width is <= 480px
                425: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                // when window width is <= 640px
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }
        }); /*http://idangero.us/swiper/api/*/



    });

    $(".product-slider").owlCarousel({
        loop: true,
        margin: 25,
        nav: true,
        items: 4,
        dots: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });

    /*-----------------------
       Product Single Slider
    -------------------------*/
    $(".ps-slider").owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        items: 3,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });
    // start size product
    $(".cc-item").click(function () {
        $(".cc-item").removeClass('active');
        $(this).addClass('active');
    })

    /*------------------
        CountDown
    --------------------*/
    // For demo preview
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    if (mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end

    // Use this for real timer date
    /* var timerdate = "2020/01/01"; */

    $("#countdown").countdown(timerdate, function (event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Hrs</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Mins</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Secs</p> </div>"));
    });
    $("#countdown1").countdown(timerdate, function (event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Hrs</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Mins</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Secs</p> </div>"));
    });

    /*----------------------------------------------------
     Language Flag js 
    ----------------------------------------------------*/
    $(document).ready(function (e) {
        //no use
        try {
            var pages = $("#pages").msDropdown({
                on: {
                    change: function (data, ui) {
                        var val = data.value;
                        if (val != "")
                            window.location = val;
                    }
                }
            }).data("dd");

            var pagename = document.location.pathname.toString();
            pagename = pagename.split("/");
            pages.setIndexByValue(pagename[pagename.length - 1]);
            $("#ver").html(msBeautify.version.msDropdown);
        } catch (e) {
            // console.log(e);
        }
        $("#ver").html(msBeautify.version.msDropdown);

        //convert
        $(".language_drop").msDropdown({ roundedBorder: false });
        $("#tech").data("dd");
    });

    /*-------------------
        Range Slider
    --------------------- */
    var rangeSlider = $(".price-range"),
        minamount = $("#minamount"),
        maxamount = $("#maxamount"),
        minPrice = rangeSlider.data('min'),
        maxPrice = rangeSlider.data('max');
    rangeSlider.slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [minPrice, maxPrice],
        slide: function (event, ui) {
            minamount.val('$' + ui.values[0]);
            maxamount.val('$' + ui.values[1]);
        }
    });
    minamount.val('$' + rangeSlider.slider("values", 0));
    maxamount.val('$' + rangeSlider.slider("values", 1));

    /*-------------------
        Radio Btn
    --------------------- */
    $(".fw-size-choose .sc-item label, .pd-size-choose .sc-item label").on('click', function () {
        $(".fw-size-choose .sc-item label, .pd-size-choose .sc-item label").removeClass('active');
        $(this).addClass('active');
    });

    /*-------------------
        Nice Select
    --------------------- */
    $('.sorting, .p-show').niceSelect();

    /*------------------
    table add or remove 
    --------------------*/
    // let total1 = $('#total-1')
    // let getparc = total1.siblings('.app-price')

    // let child = getparc.children('.price-value')

    // let childText = child.text()

    // total1.text(`$ ${childText}`)
    // console.log(childText);

    // let ddt

    // let mydataa1 = ''
    // let mydataa2 = ''
    // let mydataa3 = ''
    // // let usrt


    // let tottl = $('.totall')


    // tottl.each(function () {
    //     arre = [i]

    //     console.log(arre);
    // })



    // for (let x of tottl) {
    //     mydataa1 = x.innerText
    //     mydataa2 = x.innerText
    //     mydataa3 = x.innerText
    // }

    // ass = [mydataa1, mydataa2, mydataa3]

    // console.log(ass);

    // $(".fw-normal").append(mydataa)

    // let a1 = $(".fw-normal")
    // let a2 = $(".fw-norma2")
    // let a3 = $(".fw-norma3")

    // let arryaa = [a1, '.fw-normal2', '.fw-normal3']

    // arryaa.each(function (e) {
    //     e.append(mydataa)
    // })

    let tottl = $('.totall')


    let mydataa = ''
    for (let x of tottl) {

        let dd = x

        console.log(dd);

        mydataa += `
        <span>${$(this).text()}</span>
        <span>${$(this).text()}</span>
        <span>${$(this).text()}</span>
        `
    }

    $(".fw-normal").append(mydataa)

    var apptap = $('.tr-app')
    apptap.mouseenter(function () {
        // A random identifier is generated in order to distinguish between  
        // the element to be worked on and other elements of the same class
        apptap.removeAttr('id')
        var idRandom = Math.round(Math.random() * 100)
        $(this).attr('id', `${idRandom}`)
        let geid = $(this).attr('id')
        // arithmetic operation total = price * Quantity
        $(`.Quantity`).click(function () {
            var price = $(`#${geid} .price-value`).text()
            var pricenum = Number(price)
            var total = $(`#${geid} .totall`)
            total.text(pricenum * $(this).val())
        })
        // remove table
        $(`#${geid} .app-trash`).click(function () {
            $(`#${geid}`).remove();
        })
    })

    /*------------------
        all Product
    --------------------*/
    // add class list 
    let bigCard = $(".big-card-icon")
    let bigAddActive = $(".big-card-icon")
    let smallCard = $(".small-card")
    let smallAddActive = $(".small-card")
    let viewCard = $(".min-card-grid")

    bigCard.click(function () {
        smallAddActive.removeClass("active")
        viewCard.addClass("big-card-details min-card-width")
        bigAddActive.addClass("active")
    })
    // remove class list 
    smallCard.click(function () {
        bigAddActive.removeClass("active")
        viewCard.removeClass("big-card-details min-card-width")
        smallAddActive.addClass("active")
    })

    /*------------------
        Single Product
    --------------------*/
    $('.product-thumbs-track .pt').on('click', function () {
        $('.product-thumbs-track .pt').removeClass('active');
        $(this).addClass('active');
        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.product-big-img').attr('src');
        if (imgurl != bigImg) {
            $('.product-big-img').attr({ src: imgurl });
            $('.zoomImg').attr({ src: imgurl });
        }
    });

    $('.product-pic-zoom').zoom();

    /*-------------------
        profile page
    --------------------- */
    //Tabs Box
    if ($('.tabs-box').length) {
        $('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));

            if ($(target).is(':visible')) {
                return false;
            } else {
                target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
                $(target).fadeIn(300);
                $(target).addClass('active-tab');
            }
        });
    }

    // buttom form 
    $('.profile-form .theme-btn').hover(function () {
        $('.profile-form .theme-btn').removeClass('active')
        $(this).addClass('active')
    })

    $('.profile-form .Edit-form').click(function () {
        $('.account-usar-form').removeAttr('disabled')
        $('.account-usar-form').addClass('pord-color')

    })

    $('.profile-form .save-form').click(function () {
        $('.account-usar-form').attr('disabled', 'disabled')
        $('.account-usar-form').removeClass('pord-color')
    })

    /*-------------------
        Quantity change
    --------------------- */
    // var proQty = $('.pro-qty');
    // proQty.prepend('<span class="dec qtybtn">-</span>');
    // proQty.append('<span class="inc qtybtn">+</span>');
    // proQty.on('click', '.qtybtn', function () {
    //     var $button = $(this);
    //     var oldValue = $button.parent().find('input').val();
    //     if ($button.hasClass('inc')) {
    //         var newVal = parseFloat(oldValue) + 1;
    //     } else {
    //         // Don't allow decrementing below zero
    //         if (oldValue > 0) {
    //             var newVal = parseFloat(oldValue) - 1;
    //         } else {
    //             newVal = 0;
    //         }
    //     }
    //     $button.parent().find('input').val(newVal);
    // });

    /*-------------------
        login & regster
    --------------------- */
    
    // icon show || hide
    $('.click-pass-viw').click(function () {
        $('.click-pass-viw i').toggle();
    })

    var pastype = $('.passs')
    $('.shoow').click(function () {
        pastype.attr('type','text')
    })
    $('.hideng').click(function () {
        pastype.attr('type','password')
    })



})
    (jQuery);






/*------------------
    top sellers
--------------------*/
flag = 0;
let mydata = ""
function getdata() {
    if (flag == 0) {
        flag = 1
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://reqres.in/api/users", true);
        xhr.onload = function () {
            dat = JSON.parse(xhr.responseText).data


            dat.forEach(usr => {

                mydata += `
                <tr>
                    <th>
                        <img src="${usr.avatar}">
                    </th>
                    <td style="width:15%;">${usr.id}</td>
                    <td>${usr.first_name} ${usr.last_name}</td>
                    <td>${usr.email}</td>
                </tr>
            `
            });

            document.querySelector(".tbody").innerHTML = mydata

        }
        xhr.send();
    }
}

'use strict';



/*------------------
    testimonials
--------------------*/
// vars
'use strict'
var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
    touchStartPos,
    touchEndPos,
    touchPosDiff,
    ignoreTouch = 30;
;



window.onload = function () {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);
    })

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function (e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })

    testim.addEventListener("touchstart", function (e) {
        touchStartPos = e.changedTouches[0].clientX;
    })

    testim.addEventListener("touchend", function (e) {
        touchEndPos = e.changedTouches[0].clientX;

        touchPosDiff = touchStartPos - touchEndPos;

        console.log(touchPosDiff);
        console.log(touchStartPos);
        console.log(touchEndPos);


        if (touchPosDiff > 0 + ignoreTouch) {
            testimLeftArrow.click();
        } else if (touchPosDiff < 0 - ignoreTouch) {
            testimRightArrow.click();
        } else {
            return;
        }

    })
}




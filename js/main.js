if (document.getElementById('sliderHome')) {
    let swiperHome = new Swiper('#sliderHome', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

if (document.getElementsByClassName("slon__list-catalog__slider").length) {
    let swiperCatalog = new Swiper('.slon__list-catalog__slider', {
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 4,
        //loop: true,
        simulateTouch: false,
        breakpoints: {
            440: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1280: {
                slidesPerView: 4,
            },
        }
    });
}

if (document.getElementsByClassName("js_slider_item_product").length) {
    let swiperItemProduct = new Swiper('.js_slider_item_product', {
        lazy: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });
}

if (document.getElementsByClassName("slon__brands__slider").length) {
    let swiperBrands = new Swiper('.slon__brands__slider', {
        lazy: true,
        navigation: {
            nextEl: '.slon__brands__next',
            prevEl: '.slon__brands__prev',
        },
        slidesPerView: 5,
        //loop: true,
        breakpoints: {
            440: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1280: {
                slidesPerView: 5,
            },
        }
    });
}

if (document.getElementById("bannerSlider")) {
    let swiperbannerSlider = new Swiper('#bannerSlider', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

//alertify.error('Error message');

function validateEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.getElementById(email).value;
    if (reg.test(address) == false) {
        alertify.error('Введите корректный e-mail');
        return false;
    } else {
        return true;
    }
}

function validateCheckbox(checkbox) {
    if (!document.getElementById(checkbox).checked) {
        alertify.error('Вы должны ознакомится с политикой безопасности');
        return false;
    } else {
        return true;
    }
}

document.addEventListener("DOMContentLoaded", function (event) {

    if (document.getElementById("submitSubscription")) {
        document.getElementById('submitSubscription').onclick = function () {
            /**
             * форма подписки
             */
            if (
                validateEmail('emailSubscription') &&
                validateCheckbox('politikaSubscription')
            ) {
                /**
                 * тут аякс куда слать данные
                 */
                alertify.success('Success message');
                document.getElementById('emailSubscription').value = '';
            }
            return false;
        }
    }

    if (document.getElementById("submitSubscription2")) {
        document.getElementById('submitSubscription2').onclick = function () {
            /**
             * форма подписки с акцией
             */
            if (
                validateEmail('emailSubscription2') &&
                validateCheckbox('politikaSubscription2')
            ) {
                /**
                 * тут аякс куда слать данные
                 */
                alertify.success('Success message');
                document.getElementById('emailSubscription2').value = '';
            }
            return false;
        }
    }


    let filterItemBox = document.querySelectorAll('.smart-filter__item__title');
    [].forEach.call(filterItemBox, function (elem) {
        elem.addEventListener('click', function (e) {
            this.parentNode.classList.toggle('smart-filter__item--active');
        }, false);
    });

    if (document.getElementById("work_time")) {
        document.getElementById('work_time').onclick = function (e) {
            this.classList.toggle('is_active');

        }
    }
});

/**
 * при наведении на ссылку в выподающем меню в шапке
 * @param box
 * @param imgSrc
 * @param link
 * @param title
 */
function hoverSubMenu(box, imgSrc, link, title) {
    document.getElementById(box).innerHTML = "<a href='" + link + "'><div><img alt='" + title + "' src='" + imgSrc + "' /></div>" + title + "</a>";
}


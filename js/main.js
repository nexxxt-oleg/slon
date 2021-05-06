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
            300: {
                slidesPerView: 'auto',
                centeredSlides: true,
            },
            600: {
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
        breakpoints: {
            300: {

            },
            600: {

            }
        }
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
            300: {
                slidesPerView: 'auto',
                centeredSlides: true,
            },
            600: {
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

if (document.getElementsByClassName("slon__complect__slider").length) {
    let swiperComplect = new Swiper('.slon__complect__slider', {
        pagination: {
            el: '.swiper-pagination--complect',
            clickable: true,
        },
        /*simulateTouch: false,*/
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next--complect',
            prevEl: '.swiper-button-prev--complect',
        },
    });
}



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

function validateText(input, error_text) {
    var inpValue = document.getElementById(input).value;
    if (inpValue === '') {
        alertify.error(error_text);
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

function countProduct(action, input) {
    if (document.getElementById(input)) {
        let count = parseInt(document.getElementById(input).value);
        if (action == 'plus') {
            document.getElementById(input).value = count + 1;
        }
        if (action == 'minus' && count > 1) {
            document.getElementById(input).value = count * 1 - 1;
        }
    }
}


document.addEventListener("DOMContentLoaded", function (event) {

    if (document.getElementById("submitSubscription")) {
        document.getElementById('submitSubscription').onclick = function (event) {
            event.preventDefault();
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
        document.getElementById('submitSubscription2').onclick = function (event) {
            event.preventDefault();
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

    if (document.getElementById("oneBayClickSubmit")) {
        document.getElementById('oneBayClickSubmit').onclick = function (event) {
            event.preventDefault();
            /**
             * форма купить в один клик
             *
             */
            if (
                validateText('one_bay_name', 'Введите Имя') &&
                validateText('one_bay_phone', 'Укажите номер телефона') &&
                validateEmail('one_bay_email') &&
                validateCheckbox('oneBayClickPolitika')
            ) {
                /**
                 * тут аякс куда слать данные
                 */
                alertify.success('Success message');
                document.getElementById('oneBayClickForm').reset();
            }
        }
    }

    if (document.getElementById("addReviewsSubmit")) {
        document.getElementById('addReviewsSubmit').onclick = function () {
            /**
             * форма добавить отзыв
             *
             */
            if (
                validateText('reviews_name', 'Введите Имя') &&
                validateEmail('reviews_email') &&
                validateCheckbox('reviews_persona')
            ) {
                /**
                 * тут аякс куда слать данные
                 */

                let sendOk = new bootstrap.Modal(document.getElementById('sendOkModal'), {});
                sendOk.show();
                document.getElementById('addReviewsForm').reset();
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

/**
 * модалка при добавлении товара в корзину
 */
if (document.getElementById('cartModal')) {



    let cartModal = document.getElementById('cartModal');
    let relevantSliderPopup = '';
    cartModal.addEventListener('shown.bs.modal', function (event) {
        if(relevantSliderPopup === '') {
            swiperRelevantSliderPopup();
        }
    });

    function swiperRelevantSliderPopup() {
        relevantSliderPopup = new Swiper('#relevantSliderPopup', {
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slidesPerView: 4,
            spaceBetween: 10,
            lazy: true,
            breakpoints: {
                300: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 3,
                },
                1180: {
                    slidesPerView: 4,
                },
            }
        });
    }
}

if(window.screen.width < 798) {

    function getScrollMenu() {
        let el = document.getElementById('scrollMenu');
        if(pageYOffset > 150) {
            el.classList.add('is_active');
        } else {
            el.classList.remove("is_active");
        }
    }
    getScrollMenu();
    window.addEventListener('scroll', function() {
        getScrollMenu();
        //document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
    });
}

/**
 * мобильное основное меню
 */

if (document.getElementById("js-mob-nav")) {
    document.getElementById('js-mob-nav').onclick = function (event) {
        event.preventDefault();
        document.getElementById('topMenu').classList.add('show');
        document.getElementById('main').classList.add('show_modal');
    }
    document.getElementById('menuClose').onclick = function (event) {
        event.preventDefault();
        document.getElementById('topMenu').classList.remove('show');
        document.getElementById('main').classList.remove('show_modal');
    }
}

/***
 * мобильное меню каталога
 */
if (document.getElementById("mobCatalogOpen")) {
    document.getElementById('mobCatalogOpen').onclick = function (event) {
        event.preventDefault();
        document.getElementById('catalogMenuMob').classList.add('show');
        document.getElementById('main').classList.add('show_modal');
    }
    document.getElementById('menuCloseCatalog').onclick = function (event) {
        event.preventDefault();
        document.getElementById('catalogMenuMob').classList.remove('show');
        document.getElementById('main').classList.remove('show_modal');
    }
}


/***
 * мобильный фильтр товаров
 */
if (document.getElementById("mobFilterOpen")) {
    document.getElementById('mobFilterOpen').onclick = function (event) {
        event.preventDefault();
        document.getElementById('filterProduct').classList.add('show');
        document.getElementById('main').classList.add('show_modal');
    }
    document.getElementById('filterClose').onclick = function (event) {
        event.preventDefault();
        document.getElementById('filterProduct').classList.remove('show');
        document.getElementById('main').classList.remove('show_modal');
    }
}

function getFileName () {

    var file = document.getElementById ('uploaded-file').value;
    file = file.replace(/\\/g, "/").split('/').pop();
    document.getElementById ('file-name').innerHTML = 'Имя файла: ' + file;
}

/***
 * промокод
 */
if (document.getElementById("productPromoOpen")) {
    document.getElementById('productPromoOpen').onclick = function (event) {
        event.preventDefault();
        document.getElementById('productPromoBox').classList.add('show');

    }
    document.getElementById('productPromoClose').onclick = function (event) {
        event.preventDefault();
        document.getElementById('productPromoBox').classList.remove('show');
    }
}

/***
 * подарки
 */
if (document.getElementById("productGiftOpen")) {
    document.getElementById('productGiftOpen').onclick = function (event) {
        event.preventDefault();
        document.getElementById('productGiftBox').classList.add('show');

    }
    document.getElementById('productGiftClose').onclick = function (event) {
        event.preventDefault();
        document.getElementById('productGiftBox').classList.remove('show');
    }
}

if (document.getElementsByClassName("slon__main__section__mob__header").length) {
    let mobProductTabs = document.querySelectorAll('.slon__main__section__mob__header');
    [].forEach.call(mobProductTabs, function (elem) {
        elem.addEventListener('click', function (e) {
            this.parentNode.classList.toggle('is_active');
        }, false);
    });
}

/**
 * мобильная отправка отзыва
 */
if (document.getElementById("addRevModal")) {
    let addRevModal = document.getElementById('addRevModal')
    addRevModal.addEventListener('show.bs.modal', function (event) {

        let clonedForm = document.getElementById("addReviewsForm").cloneNode(true);
        let mobFormRev = document.getElementById("mobFormRev");
        mobFormRev.innerHTML = '';
        mobFormRev.appendChild(clonedForm);
    })
}

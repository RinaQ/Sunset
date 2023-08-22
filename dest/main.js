//LANGUAGE
function handleLanguage() {
    const lang = document.querySelector('.language')
    lang.addEventListener('click', function (e) {
        e.stopPropagation();
        lang.classList.toggle('active')
    })

    let langCurrent = document.querySelector('.language-current span')
    let langItems = document.querySelectorAll('.language-option .item')
    langItems.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            let langText = this.textContent
            let langCurrentText = langCurrent.textContent
            langCurrent.innerHTML = langText
            this.innerHTML = langCurrentText
        })
    })
}
handleLanguage()

function handleHomePageSubMenu(){
    let menus = document.querySelectorAll('.header .header__menu .home .submenu li a')
    let header = document.querySelector('.header')
    let heightHeader = header.offsetHeight; //gom padding + border

    let sections = []

    menus.forEach(function (element, index) {
        let href = element.getAttribute('id')
        let className = href.replace('#', '')
        let section = document.querySelector('.' + className)
        sections.push(section)

        element.addEventListener('click', function (event) {
            event.preventDefault();

            //lay vij tri section
            let positionSection = section.offsetTop;
            window.scrollTo({
                top: positionSection - heightHeader + 1,
                behavior: "smooth"

            })
            removeActiveMenu()
            element.classList.add('active')
        })
    })

    function removeActiveMenu() {
        menus.forEach(function (element, index) {
            element.classList.remove('active')
        })
    }
    window.addEventListener('scroll', function (e) {
        let scrollY = window.pageYOffset
        sections.forEach(function (section, index) {
            if (scrollY > section.offsetTop - heightHeader && scrollY < section.offsetTop + section.offsetHeight) {
                removeActiveMenu()
                menus[index].classList.add('active')
            } else {
                menus[index].classList.remove('active')
            }
        })
    })
}
handleHomePageSubMenu()

//NAV 
function handleNav() {
    let btnNav = document.querySelector('.header .btnmenu')
    let nav = document.querySelector('.nav')

    btnNav.addEventListener('click', function () {
        btnNav.classList.toggle('clicked')
        nav.classList.toggle('active')
    })

    window.addEventListener('resize', function () {
        btnNav.classList.remove('clicked')
        nav.classList.remove('active')
    })
}
handleNav()

// SLIDER
function handleSlider() {
    var slider = document.querySelector('.slider__main');
    if (document.contains(slider) == true) {
        var flktySlider = new Flickity(slider, {
            // options
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            prevNextButtons: false,
            lazyLoad: true,

            on: {
                ready: function () {
                },
                change: function (index) {
                    let textSlide = document.querySelectorAll(".slider__main-item .text");
                    if (index == 0) {
                        textSlide[index].classList.add("active");
                        textSlide[textSlide.length - 1].classList.remove("active");

                    } else {
                        textSlide[index].classList.add("active");
                        textSlide[index - 1].classList.remove("active");
                    }
                },
            },
        });
        let btnNext = document.querySelector('.slider__control.--next')
        let btnPre = document.querySelector('.slider__control.--pre')
        btnPre.addEventListener('click', function () {
            flktySlider.previous(true)
        })
        btnNext.addEventListener('click', function () {
            flktySlider.next(true)
        })
    }
}
handleSlider()

// VIDEO
function handleVideo() {
    let video = document.querySelector('.video')
    if (document.contains(video) == true) {
        let popupvideo = document.querySelector('.popupvideo')
        let iframe = document.querySelector('.popupvideo .popupvideo__inner .popupvideo__inner-iframe iframe')
        let close = document.querySelector('.popupvideo .popupvideo__inner .popupvideo__inner-iframe .closepopup')

        video.addEventListener('click', function () {
            //Hien popupvideo
            popupvideo.classList.add('active')
            //Lay id video
            let id = this.getAttribute('data-src-video')
            //Gan id vidPeo vao iframe
            iframe.setAttribute('src', `https://www.youtube.com/embed/${id}?autoplay=1`)
        })

        function closePopupVideo() {
            popupvideo.classList.remove('active')
        }

        close.addEventListener('click', function () {
            closePopupVideo()
            iframe.setAttribute('src', ``)
        })
        popupvideo.addEventListener('click', function () {
            closePopupVideo()
            iframe.setAttribute('src', ``)
        })
    }

}
handleVideo()

//THUMBNAIL
function handleThumb() {
    var thumb = document.querySelector('.event__thumb .thumb__list');
    if (document.contains(thumb)) {
        var flktyThumb = new Flickity(thumb, {
            // options
            cellAlign: 'center',
            contain: true,
            wrapAround: true,
            groupCells: 3,
            prevNextButtons: false,
            pageDots: false,
        });
    }

}
handleThumb()
function handleBlog() {
    var blog = document.querySelector('.blog__thumbs .thumb__list');
    if (document.contains(blog)) {
        var flktyBlog = new Flickity(blog, {
            // options
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            groupCells: 3,
            prevNextButtons: false,
            pageDots: false,
        });
    }

}
handleBlog()
function handleService() {
    let service = document.querySelector('.services__boxs');
    if (document.contains(service) == true) {
        var flktyService = new Flickity(service, {
            // options
            cellAlign: 'center',
            contain: true,
            wrapAround: true,
            freeScroll: false,
            lazyLoad: 3,
            autoPlay: 3000,
            pauseAutoPlayOnHover: true,
            prevNextButtons: false,
            pageDots: false,

            on: {
                select: function (index) {
                    handleDot(index);
                }
            }
        });
    }
    // DOts
    function handleDot(index) {
        let dotsline = document.querySelector('.services .services__pagedot')
        let dot = document.querySelector('.services .services__pagedot .services__pagedot-current')
        let slides = document.querySelectorAll('.services .services__boxs .box')
        //set Width
        dot.style.width = dotsline.offsetWidth / slides.length + 'px';
        //set vị trí 
        dot.style.transform = 'translate( ' + index * dot.offsetWidth + 'px, -50%)';
    }
}
handleService()

//GALLERY LIBRARY
function handleGallery() {
    let categories = document.querySelectorAll('.gallery .gallery__control .gallery__control-categories a')
    let galleries = document.querySelectorAll('.gallery__list')
    //FUNCTION REMOVE ACTIVE
    function removeActiveCategory() {
        categories.forEach(function (category) {
            category.classList.remove('active')
        })
    }

    function removeActiveGallery() {
        galleries.forEach(function (gallery) {
            gallery.classList.remove('active')
        })
    }


    // categories.forEach(function (category, index) {
    //     category.addEventListener('click', function (e) {
    //         // console.log(index);
    //         e.preventDefault();
    //         removeActiveCategory()
    //         this.classList.add('active')
    //         removeActiveGallery()
    //         galleries[index].classList.add('active')

    //     })
    // })
    categories.forEach(function (category, index) {
        category.addEventListener('click', function (e) {
            e.preventDefault();
            if (category.getAttribute('class') == "all") {
                removeActiveCategory()
                category.classList.add('active')
                galleries.forEach(function (gallery) {
                    gallery.classList.add('active')
                })
            } else {
                removeActiveCategory()
                this.classList.add('active')
                removeActiveGallery()
                galleries[index - 1].classList.add('active')
            }
        })
    })
}
handleGallery()

//SLIDE LOGO BRANDNAME
function handleBrandName() {
    var logo = document.querySelector('.brandname__logo');
    var flktyLogo = new Flickity(logo, {
        // options
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        freeScroll: true,
        prevNextButtons: false,
        pageDots: false,
    });
}
handleBrandName()

// TEXT MESSAGE
function handleTextBox() {
    let text = document.querySelector('.message__left-content');
    if (document.contains(text)) {
        let flktyMess = new Flickity(text, {
            // options
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            prevNextButtons: false,
            draggable: true,
            pageDots: false,
            lazyLoad: 3,
            fade: true,
        });
        //Event pre next btn
        let pre = document.querySelector('.message__left-control .btncontrol.--pre')
        let next = document.querySelector('.message__left-control .btncontrol.--next')

        pre.addEventListener('click', function () {
            flktyMess.previous()
        })
        next.addEventListener('click', function () {
            flktyMess.next()
        })
    }

}
handleTextBox()

// ASSISTANT
function handlesDes() {
    var des = document.querySelector('.destination__list');
    if (document.contains(des) == true) {
        var flktyDes = new Flickity(des, {
            // options
            cellAlign: 'center',
            contain: true,
            wrapAround: true,
            groupCells: 3,
            prevNextButtons: false,
            pageDots: false,
        });
    }
    
}
handlesDes()

//BACKTOTOP
function handleBackToTop() {
    let backtop = document.querySelector('.backtop')

    //ACTIVE BACKTOTOP
    window.addEventListener('scroll', function () {
        // --------slider------------------//
        let slider = document.querySelector('.slider')
        let scrollY = window.scrollY;
        if (document.contains(slider) == true) {
            let heightSlider = slider.offsetHeight
            if (scrollY >= heightSlider) {
                backtop.classList.add('active')
            } else {
                backtop.classList.remove('active')
            }

        }
        //--------poster---------//
        let poster = document.querySelector(".poster");
        if (document.contains(poster) == true) {
            let heightPoster = poster.offsetHeight;
            if (scrollY >= heightPoster) {
                backtop.classList.add('active')
            } else {
                backtop.classList.remove('active')
            }
        }
    })

    //event click
    backtop.addEventListener('click', function(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    })
}
handleBackToTop()


Fancybox.bind("[data-fancybox]", {
    // Your custom options
    // keyboard: {
    //     // Escape: "close",
    //     // Delete: "close",
    //     // Backspace: "close",
    //     // PageUp: "next",
    //     // PageDown: "prev",
    //     // ArrowUp: "next",
    //     // ArrowDown: "prev",
    //     // ArrowRight: "next",
    //     // ArrowLeft: "prev",
    // }
});

function handlePriceList() {
    let sectionPrice = document.querySelector('.price')
    if (document.contains(sectionPrice) == true) {
        let itemleft = document.querySelector('.price__list-item.--left')
        let itemright = document.querySelector('.price__list-item.--right')
        window.addEventListener('scroll', function () {
            let positionSection = sectionPrice.offsetTop
            let scrollY = window.scrollY
            // let positionSectionBottom = sectionPrice.offsetTop + sectionPrice.offsetHeight
            // console.log(positionSectionBottom)

            if (scrollY > positionSection + 100) {
                itemleft.classList.add('active');
                itemright.classList.add('active')
            } else {
                itemleft.classList.remove('active');
                itemright.classList.remove('active')
            }
        })
    }
}
handlePriceList()

function handleCountNumberHome() {
    let divInfo = document.querySelector('.reserve')
    if (document.contains(divInfo) == true) {
        let positionDivInfo = divInfo.offsetTop
        window.addEventListener('scroll', function () {

            let scrollY = window.scrollY
            if (scrollY >= positionDivInfo) {
                counterup()
            }
        })
    }

}
handleCountNumberHome()

function handleAchivement() {
    let sectionAchivement = document.querySelector('.achievement')
    if (document.contains(sectionAchivement) == true) {
        let positionsection = sectionAchivement.offsetTop 
        window.addEventListener('scroll', function () {
            let scrollY = window.scrollY
            let heightContent = sectionAchivement.offsetHeight
            let viewportHeight = window.innerHeight
            if (scrollY >= positionsection - viewportHeight + heightContent) {
                counterup()
            }
        })
    }

}
handleAchivement()

function counterup() {
    const counter = document.querySelectorAll('.counter');
    const speed = 20; // The lower the slower
    counter.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Lower inc to slow and higher to slow
            const inc = target / speed;

            // console.log(inc);
            // console.log(count);

            // Check if target is reached
            if (count < target) {
                // Add inc to count and output in counter
                counter.innerText = count + inc;
                // Call function every ms
                setTimeout(updateCount, 100);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
}


// let sidebar = document.querySelector('.sidebar')
// let contentSidebar = document.querySelector('.sidebar .wrap-content')

// window.addEventListener('scroll', function(){
//     let scrollTop = window.scrollY
//     let viewportH = window.innerHeight
//     let contentH = contentSidebar.getBoundingClientRect().height

//     if( scrollTop >= contentH - viewportH)
//     {
//         contentSidebar.style.transform = `translateY(-${contentH - viewportH}px)`
//         contentSidebar.style.position = 'fixed'
//     }else{
//         contentSidebar.style.transform = ''
//         contentSidebar.style.position = ''
//     }
// })

let loader = document.querySelector('.preloader')
window.addEventListener('load', function () {
    loader.style.display = 'none'
})
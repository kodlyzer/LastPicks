var navigation = (function() {
    function toggleNav() {

        // querySelector returns the first element it finds with the correct selector
        // addEventListener is roughly analogous to $.on()

        var pageBody,
            pageHeader,
            pageOverlay,
            toggleNavBtn,
            nav;

        pageBody        = document.querySelector('.kx-page');
        pageHeader      = document.querySelector('.kx-page__header');
        pageOverlay     = document.querySelector('.kx-page__overlay');
        toggleNavBtn    = document.querySelector('.kx-js-header__nav-toggle');
        nav             = document.querySelector('.kx-page__nav');

        var navOpen = false;

        if(toggleNavBtn) {
            toggleNavBtn.onclick = function (e) {
                e.preventDefault();

                if ((navOpen === false) && (!pageBody.classList.contains('kx-is-locked'))) {
                    toggleNavBtn.classList.add('kx-is-active');
                    pageBody.classList.add('kx-is-locked');
                    pageHeader.classList.add('kx-has-nav-open');
                    pageOverlay.classList.add('kx-is-active');
                    nav.classList.remove('kx-is-hidden');

                    setTimeout(function () {
                        nav.classList.add('kx-is-active');
                        pageOverlay.classList.add('kx-is-animating');
                    }, 350);

                    navOpen = true;
                }

                else if ((navOpen === true) && (pageBody.classList.contains('kx-is-locked'))) {
                    nav.classList.remove('kx-is-active');
                    toggleNavBtn.classList.remove('kx-is-active');
                    pageOverlay.classList.remove('kx-is-animating');

                    setTimeout(function () {
                        pageBody.classList.remove('kx-is-locked');
                        pageHeader.classList.remove('kx-has-nav-open');
                        pageOverlay.classList.remove('kx-is-active');
                        nav.classList.add('kx-is-hidden');
                    }, 350);

                    navOpen = false;
                }
            };
        }

        if(pageOverlay) {
            pageOverlay.onclick = function (e) {
                e.preventDefault();

                if(((navOpen === true)) && (pageBody.classList.contains('kx-is-locked'))) {
                    nav.classList.remove('kx-is-active');
                    toggleNavBtn.classList.remove('kx-is-active');
                    pageOverlay.classList.remove('kx-is-animating');

                    setTimeout(function () {
                        pageBody.classList.remove('kx-is-locked');
                        pageHeader.classList.remove('kx-has-nav-open');
                        pageOverlay.classList.remove('kx-is-active');
                        nav.classList.add('kx-is-hidden');
                    }, 350);

                    navOpen = false;
                }
            };
        }
    }

    return {
        toggleNav: toggleNav
    };
})();

document.addEventListener('DOMContentLoaded', function(event) {
    navigation.toggleNav();
});


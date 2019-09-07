var KDS = KDS || {};

KDS.toggle = (function() {
    'use strict';

    var setEventListeners = function() {
        $('.kx-js-toggle__handle').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            toggleTarget(e);
            $(this).toggleClass('kx-is-open');

            if ($(this).attr('aria-expanded','false')) {
                $(this).attr('aria-expanded','true');
            } else if ($(this).attr('aria-expanded','true')) {
                $(this).attr('aria-expanded','false');
            }

        });
    };

    var toggleTarget = function(e) {


        var $toggle = $(e.target).closest('.kx-js-toggle');
        var $toggleTarget = $toggle.find('.kx-js-toggle__target:first');

        if (!$toggle.hasClass('kx-is-collapsed') && $toggle.hasClass('kx-is-expanded')) {
            $toggle.addClass('kx-is-collapsing');

            $toggleTarget.slideUp(300, function() {
                $toggle.addClass('kx-is-collapsed');
                $toggle.removeClass('kx-is-expanded');
                $toggle.removeClass('kx-is-collapsing');
                $toggleTarget.attr('aria-hidden', 'true');
            });

        } else if (!$toggle.hasClass('kx-is-expanded') && $toggle.hasClass('kx-is-collapsed')) {
            $toggle.addClass('kx-is-expanding');

            $toggleTarget.slideDown(300, function() {
                $toggle.removeClass('kx-is-collapsed');
                $toggle.addClass('kx-is-expanded');
                $toggle.removeClass('kx-is-expanding');
                $toggleTarget.attr('aria-hidden', 'false');
            });
        }
    };

    var initialize = function initialize() {
        setEventListeners();
    };

    var publicVars = {
        'initialize': initialize
    };

    return publicVars;
}());

$(document).ready(function() {
    'use strict';

    KDS.toggle.initialize();
});
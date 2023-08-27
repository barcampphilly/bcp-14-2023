/*
 * global utility functions
 *
 ************************************************************************************************/

// avoid CONSOLE errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// test for transition event name https://www.iambacon.co.uk/blog/prevent-transitionend-event-firing-twice
function whichTransitionEvent() {
    var el = document.createElement('fake'),
        transEndEventNames = {
            'WebkitTransition' : 'webkitTransitionEnd',// Saf 6, Android Browser
            'MozTransition'    : 'transitionend',      // only for FF < 15
            'transition'       : 'transitionend'       // IE10, Opera, Chrome, FF 15+, Saf 7+
        };

    for(var t in transEndEventNames) {
        if( el.style[t] !== undefined ) {
            return transEndEventNames[t];
        }
    }
}

var transEndEventName = whichTransitionEvent();


// function to assign and refresh human name for breakpoints
// related SCSS: /styles/scss/partial/_utility.scss
// https://www.lullabot.com/articles/importing-css-breakpoints-into-javascript
var breakpoint = {};

breakpoint.refreshValue = function() {
    this.value = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
};


// function to toggle <button> disabled state
(function($) {
    $.fn.toggleDisabled = function() {
        return this.each(function() {
            this.disabled = !this.disabled;
        });
    };
})(jQuery);


/*
 * jQuery resize
 *
 ************************************************************************************************/

jQuery(window).on('resize', function() {
    // keep breakpoint human name updated
    breakpoint.refreshValue();
}).resize();



/*
 * jQuery document ready
 *
 ************************************************************************************************/

jQuery(document).ready(function() {

});

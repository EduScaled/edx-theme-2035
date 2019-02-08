$(document).ready(function() {
    'use strict';

    // define variables for code legibility
    var $dropdownMenuToggle = $('.user-dropdown');
    var $dropdownMenu = $('.user-dropdown-menu');
    var menuItems = $dropdownMenu.find('.dropdown-menuitem');

    var keyCodes = {
        leftArrow: 37,
        upArrow: 38,
        rightArrow: 39,
        downArrow: 40,
        tab: 9,
        escape: 27,
        space: 32
    };

    $('.header__catalog-button').click(function() {
        location.href = $(this).data('href');
    });

    $('#plp-search-form').submit(function (e) {
        e.preventDefault();
        e.stopPropagation();
        var searchVal = $('#search-form-text').val();
        if (searchVal) {
            window.location.href = this.action + '#query=' + searchVal;
        }
    });
    $('#plp-search-btn').click(function () {
        $('#plp-search-form').trigger('submit');
    });

    // bind menu toggle click for later use
    $dropdownMenuToggle.click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $dropdownMenu.addClass('expanded').find('.dropdown-menuitem').first()
            .focus();
        $dropdownMenuToggle.addClass('active').attr('aria-expanded', 'true');
    });

    // catch keypresses when focused on $dropdownMenuToggle (we only care about spacebar keypresses here)
    $dropdownMenuToggle.on('keydown', function(event) {
        // if space key pressed
        if (event.which === keyCodes.space) {
            $dropdownMenuToggle.click();
            event.preventDefault();
        }
    });

    // Hide user dropdown on click away
    if ($dropdownMenu.length) {
        $(window).click(function(e) {
            if ($dropdownMenu.hasClass('expanded')) {
                $dropdownMenu.removeClass('expanded');
                $dropdownMenuToggle.removeClass('active').attr('aria-expanded', 'false').focus();
            }
        });
    }

    function catchKeyPress(object, event) {
        // get currently focused item
        var focusedItem = jQuery(':focus');

        // get the number of focusable items
        var numberOfMenuItems = menuItems.length;

        // get the index of the currently focused item
        var focusedItemIndex = menuItems.index(focusedItem);

        // var to store next focused item index
        var itemToFocusIndex;

        // if space key pressed
        if (event.which === keyCodes.space) {
            $dropdownMenuToggle.click();
            event.preventDefault();
        }

        // if escape key pressed
        if (event.which === keyCodes.escape) {
            $dropdownMenuToggle.click();
            event.preventDefault();
        }

        // if up arrow key pressed or shift+tab else down key or tab is pressed
        if (event.which === keyCodes.upArrow || event.which === keyCodes.leftArrow ||
            (event.which === keyCodes.tab && event.shiftKey)) {
            // if first item go to last
            if (focusedItemIndex === 0) {
                menuItems.last().focus();
            } else {
                itemToFocusIndex = focusedItemIndex - 1;
                menuItems.get(itemToFocusIndex).focus();
            }
            event.preventDefault();
        } else if (event.which === keyCodes.downArrow || event.which === keyCodes.rightArrow ||
            event.which === keyCodes.tab) {
            // if last item go to first
            if (focusedItemIndex === numberOfMenuItems - 1) {
                menuItems.first().focus();
            } else {
                itemToFocusIndex = focusedItemIndex + 1;
                menuItems.get(itemToFocusIndex).focus();
            }
            event.preventDefault();
        }
    }

    // catch keypresses when inside $dropdownMenu
    // (we want to catch spacebar; escape; up arrow or shift+tab; and down arrow or tab)
    $dropdownMenu.on('keydown', function(event) {
        catchKeyPress($(this), event);
    });
});

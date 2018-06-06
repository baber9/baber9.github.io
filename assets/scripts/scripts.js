// Sticky Navbar

$(function() {
    
    // Sticky Nav
    window.onscroll = () => {
        toggleSticky();
    }

    // get element
    var navbar = document.getElementById('navigation');

    // get initial top offset of navbar
    var sticky = navbar.offsetTop;


    // FUNCTION to toggle sticky nav (when needed)
    function toggleSticky() {

        if (window.pageYOffset >= sticky) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    }

    // SMOOTH SCROLL FUNCTION
    // Select all transparent links with hashes
    $('a.transparent[href*="#"]').on('click', function(e) {

        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
            
                    if ($target.is(":focus")) { 
                        // Checking if the target was focused
                        return false;
                    } else {
                        // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

    
    // // NEEDS WORK!
    // // Arrow for mobile scrolling
    // $('#down').on('click', () => {
    //     // e.preventDefault();
    //     var el;
    //     var pos;
    //     var active = $('div.active');  // current active div

    //     el = active.next();  // next active'atable div (child of body)
    //     console.log(active.next());
    //     console.log(el.length);
    //     if (el.length > 0) {
    //         pos = el.offset().top;
    //         $('html, body').animate({
    //             scrollTop: pos
    //         }, 1000);
    //         el.addClass('active').siblings().removeClass('active');
    //         if (el.attr('id') === 'sec3') {
    //             console.log('sec3!');
    //             $('#down').addClass('flipped');
    //         }
    //     } else {
    //         // scroll back to top
    //     }
    // });




});


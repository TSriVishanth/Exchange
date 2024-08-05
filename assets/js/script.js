$(document).ready(function() {
    $(window).on('load', function() {
        hdSticky();
    });

    $(window).scroll(function() {
        hdSticky();
    });

    function hdSticky() {
        var scroll = $(window).scrollTop();

        if (scroll >= 400) {
            $(".add-header ").addClass("add-header-active fixed-top ");
        } else {
            $(".add-header").removeClass("add-header-active fixed-top");
        }
    }

});


// sidebar
$(".side-btn").on('click', function() {
    $('body').toggleClass('side-Open');
});

// custom scrolll


(function($) {

    $(window).on("load ", function() {

        $(".scrollcustom ").mCustomScrollbar({
            theme: "minimal-dark",
            scrollButtons: {
                enable: true

            },
            mouseWheel: {
                enable: true
            },
        });
        (function($){        
            $(".scrollcustom-low").mCustomScrollbar({
                theme: "minimal-dark",
                scrollButtons: {
                    enable: true
    
                },
                mouseWheel: {
                    enable: true
                },
            });
        })(jQuery);  
        (function($){               
            $(".scrollcustom-high").mCustomScrollbar({
                theme: "minimal-dark",
                scrollButtons: {
                    enable: true
    
                },
                mouseWheel: {
                    enable: true
                },
    
            });
        })(jQuery);      
    });
})(jQuery);

// 
// side pooup

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
        document.getElementById("bodyoverlay").className = " ";
    }

    function openNav() {
        var winwidth = window.innerWidth;
        console.log(winwidth);
        if (winwidth > 768) {
            document.getElementById("myNav").style.width = "40%";
            document.getElementById("bodyoverlay").className = "bodyoverlay";
        } else {
            document.getElementById("myNav").style.width = "100%";
            document.getElementById("bodyoverlay").className = "bodyoverlay";
        }
    }

    function closeNavdepsoit() {
        document.getElementById("myNavdeposit").style.width = "0%";
        document.getElementById("bodyoverlay").className = " ";
    }

    function openNavdeposit() {
        var winwidth = window.innerWidth;
        console.log(winwidth);
        if (winwidth > 768) {
            document.getElementById("myNavdeposit").style.width = "40%";
            document.getElementById("bodyoverlay").className = "bodyoverlay";
        } else {
            document.getElementById("myNavdeposit").style.width = "100%";
            document.getElementById("bodyoverlay").className = "bodyoverlay";
        }
    }

$(document).ready(function() {

    // Close Mini Tab
        $(".fa-times").click(function() {
            $("#special-gift").hide();
        })
    
    // Nav Shrink
        $(window).scroll(function() {
            $("header").css("background-color", (window.scrollY > 100) ? "#fff" : "transparent");
        });
    
    // Open Voucher Copied Tab 
        $(".showNotification").click(function() {
            $("#notification-container").fadeIn();
        });

    // Close Voucher Copied Tab
        $("#close-btn").click(function() {
                $("#notification-container").fadeOut();
        });
})
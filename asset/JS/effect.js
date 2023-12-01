$(document).ready(function() {

    // Close Mini Tab
        $(".fa-times").click(function() {
            $("#special-gift").hide();
        })
    
    // Nav Shrink
        $(window).scroll(function() {
            $("header").css("background-color", (window.scrollY > 100) ? "#fff" : "transparent");
        });
    
        $(".showNotification").click(function() {
            // Hiển thị bảng thông báo khi nhấn vào nút
            $("#notification-container").fadeIn();
              });         
                $("#close-btn").click(function() {
                // Đóng bảng thông báo khi nhấn vào nút X
                $("#notification-container").fadeOut();
              });

        $(".showNotification").click(function() {
            // Hiển thị bảng thông báo khi nhấn vào nút
            $("#notification-container").fadeIn();
        });

        $("#close-btn").click(function() {
            // Đóng bảng thông báo khi nhấn vào nút X
            $("#notification-container").fadeOut();
        });
})
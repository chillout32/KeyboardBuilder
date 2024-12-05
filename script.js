$(document).ready(function () {
    button = $(".keyboard button.unactive")

    $('.subbtn').click(function () {
        $(this).next('.submenu, .submenucolor').slideToggle();
    });

    $(".keyBoard button").on("click", function () {
        $(this).toggleClass("active");
    });

    $("#resetColors").on("click", function () {
        console.log("clicked")
        $(".keyBoard button.active").toggleClass(".resetColors");
    });

    $("#applyColor").on("click", function () {
        const selectedColor = $("#colorPicker").val();
        $(".keyBoard button.active").css("background-color", selectedColor);
    });
});




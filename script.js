/*Reset Color Function*/
function resetColors() {
    $(".keyBoard button, .keyBoardAnsi button").removeAttr("style");
    $(".keyBoard button, .keyBoardAnsi button").removeClass("active colored");
    $("#keyCount").text(" 0");
}


$(document).ready(function () {
    let switchPrice = 0;
    let chosenSwitch;

    $('.subbtn').click(function () {
        $(this).next('.submenu, .submenucolor').slideToggle();
    });

    $(".keyBoard button, .keyBoardAnsi button").on("click", function () {
        $(this).toggleClass("active");
    });

    function updateTotalPrice() {
        let coloredKeys = $(".keyBoard button.colored, .keyBoardAnsi button.colored").length;
        let basePrice = 149;
        let pricePerKey = 1;
        let discountedPrice = 0;

        if (coloredKeys >= 50) {
            let discountAmount = 0.5;
            let discountedKeyCount = coloredKeys % 49;
            discountedPrice = (discountedKeyCount * discountAmount) + 10;
        } else if (coloredKeys >= 40) {
            let discountAmount = 0.4;
            let discountedKeyCount = coloredKeys % 39;
            discountedPrice = (discountedKeyCount * discountAmount) + 6;
        } else if (coloredKeys >= 30) {
            let discountAmount = 0.3;
            let discountedKeyCount = coloredKeys % 29;
            discountedPrice = (discountedKeyCount * discountAmount) + 3;
        } else if (coloredKeys >= 20) {
            let discountAmount = 0.2;
            let discountedKeyCount = coloredKeys % 19;
            discountedPrice = (discountedKeyCount * discountAmount) + 1;
        } else if (coloredKeys >= 10) {
            let discountAmount = 0.1;
            let discountedKeyCount = (coloredKeys % 10) + 1;
            discountedPrice = discountedKeyCount * discountAmount;
        }

        let totalPrice = basePrice + (coloredKeys * pricePerKey) - discountedPrice + switchPrice;
        $("#totalPrice").text(totalPrice.toFixed(2));
        $("#keyCount").text(coloredKeys);
    }


    /*Switch Selector*/
    $("#switch1").on("click", function () {
        switchPrice = 39.99;
        chosenSwitch = ("Cherry MX Blue");
        updateTotalPrice();
        $("#chosenSwitch").text(chosenSwitch)
    })

    $("#switch2").on("click", function () {
        switchPrice = 39.99;
        chosenSwitch = ("Cherry MX Red");
        updateTotalPrice();
        $("#chosenSwitch").text(chosenSwitch)
    })

    $("#switch3").on("click", function () {
        switchPrice = 39.99;
        chosenSwitch = ("Cherry MX Brown");
        updateTotalPrice();
        $("#chosenSwitch").text(chosenSwitch)
    })

    $("#switch4").on("click", function () {
        switchPrice = 44.99;
        chosenSwitch = ("Akko V3 Pro Cream Blue");
        updateTotalPrice();
        $("#chosenSwitch").text(chosenSwitch)
    })

    /*Color Picker Function*/
    $("#applyColor").on("click", function () {
        const selectedColor = $("#colorPicker").val();
        $(".keyBoard button.active, .keyBoardAnsi button.active").css("background", selectedColor).addClass("colored");
        $(".keyBoard button, .keyBoardAnsi button").removeClass("active");

        updateTotalPrice();
    });

    /*Reset Colors Button*/
    $("#resetColors").on("click", function () {
        resetColors();
        $("#keyCount").text("0");
        updateTotalPrice();
    });


    /*Functions for changing layout*/
    $("#toggleAnsi").on("click", function () {
        $(".keyBoardAnsi").css("display", "grid")
        $(".keyBoard").css("display", "none")

        switchPrice = 0;
        $("#chosenSwitch").text("")

        resetColors();
        updateTotalPrice();
    })

    $("#toggleIso").on("click", function () {
        $(".keyBoardAnsi").css("display", "none")
        $(".keyBoard").css("display", "grid")

        switchPrice = 0;
        $("#chosenSwitch").text("");

        resetColors();
        updateTotalPrice();
    })

});

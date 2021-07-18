$(document).ready(function() {
    $(".menu__btn").click(function(event) {
        $(this).toggleClass("menu__btn menu__btn1");
        $(".main__block").toggleClass("blockstr");
        $(".block1").toggleClass("blockstr1");
    });
  });


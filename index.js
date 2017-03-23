

$(document).ready(function(){
    $('.ck-slide').ckSlide();

    $(".button").click(function(){
        $('.layer').toggle(400);

    })

    var target_top = $("#footerup").offset().top;
    $(".dropdown").on("click",function(){
        $("html,body").animate({scrollTop:target_top},500)
    })
});


$('#feel-the-wave').wavify({
    height: 40,
    bones: 9,
    amplitude: 15,
    color: '#ffcd56',
    speed: .45
});

$('#feel-the-wave-two').wavify({
    height: 40,
    bones: 8,
    amplitude: 18,
    color: '#fbc33f',
    speed: .25
});

$('#feel-the-wave-three').wavify({
    height: 38,
    bones: 7,
    amplitude: 20,
    color: '#ffe18b',
    speed: .35
});

$( document ).ready(function() {

$('#past').on("click", function () {
    $("#background").css('background-image', 'url(img/past.gif)');
    $("#vehicle").attr("src","img/knight.gif");
    $('#vehicle').removeClass('vehicle3');
    $('#vehicle').removeClass('vehicle2');
    $('#vehicle').addClass('vehicle1');    
    
    });

$('#now').on("click", function () {
    $("#background").css('background-image', 'url(img/now.gif)');
    $("#vehicle").attr("src","img/delorean.png");
    $('#vehicle').removeClass('vehicle3');
    $('#vehicle').removeClass('vehicle1');
    $('#vehicle').addClass('vehicle2');    
    });

$('#futur').on("click", function () {
    $("#background").css('background-image', 'url(img/futur.gif)');
    $("#vehicle").attr("src","img/monkey.gif");
    $('#vehicle').removeClass('vehicle2');
    $('#vehicle').removeClass('vehicle1');
    $('#vehicle').addClass('vehicle3');    
    });
});

$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    top = scrollTop;

    $('#alcool').css({
        top: $(window).scrollTop() * 0.2 + "px"
    });
    $('#beerlevel').css({
        bottom: 111 - $(window).scrollTop() * 0.2 + "px"
    });

    $('#vehicle').css({
        left: $(window).scrollTop() * 0.8 + "px"
    });

})




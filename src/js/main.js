import $ from 'jquery';

// parallax design with jQuery
$(() => {
    $(window).scroll(function () {
        var dy = $(this).scrollTop();
        console.log(dy);
        $('#eyecatch').css('background-position-y', dy/2 + 'px');
    })
});


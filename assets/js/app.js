$(function () {
    $("#inputCheckIn").datepicker();
    $("#inputCheckOut").datepicker();

    $('.level-slider').slick({
        dots: true,
        slidesToShow: 2,
        arrwe: false
    });


    function videoToggle() {
        video = $('.level-video').get(0)

        if (video.paused) {
            video.play();
            $('.v-control-play').hide();
            $('.v-control-pause').show();
        } else {
            video.pause();
            $('.v-control-play').show();
            $('.v-control-pause').hide();
        }
    }

    $('.v-control-play').click(function () {
        videoToggle();
    })
    $('.v-control-pause').click(function () {
        videoToggle();
    })
});
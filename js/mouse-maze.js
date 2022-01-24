$(document).ready(function () {
    let startClicked = false;

    $('#start').click(function () {
        $('.boundary').removeClass('youlose');
        startClicked = true;
        let firstClicked = true;

        $(document).on('mouseover', 'div', function (e) {
            if ($(e.target).hasClass('boundary') && firstClicked && startClicked) {
                $('.boundary').addClass('youlose');
                alert("Sorry, you lost. :[");
                $(document).unbind('mouseover', 'div');
                firstClicked = false;
            }

        });


    });

    $('#end').mouseover(function () {
        if (startClicked) {
            startClicked = false;
            alert("you win! :]");
        }
    })
});



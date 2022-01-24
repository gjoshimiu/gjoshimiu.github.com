$(document).ready(function () {

    $(document).keypress(function (value) {
        if (value.key === 's' || value.key === 'S') {
            $(document).unbind('keypress');
            let val = true;

            $(document).on('mouseover', 'div', function (e) {
                if ($(e.target).hasClass('boundary') && val) {
                    $('.boundary').css('background-color', '#FF8888');
                    alert("Sorry, you lost. :[");
                    $(document).unbind('mouseover');
                    val = false;
                }

            });

            $('#end').mouseover(function () {
                if (val) {
                    alert("you win! :]");
                }
                $(document).unbind('mouseover');
            })

        }


    });
});



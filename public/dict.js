$(function () {

    $('#lookup').click(function () {
        $.get('http://localhost:3000/search', {
            'queryText': $('#searchText').val()
        }).done(function (params) {
            var result = $('#result');
            result.empty();
            if (params.length === 0) {
                result.html('<span class="noRecordFound">No record found</span>');
            } else {
                result.html(params.map(((row, index) => {
                    let wordTypeElement = '';
                    if (row.wordtype) {
                        wordTypeElement = '(' + row.wordtype + ')';
                    }
                    return '<p><span class="index">' + (index + 1) + wordTypeElement + ' ::</span> ' + row.definition + '</p>'
                })));
            }
        }).fail(function (err) {
            console.error(err);
        });
    });

});
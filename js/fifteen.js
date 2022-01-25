(function ($) {
    $(document).ready(function () {
        $("#puzzlearea").append("<div></div>");

        let emptyDiv = {x: 400, y: 300};

        $("#puzzlearea").find("div").each(function (i, e) {
            var div = e;

            // calculate x and y for this piece
            var x = ((i % 4) * 100);
            var y = (Math.floor(i / 4) * 100);

            // set basic style and background
            div.className = "puzzlepiece";
            div.style.left = x + 'px';
            div.style.top = y + 'px';
            div.style.backgroundImage = 'url("img/background.jpeg")';
            div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

            // store x and y for later
            div.x = x;
            div.y = y;
        });

        $("#shufflebutton").click(function () {
            let list = $("#puzzlearea").find("div");
            shuffle(list).each(function (i, e) {
                var div = e;

                // calculate x and y for this piece
                var x = ((i % 4) * 100);
                var y = (Math.floor(i / 4) * 100);

                // set basic style and background
                div.className = "puzzlepiece";
                div.style.left = x + 'px';
                div.style.top = y + 'px';
                div.x = x;
                div.y = y;

                if (div.innerText === '') {
                    emptyDiv.x = div.x;
                    emptyDiv.y = div.y;
                }
            });
        });

        $("#puzzlearea div").mouseenter(function (ee) {
            $(ee.target).addClass("movablepiece");
        }).mouseleave(function (ee) {
            $(ee.target).addClass("movablepiece");
        }).click(function (idx) {
            if (idx.target.innerText) {
                let originalIndexX = idx.target.x;
                let originalIndexY = idx.target.y;

                const neighbour = findNeighbour(originalIndexX, originalIndexY);
                const ab = neighbour.filter(a => {
                    return a.x === emptyDiv.x && a.y === emptyDiv.y;
                });
                if (ab.length > 0) {
                    $("#puzzlearea").find("div").each(function (idx1, eee) {
                        if (eee.x === ab[0].x && eee.y === ab[0].y) {
                            console.log(eee, idx);
                            const originalTop = idx.target.style.top;
                            const originalLeft = idx.target.style.left;

                            idx.target.x = eee.x;
                            idx.target.y = eee.y;
                            idx.target.style.top = eee.style.top;
                            idx.target.style.left = eee.style.left;

                            eee.style.top = originalTop;
                            eee.style.left = originalLeft;
                            eee.x = originalIndexX;
                            eee.y = originalIndexY;

                            emptyDiv.x = eee.x;
                            emptyDiv.y = eee.y;
                        }
                    });
                }
            }


        })

        function findNeighbour(x, y) {
            let neighbour = [];
            if (x >= 100) {
                neighbour.push({x: x - 100, y: y});
            }
            if (x < 400) {
                neighbour.push({x: x + 100, y: y});
            }

            if (y >= 100) {
                neighbour.push({x: x, y: y - 100});
            }
            if (y < 400) {
                neighbour.push({x: x, y: y + 100});
            }
            return neighbour;
        }

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            console.log(array);
            return array
        }

    });
})(jQuery);

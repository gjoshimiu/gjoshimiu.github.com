(function ($) {
    $(document).ready(function () {


        let emptyDiv = {x: 400, y: 300};

        $("#puzzlearea").find("div").each(function (i, e) {
            let div = e;
            let x = ((i % 4) * 100);
            let y = (Math.floor(i / 4) * 100);

            // set basic style and background
            div.style.left = x + 'px';
            div.style.top = y + 'px';

            div.className = "puzzlepiece";
            div.style.backgroundImage = 'url("img/background.jpeg")';
            div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
            // store x and y for later
            div.x = x;
            div.y = y;
        });

        $("#puzzlearea").append("<div style='border: none'></div>");

        $("#shufflebutton").click(function () {
            let list = $("#puzzlearea").find("div");
            shuffle(list).each(function (i, e) {
                let div = e;

                // calculate x and y for this piece
                let x = ((i % 4) * 100);
                let y = (Math.floor(i / 4) * 100);

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
        }).click(function (currentElement) {
            if (currentElement.target.innerText) {
                let originalIndexX = currentElement.target.x;
                let originalIndexY = currentElement.target.y;

                const neighbour = findNeighbour(originalIndexX, originalIndexY);
                const ab = neighbour.filter(a => {
                    return a.x === emptyDiv.x && a.y === emptyDiv.y;
                });
                if (ab.length > 0) {
                    $("#puzzlearea").find("div").each(function (idx1, emptyElement) {
                        if (emptyElement.x === ab[0].x && emptyElement.y === ab[0].y) {
                            console.log(emptyElement, currentElement);
                            const originalTop = currentElement.target.style.top;
                            const originalLeft = currentElement.target.style.left;

                            currentElement.target.x = emptyElement.x;
                            currentElement.target.y = emptyElement.y;
                            currentElement.target.style.top = emptyElement.style.top;
                            currentElement.target.style.left = emptyElement.style.left;

                            emptyElement.style.top = originalTop;
                            emptyElement.style.left = originalLeft;
                            emptyElement.x = originalIndexX;
                            emptyElement.y = originalIndexY;

                            emptyDiv.x = emptyElement.x;
                            emptyDiv.y = emptyElement.y;
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
            return array
        }

    });
})(jQuery);

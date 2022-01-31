const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

var data = ["1,1,2,3,4", "1,4,9,14,25", "2,3,5,7,11", "1,2,4,6,8,16"];

app.use(cookieParser());
app.use(require('body-parser').urlencoded({extended: false}));
app.use(express.json())
app.set('view engine', 'pug');
app.get('/', (req, res) => {
    var index = 0;
    var score = 0;
    var currentSelectedData = data[index].split(",");
    res.cookie('scoreCookie', {
        index: index,
        score: score
    })
    res.render('number-quiz-lab', {
        data: currentSelectedData.filter(((value, index) => index !== currentSelectedData.length - 1)).join(","),
        score: score
    });
});

app.post("/check", ((req, res) => {
    var cookies = req.cookies.scoreCookie
    var index = cookies.index;
    var score = cookies.score;
    if (index < data.length) {
        var currentSelectedData = data[index].split(",");
        const lastData = parseInt(currentSelectedData[currentSelectedData.length - 1]);
        const userNextSequence = req.body.nextSequence;
        if (lastData === parseInt(userNextSequence)) {
            score = score + 1;
        }

        index = index + 1;
        if (index !== data.length) {
            currentSelectedData = data[index].split(",");
            res.cookie('scoreCookie', {
                index: index,
                score: score,
            })
            res.render('number-quiz-lab', {
                data: currentSelectedData.filter(((value, index) => index !== currentSelectedData.length - 1)).join(","),
                score: score
            });
        } else {
            renderResultPage(res, score, data.length);
        }

    } else {
        renderResultPage(res, score, data.length);
    }
}));

function renderResultPage(res, score, dataLength) {
    res.render('number-quiz-lab-result', {
        score: score,
        totalScore: dataLength
    });
}


app.listen(3000, function () {
    console.log("Server Running on 3000.");
});
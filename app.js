const express = require('express');
const app = express();

var data = ["1,1,2,3,4", "1,4,9,14,25", "2,3,5,7,11", "1,2,4,6,8,16"];
var currentSelectedData;
var index = 0;
var score = 0;

app.use(require('body-parser').urlencoded({extended: false}));
app.set('view engine', 'pug');
app.get('/', (req, res) => {
    currentSelectedData = data[index].split(",");
    res.render('number-quiz-lab', {
        data: currentSelectedData.filter(((value, index) => index !== currentSelectedData.length - 1)).join(","),
        score: score
    });
});

app.post("/check", ((req, res) => {
    const lastData = parseInt(currentSelectedData[currentSelectedData.length]);
    console.log(res.body);
    const userNextSequence = res.body.nextSequence;
    if (lastData === parseInt(userNextSequence)) {
        score = score + 1;
    }
    if (index < data.length) {
        index = index + 1;
        currentSelectedData = data[index].split(",");
        res.render('number-quiz-lab', {
            data: currentSelectedData.filter(((value, index) => index !== currentSelectedData.length - 1)).join(","),
            score: score
        });
    } else {
        res.render('number-quiz-lab-result', {
            score: score,
            totalScore: data.length
        });
    }
}));


app.listen(3000, function () {
    console.log("Server Running..");
});
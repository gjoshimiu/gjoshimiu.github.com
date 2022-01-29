var express = require('express');
const fs = require("fs");

var app = express();
app.use(require('body-parser').urlencoded({extended: false}));
app.use('/static', express.static('public'));

app.get("/", (req, res, next) => {
    fs.readFile('simple-calculator/calculator.html', function (err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200); // Content-Type not included
        res.write(data);
        return res.end();
    });
})
    .post("/calculate", (req, res) => {
        var body = req.body;
        var firstNumber = parseInt(body.first);
        var secondNumber = parseInt(body.second);
        var operator = body.operator;
        var result = 0;
        if (operator === '+') {
            result = firstNumber + secondNumber;
        } else if (operator === '-') {
            result = firstNumber - secondNumber;
        } else if (operator === '*') {
            result = firstNumber * secondNumber;
        } else {
            result = firstNumber / secondNumber;
        }
        fs.readFile('simple-calculator/calculator-result.html', function (err, data) {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end("404 Not Found");
            }
            res.writeHead(200); // Content-Type not included
            res.write(data.toString().replace("#result", result));
            return res.end();
        });
    }).listen(8080);
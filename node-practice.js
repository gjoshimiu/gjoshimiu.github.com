var express = require('express');
var app = express();


app.use(((req, res, next) => {
    console.log("i am middleware.")
    req.params.val = "123"
    next();
}))

app.get('/', ((req, res, next) => {
    console.log(req.params)
    res.send("I am done");
    res.end();
}));


app.listen(3000, () => {
    console.log("i am called..")
});


var express = require('express');
var path = require('path');
var db = require('./word')
const bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.json());
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', ((req, res, next) => {
    res.render('dict');
}));

app.get('/search', async (req, res) => {
    res.set('Content-Type', 'application/json');
    const search = req.query.queryText;
    res.status(200);
    await db.findWord(search, function (data) {
        res.send(data);
    });
});

app.listen(3000, () => {
    console.log('Server running 3000!!');
})
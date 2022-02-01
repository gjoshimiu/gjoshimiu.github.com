const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'entries',
})

module.exports = {
    findWord:
        async function findWord(text, callback) {
            await connection.query('SELECT * from entries where word = ?', [text], function (err, rows, fields) {
                if (err) {
                    console.log(err)
                    throw err
                }
                let data = [];
                for (let row of rows) {
                    data.push({
                        word: row.word,
                        wordtype: row.wordtype,
                        definition: row.definition
                    })
                }
                callback(data)
            });

        }
};
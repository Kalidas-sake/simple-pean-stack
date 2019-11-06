const pool = require('./database.ts');

pool.query('SELECT now()', (err, res) => {
    console.log(err, res);
    pool.end();
});
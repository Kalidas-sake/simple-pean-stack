const { Pool } = require('pg');

const connectionString = 'postgres://localhost:5432/test';
const pool = new Pool({
  connectionString : connectionString
  })
 
  pool.query('SELECT now()', (err,res) =>{
      console.log(err,res);
      
  });

  module.exports = pool;
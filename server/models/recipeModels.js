const { Pool } = require('pg');
//establishing structure of DB 
//SQL structure here
const PG_URI = 'YOUR_URI_HERE';

const pool = new Pool({
    connectionString: PG_URI
});
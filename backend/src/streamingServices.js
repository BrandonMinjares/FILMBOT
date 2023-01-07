const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});


exports.updateStreamingServices = async (req, res) => {
    console.log('in backend update streaming');
    console.log(req.user);
    /*
  const select = `SELECT P."streamingServices" FROM Person P WHERE ` +
  `P."data" ->>'email' = $1`;
  const query = {
    text: select,
    values: [req.user],
  };

  const {rows} = await pool.query(query);
  return rows[0].created;
  */
};

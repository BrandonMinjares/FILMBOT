
const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});


exports.postStreamingServices = async (req, res) => {
  console.log('in backend update streaming');
  // console.log(req.user.email);
  console.log(req.body);
  const stream = {};

  for (let i = 0; i < req.body.length; i++) {
    stream[req.body[i]] = true;
  }

  const update = `UPDATE person set streamingServices = $1`+
  `WHERE Person."data" ->>'email' = $2`;

  const updateQuery = {
    text: update,
    values: [stream, req.user.email],
  };
  const {rows} = await pool.query(updateQuery);

  return rows[0];
};

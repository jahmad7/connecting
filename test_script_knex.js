const pg = require("pg");
const settings = require("./settings"); // settings.json
const knex = require('knex')(settings)({
    client: 'pg',
    connection: {
      host : settings.host,
      user : settings.user,
      password : settings.password,
      database : settings.database
    }
  });

const firstName = process.argv[2];

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT * FROM famous_people WHERE UPPER(first_name) = UPPER($1) LIMIT 1", [firstName], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows[0]); //output: 1
    client.end();
  });
});
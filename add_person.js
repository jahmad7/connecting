const settings = require("./settings"); // settings.json
const knex = require('knex')({
    client: 'pg',
    connection: {
      host : settings.host,
      user : settings.user,
      password : settings.password,
      database : settings.database
    }
  });

const firstName = process.argv[2];
const lastName = process.argv[3];
const dateOfBirth = process.argv[4];

console.log(firstName, lastName, dateOfBirth);

knex('famous_people').insert({
    first_name: firstName,
    last_name: lastName,
    birthdate: dateOfBirth
})
.then(() => console.log("it worked"))
.catch((err) => {console.log(err); throw err})
.finally(() => knex.destroy());

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

knex.select('*').from('famous_people')
  .where('first_name', '=', firstName)
  .limit(10)
  .then(rows => {
    const people = rows;
    console.log("searching...")
    console.log(`Found ${people.length} person(s) by the name of ${firstName}`);

    people.forEach((person) => {
        let dob = person.birthdate;
        console.log ("Person: ", person.first_name);
        console.log("   -> Date of birth: ", dob.toString().substring(0,15)); 
    });
});

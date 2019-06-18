
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('milestones', function(table){
          table.increments("id").primary();
          table.string('descrption').default('Was born');
          table.date('date_achieved');
      })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('milestones')
  ])
};

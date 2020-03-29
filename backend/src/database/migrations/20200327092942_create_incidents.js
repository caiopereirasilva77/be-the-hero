
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
          table.increments('id').primary()
               
          table.string('title').notNullable();
          table.string('description').notNullable();
          table.decimal('value').notNullable();


          table.string('id_ong').notNullable();
          table.foreign('id_ong').references('id_ong').inTable('ongs');
        });
       };
  
  exports.down = function(knex) {
     return knex.schema.dropTable('incidents');
    
  };
  

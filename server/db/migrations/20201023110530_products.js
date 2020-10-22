
exports.up = (knex) => {
  return knex.schema.createTable('products', table => {
    table.increments('id').primary()
    table.string('title')
    table.string('description', 5000)
    table.string('image')
  })  
}

exports.down = (knex) => {
  return knex.schema.dropTable('products')
}

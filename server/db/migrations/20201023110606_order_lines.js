
exports.up = (knex) => {
  return knex.schema.createTable('order_lines', table => {
    table.increments('id').primary()
    table.integer('product_id')
    table.integer('order_id')
    table.integer('quantity')
  })  
}

exports.down = (knex) => {
  return knex.schema.dropTable('order_lines')
}

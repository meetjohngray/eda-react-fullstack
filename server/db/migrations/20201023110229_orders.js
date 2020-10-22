
exports.up = (knex) => {
  return knex.schema.createTable('orders', table => {
    table.increments('id').primary()
    table.string('order_code')
  })  
}

exports.down = (knex) => {
  return knex.schema.dropTable('orders')
}


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('order_lines').del()
    .then(function () {
      // Inserts seed entries
      return knex('order_lines').insert([
        {id: 1, product_id: 1, order_id: 1, quantity: 1},
        {id: 2, product_id: 1, order_id: 2, quantity: 2},
        {id: 3, product_id: 2, order_id: 2, quantity: 1}
      ]);
    })
} 

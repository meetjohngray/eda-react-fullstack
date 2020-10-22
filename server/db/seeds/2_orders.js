
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then( () => {
      // Inserts seed entries
      return knex('orders').insert([
        {id: 1, order_code: ''},
        {id: 2, order_code: ''},
        {id: 3, order_code: ''}
      ]);
    });
};

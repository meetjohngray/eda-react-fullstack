
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then( () => {
      // Inserts seed entries
      return knex('orders').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};

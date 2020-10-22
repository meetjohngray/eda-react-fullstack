
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('products').del()
    .then( () => {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, title: 'Product 1', description: '', image: ''},
        {id: 2, title: 'Product 2', description: '', image: ''},
        {id: 3, title: 'Product 3', description: '', image: ''}
      ])
    })
}

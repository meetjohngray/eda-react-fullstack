// This code converted our csv data into JSON

const csv = require('csv-parser')
const fs = require('fs')
const path = require('path')
const results = []

fs.createReadStream(path.join(__dirname, './sample_products.csv'))
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    const products = results.filter(p => {
      return p['Type'] == 'simple'
    })
    .map(p => {
      return {
        id: p.ID,
        title: p.Name,
        description: p.Description,
        image: p.Images         
      }
    })
     fs.writeFile(path.join(__dirname, 'products.json'), JSON.stringify(products, null, 4), () => {
       console.log('all done')
     })
  }) 

const products = require('./products.json')

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('products').del()
    .then( () => {
      // Inserts seed entries
      return knex('products').insert(products)
    })
}

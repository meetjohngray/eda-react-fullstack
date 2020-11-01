import React from 'react'
import Product from './Product'

const Products = (props) => {
  const products = props.products
  return (
    <ul className="products">
      {products.map(p => {
        return (
          <Product p={p} key={p.id}/>
        )
        })
      }
    </ul>
  )
}

export default Products
import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions/index'


const imagePlaceholder = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthealmanian.com%2Fwp-content%2Fuploads%2F2019%2F01%2Fproduct_image_thumbnail_placeholder.png&f=1&nofb=1"

const Product = (props) => {
  const p = props.p
  return (
    <li className="product">
      <h3>{p.title}</h3>
      <img src={ p.image || imagePlaceholder } />
      <button 
      className="cart"
      onClick={() => { 
        props.dispatch(addToCart(p.id))
      }}>
        Add To Cart
      </button>
    </li>

  )
}

// No need to map state to props since we passed in 
// the props. We need connect so that dispatch will work 
export default connect()(Product)
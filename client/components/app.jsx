import React from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../apis/products'
import { setProducts } from '../actions/index'
import Products from './Products'
class App extends React.Component {
   
  // React Only
  // state = {
  //   products: []
  // }

  // The below could be moved to the Products component
  componentDidMount() {
    console.log('1-componentDidMount')
    console.log('2-getProducts')
    // fetchProducts()
    getProducts()
      .then(products => {
        console.log('4-gotProducts')
        // React Only
        // this.setState.products({ 
        //   products: products,
        //  })

        this.props.dispatch(setProducts(products))
      })
  }

  render() {
    console.log('0 or 8-render products')
    // React Only
    // const products = this.state.products
    const products = this.props.products
    const cartCount = this.props.cartCount
    return (
      <>
        <header>
          <h1>Go Shopping!</h1>
          <h2>Cart ({cartCount})<button>Checkout</button></h2>
        </header>
        <Products products={this.props.products}/>
      </>
    )
  }
}

// Fancy Pants
// function mapStateToProps({products}) {
//   return {
//     products
//   }
// }
// or even fancier
// const mapStateToProps(({products}) => {products})

function mapStateToProps(globalState) {
  console.log('-1 or 7- setProduts in React props')
  return {
    products: globalState.products,
    cartCount: globalState.cart.reduce((total, item) => {
      return total + item.quantity
    }, 0)
  }
}

export default connect(mapStateToProps)(App)
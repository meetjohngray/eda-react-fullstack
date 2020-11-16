import React from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../apis/products'
import { createOrder } from '../apis/orders'
import { emptyCart, setMessage, setProducts, clearMessage } from '../actions/index'
import Products from './Products'
class App extends React.Component {
   
  // React Only
  // state = {
  //   products: []
  // }

  // The below could be moved to the Products component
  componentDidMount() {
    console.log('1-componentDidMount')
    this.fetchProducts()
  }

  fetchProducts = () => {
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

  checkout = () => {
    // get the cart items
    // this.props.cart
    
    // send to api as new order
    const order = this.props.cart
    createOrder(order)
    // console.log(order)
      .then(orderDetails => {
        this.props.dispatch(setMessage('info', 'New order created. Your code is: ' + orderDetails.order_code ))
        this.props.dispatch(emptyCart())
      })   
      .catch(error  => {
        this.props.dispatch(setMessage('error', 'No order created. Please try again.' ))
    })
  }

  render() {
    console.log('0 or 8-render products')
    // React Only
    // const products = this.state.products
    const products = this.props.products
    const cartCount = this.props.cart.reduce((total, item) => total + item.quantity, 0)
    console.log('cart', cartCount)

    return (
      <>
        <header>
          <h1>Go Shopping!</h1>
          {this.props.message.text &&
           <h2 className={["message", this.props.message.messageType].join(' ')}>
            {this.props.message.messageType.toUpperCase()}: 
            {this.props.message.text} 
            <button onClick={() => this.props.dispatch(clearMessage())}>
              Clear
            </button>
            </h2>}
          <h2>Cart ({cartCount})<button onClick={this.checkout}>Checkout</button></h2>
        </header>
        <Products products={products}/>
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
    // cartCount: globalState.cart.reduce((total, item) => {
    //   return total + item.quantity
    // }, 0),
    cart: globalState.cart,
    message: globalState.message
  }
}

export default connect(mapStateToProps)(App)
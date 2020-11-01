import React from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../apis/products'
import { setProducts } from '../actions/index'


const imagePlaceholder = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthealmanian.com%2Fwp-content%2Fuploads%2F2019%2F01%2Fproduct_image_thumbnail_placeholder.png&f=1&nofb=1"
class App extends React.Component {
   
  // React Only
  // state = {
  //   products: []
  // }

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

        this.props.dispatch(setProducts(products ))
      })
  }

  render() {
    console.log('0 or 8-render products')
    // React Only
    // const products = this.state.products
    const products = this.props.products

    return (
      <>
        <h1>Hello there!</h1>
        <ul>
           {products.map(p => {
             return ( 
               <li key={p.id}>
                 <h3>{p.title}</h3>
                 <img src={ p.image || imagePlaceholder } style={{ maxWidth: '200px'}}/>
              </li>
             )
           })}
        </ul>
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
    products: globalState.products
  }
}

export default connect(mapStateToProps)(App)
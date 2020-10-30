import React from 'react'
import { connect } from 'react-redux'
const imagePlaceholder = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthealmanian.com%2Fwp-content%2Fuploads%2F2019%2F01%2Fproduct_image_thumbnail_placeholder.png&f=1&nofb=1"
class App extends React.Component {
  
  // React Only
  // state = {
  //   products: []
  // }

  componentDidMount() {
    // fetchProducts()

  }

  render() {
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
  return {
    products: globalState.products
  }
}

export default connect(mapStateToProps)(App)
import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
// ... (other imports and code)

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct
  };

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    // Fetch products from the API
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(response => response.json())
      .then(data => {
        // Update state with fetched products
        this.setState({
          products: data
        });
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  };

  fetchDetailProduct = (id) => {
    // Fetch detail product from the API based on the provided id
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then(response => response.json())
      .then(data => {
        // Update state with the fetched detail product
        this.setState({
          detailProduct: data
        });
      })
      .catch(error => {
        console.error(`Error fetching detail product with id ${id}:`, error);
      });
  };

  handleDetail = (id) => {
    // Fetch and set the detail product based on the provided id
    this.fetchDetailProduct(id);
  };

  addToCart = (id) => {
    console.log(`hello from add to cart is ${id}`);
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

// ... (other exports)


const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

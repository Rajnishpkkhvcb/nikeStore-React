import React, { Component } from "react";

const ProductContext = React.createContext();

// Define a placeholder detailProduct
const detailProduct = {
  // Add properties for your placeholder product
};

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

  handleDetail = () => {
    console.log("hello from detail");
  };

  addToCart = id => {
    console.log(`hello from add to cart is ${id} `);
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

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

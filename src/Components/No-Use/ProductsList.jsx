import React, { Component } from "react";
import ProductCopy from "./Product/Product copy";
// import Product from "./Product/Product";
import "./products.css";

export default class ProductsList extends Component {
  //Executes when the component is mounted
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  render() {
    return (
      <div className="container">
        <div className="container products__container">
          <h1 className="products__title">Products List</h1>
          {this.state.products.map((prod) => {
            return (
              <ProductCopy
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Add to Cart</button>
              </ProductCopy>
            );
          })}
        </div>
      </div>
    );
  }
  // render ends here

  componentDidMount = async () => {
    var response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });

    var prods = await response.json();

    console.log(prods);

    this.setState({ products: prods });
  };

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  componentDidCatch(error, info) {
    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }

  //executes when the user clicks on + button.
  handleIncrement = (product, maxValue) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;

      //update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };

  //executes when the user clicks on - button.
  handleDecrement = (product, minValue) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;

      //update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };

  //executes when the user clicks on Delete (X) button in the Products component.
  handleDelete = (product) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure to delete?")) {
      //delete product based on index
      allProducts.splice(index, 1);

      //update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };
}

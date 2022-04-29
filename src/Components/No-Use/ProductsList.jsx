import React, { Component } from "react";
import ProductCopy from "./Product copy";
// import Product from "./Product/Product";
import "../Products/products.css";

export default class ProductsList extends Component {
  //Executes when the component is mounted
  constructor(props) {
    //console.log("constructor - ProductsList");
    super(props); //calling super class's constructor

    //initialization of the state
    this.state = {
      products: [],
    };
  }

  render() {
    //console.log("render - ProductsList");

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

  //Executes after constructor and render method (includes life cycle of child components, if any) of current component
  componentDidMount = async () => {
    //send request to server
    var response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });

    //the following code executes after receiving response from server
    //converting the response body into a JS object array
    var prods = await response.json();

    //the following code executes after converting response body into JS object array
    console.log(prods);

    //updating products into component's state
    this.setState({ products: prods });
  };

  componentDidUpdate(prevProps, prevState) {}

  //Executes when the current instance of current component is being deleted from memory
  componentWillUnmount() {
    //console.log("componentWillUnmount - ProductsList");
  }

  componentDidCatch(error, info) {
    //console.log("componentDidCatch - ProductsList");
    //console.log(error, info);

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

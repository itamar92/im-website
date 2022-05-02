import React, { Component } from "react";
import "../products.css";
import bootstrap from "bootstrap";
import SoundCloud from "react-player/soundcloud";
import Waveform from "../Waveform";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

export default class ProductCopy extends Component {
  constructor(props) {
    super(props);

    //console.log("Constructor - Product");

    this.state = {
      product: this.props.product,
    };
  }

  render() {
    return (
      <div className="product__content">
        <div className="product__cards">
          <div className="product__card">
            <div className="text-muted">
              {/* delete button starts */}
              <span
                className="pull-right hand-icon"
                onClick={() => {
                  this.props.onDelete(this.state.product);
                }}
              >
                <i className="fa fa-times"></i>
              </span>
              {/* delete button ends */}
            </div>
            <div className="player-wrapper">
              <SoundCloud
                className="react-player"
                url={this.state.product.url}
                controls={true}
                width="540px"
                height="150px"
              />
            </div>
            <h5 className="pt-2 border-top">
              {this.state.product.productName}
            </h5>

            <div>$ {this.state.product.price}</div>

            {/* card body ends here */}

            <div className="card-footer">
              <div className="">
                <div className="btn-group">
                  <button
                    className="btn btn-outline-success"
                    onClick={() => {
                      this.props.onIncrement(this.state.product, 10);
                    }}
                  >
                    +
                  </button>
                  <span className="badge">{this.state.product.quantity}</span>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => {
                      this.props.onDecrement(this.state.product, 0);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
              {/* float-left ends here */}
            </div>
            <div className="float-right">{this.props.children}</div>
          </div>
          {/* card-footer ends here */}
        </div>
      </div>
    );
  }

  componentDidMount() {
    //console.log("componentDidMount - Product");
  }

  componentDidUpdate() {
    //console.log("componentDidUpdate - Product");
  }

  //Executes when the current instance of current component is being deleted from memory
  componentWillUnmount() {
    //console.log("componentWillUnmount - Product");
  }
}

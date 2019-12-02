import React, { Component } from "react";

//This component takes the product name from the User
export class productName extends Component {
  state = { productName: "" };
  componentDidMount(){
    this.setState({productName:this.props.product})
  }

  render() {
    console.log(this.props.product)

    return (
      <div>
        <h4>{this.state.productName}</h4>
        <input
          style={{ width: "100%" }}
          onChange={e => {
            this.props.productname(e.target.value);
          }}
          type="text"
          placeholder="Product"
          // value={this.state.productName}
        />
      </div>
    );
  }
}

export default productName;

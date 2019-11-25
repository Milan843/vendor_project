import React, { Component } from "react";

//This component takes the product name from the User
export class productName extends Component {
  render() {
    return (
      <div>
        <input
          style={{ width: "100%" }}
          onChange={e => {
            this.props.productname(e.target.value);
          }}
          type="text"
          placeholder="Product"
        />
      </div>
    );
  }
}

export default productName;

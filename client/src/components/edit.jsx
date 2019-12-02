import React, { Component } from "react";
import Axios from "axios";
import Stepper from "./steper3";
import { withRouter } from "react-router";
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBContainer,
  MDBBadge,
  MDBBtn,
  MDBIcon
} from "mdbreact";
import productName from "./productName";

export class edit extends Component {
  state = { itemlist: [], product_name: "", update: "" };

  componentDidMount = async () => {
    const product_id = window.location.pathname.split("/")[2];
    const res = await Axios.get(`/edit/${product_id}`);
    console.log(res.data.item);
    const productName=res.data.product
    const itemList=res.data.item

    this.setState({
      product_name:productName,
      itemlist: itemList
    });
    console.log(this.state);
  };

  handledelete = async e => {
    console.log("delete");
    return this.setState({
      update: <Stepper product={this.state.product_name} />
    });
  };

  // deleteitem = async item_id => {
  //   const arr = this.state.itemlist.filter(item => {
  //     return item._id != item_id ? true : false;
  //   });
  //   this.setState({ itemlist: [...arr] });
  // };
  deleteitem = async item_id => {
    await Axios.get(`/deleteitem/${item_id}`);
  }

  showlist = () => {
    var count = 0;
    return this.state.itemlist.map(item => {
      count++;
      return (
        <MDBListGroupItem className="d-flex align-items-center">
          <MDBBadge color="primary" style={{ margin: "5px" }} pill>
            {count}
          </MDBBadge>
          <div className="proddetails">{item.item_name}</div>
          <div>
            <input
              className="proddetails"
            
              value={item.quantity}
              // onChange={e => this.changeqty(item.item_name, e.target.value)}
            />
          </div>
          <div className="edbtn">
            <button
              className="fas fa-trash-alt"
              onClick={e => this.deleteitem(item._id)}
            ></button>
          </div>
        </MDBListGroupItem>
      );
    });
  };

  changeqty = (item_name, qty) => {
    const obj = this.state.itemlist.filter(item => {
      return item.item_name == item_name ? true : false;
    });
    var count = -1;
    const index = this.state.itemlist.map(item => {
      count++;
      return item.item_name == item_name ? count : false;
    });
    console.log(index);
    const num = index.map(numbr => {
      if (typeof numbr == false) {
        return numbr;
      }
    });
    console.log(num);

    
    obj[0].quantity = qty;
    const arr = this.state.itemlist.filter(item => {
      return item.item_name != item_name ? true : false;
    });
    arr.splice(index, 0, ...obj);
    console.log(arr, index);

    this.setState({ itemlist: [...arr] });
  };

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <MDBContainer>
          <MDBListGroup className="MDBListGroup">
            <MDBListGroupItem className="d-flex align-items-center"></MDBListGroupItem>
            {this.showlist()}
            <button onClick={e => this.handledelete()}>update</button>
            {this.state.update}
          </MDBListGroup>
        </MDBContainer>
      </React.Fragment>
    );
  }
}

export default edit;

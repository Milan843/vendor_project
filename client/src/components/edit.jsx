import React, { Component } from "react";
import Axios from "axios";
import { withRouter } from "react-router";
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBContainer,
  MDBBadge,
  MDBBtn,
  MDBIcon
} from "mdbreact";

export class edit extends Component {
  state = { itemlist: [], product_name: "" };

  componentDidMount = async () => {
    const product_id = window.location.pathname.split("/")[2];
    const res = await Axios.get(`/edit/${product_id}`);
    this.setState({
      product_name: Object.keys(res.data)[0],
      itemlist: res.data[Object.keys(res.data)]
    });
  };

  showlist = () => {
    var count = 0;
    return this.state.itemlist.map(item => {
      count++;
      return (
        <MDBListGroupItem className="d-flex align-items-center">
          <MDBBadge color="primary" style={{ margin: "5px" }} pill>
            {count}
          </MDBBadge>
          <div className="proddetails">{item}</div>
          <div className="edbtn">
            <button className="fas fa-trash-alt"></button>
          </div>
        </MDBListGroupItem>
      );
    });
  };
  render() {
    return (
      <React.Fragment>
        <MDBContainer>
          <MDBListGroup className="MDBListGroup">
          <MDBListGroupItem className="d-flex align-items-center">
            <h1 style={{color:'coral'}}>{this.state.product_name.toUpperCase()}</h1>
          </MDBListGroupItem>
            {this.showlist()}
          </MDBListGroup>
        </MDBContainer>
      </React.Fragment>
    );
  }
}

export default edit;

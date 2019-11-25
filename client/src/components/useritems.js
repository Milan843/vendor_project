import React, { Component } from "react";
import Cookie from "js-cookie";
import Axios from "axios";
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBBtn } from "mdbreact";

//takes the itemlist of User and show it on screen
export class useritems extends Component {
  state = { mylist: [], productlist: [], show: "" };

  componentDidMount = async () => {
    const token = await Cookie.get("token");
    const res = await Axios.get(`/useritems/${token}`);
    const itemlist = res.data;
    this.setState({ mylist: itemlist });
  };

  proddelete= async(e)=>{
    const res=await Axios.get(`/deleteproduct/${e}`);
    console.log(res);
  }

  showproduct = () => {
    return this.state.mylist.map(item => {
      return (
        <React.Fragment>
          <MDBListGroupItem color="warning">
            <h2>
              {Object.keys(item)}
              <a href={`edit/${Object.keys(item)}`}>
                <MDBBtn color="secondary">DETAILS</MDBBtn>
              </a>
              <MDBBtn
                value={Object.keys(item)}
                color="danger"
                onClick={e => this.proddelete(e.target.value)}
              >
                DELETE
              </MDBBtn>
            </h2>
          </MDBListGroupItem>
        </React.Fragment>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <MDBContainer>
          <MDBListGroup className="my-4 mx-4" style={{ width: "52rem" }}>
            {this.showproduct()}
          </MDBListGroup>
        </MDBContainer>
      </React.Fragment>
    );
  }
}

export default useritems;

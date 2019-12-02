import React, { Component } from "react";
import Cookie from "js-cookie";
import Axios from "axios";
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBBtn } from "mdbreact";

//takes the itemlist of User and show it on screen
export class useritems extends Component {
  state = { mylist: [], productlist: [], show: "" };

  // componentDidMount = async () => {
  //   const token = await Cookie.get("token");
  //   const res = await Axios.get(`/useritems/${token}`);
  //   const itemlist = res.data;
    
  //   this.setState({ mylist: itemlist });
  // };

  proddelete= async(e)=>{
    await Axios.get(`/deleteproduct/${e}`);
  }

  renderpage=async ()=>{
    // const token = await Cookie.get("token");
    const res = await Axios.get(`/useritems`);
    const itemlist = res.data;
    this.setState({ mylist: itemlist });
  }

  showproduct = () => {
    
    if(this.state.mylist!=='unvalid token'){
      // console.log(this.state.mylist);
      
    return this.state.mylist.map(item => {
      return (
        <React.Fragment>
          <MDBListGroupItem color="warning">
            <h2>
              {item.product_name}
              <a href={`edit/${item._id}`}>
                <MDBBtn color="secondary">DETAILS</MDBBtn>
              </a>
              <MDBBtn
                value={item.product_name}
                color="danger"
                onClick={e => this.proddelete(e.target.value)}
              >
                DELETE
              </MDBBtn>
            </h2>
          </MDBListGroupItem>
        </React.Fragment>
      );
    })
  }
    else{
      return <h1>x</h1>
    }
  };

  render() {
    {this.renderpage()}
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

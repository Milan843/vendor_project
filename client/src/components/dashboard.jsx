import React, { Component } from "react";
import Stepper from "./stepper2";
import Cookies from "js-cookie";
import Axios from "axios";
import UserItems from "./useritems";
import {MDBBtn} from 'mdbreact';

//dashboard where there is a logout button
//the stepper and the useritem selected by the user

class dashBoard extends Component {
  handleLogout = async e => {
    const token = Cookies.get("token");
    await Axios.get(`/logout/${token}`);
    Cookies.set("token", null);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <MDBBtn onClick={this.handleLogout}>LOGOUT</MDBBtn>
        <Stepper />
        <UserItems />
      </div>
    );
  }
}

export default dashBoard;

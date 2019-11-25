import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Axios from "axios";
import Cookie from "js-cookie"

//The signin component
//takes the email and password then hit request at backend
class FormPage extends Component{
  state = { email: "", password: "" };
  onFormSubmit = async prvt => {
    console.log(prvt)
    prvt.preventDefault();
    const response= await Axios.post("/signin", {
    email: this.state.email,
    password: this.state.password
    });
    console.log(response.data.token)
    //set the token in the cookies
    await Cookie.set("token",response.data.token)

    console.log(Cookie.get('token'))
    // Cookie.remove('token');
    };
    render() {
   
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={this.onFormSubmit} >
            <p className="h4 text-center mb-4">Sign in</p>
            <label htmlFor="defaultFormLoginEmailEx" className="black-text">
              <h4>Your Email</h4>
            </label>
            <input
              type="email"
              id="defaultFormLoginEmailEx"
              className="form-control"
              onChange={prvt => {this.setState({ email: prvt.target.value })}}

            />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" className="black-text">
              <h4>Your password</h4>
            </label>
            <input
              type="password"
              id="defaultFormLoginPasswordEx"
              className="form-control"
              onChange={prvt =>
                this.setState({ password: prvt.target.value })
                }
            />
            <div className="text-center mt-4">
              
              <MDBBtn color="indigo" type="submit">Login</MDBBtn>
             
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
    };
};

export default FormPage;

import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Axios from "axios"

//The signup component
//takes the name,email and password from the User
class FormPage extends Component{
      state={name:"",email:"",password:"",resfromserver:""}

    onFormSubmit = async e=>{
        console.log(e)
        e.preventDefault();
        if (this.state.password && this.state.email && this.state.name) {

          //checks if password length is greter than 8
        if (this.state.password.length < 8) {
          return this.setState({
            resfromserver: "short password!!! length must be greater than 8"
          });
        }
      //hit request to the '/user' on backend
        const response=await Axios.post("/user",{
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
            
        });
        const body = await response;
        this.setState({ resfromserver: body.data });

      }
    };
    render(){
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={this.onFormSubmit}>
            <p className="h4 text-center mb-4">Sign up</p>
            <label htmlFor="defaultFormRegisterNameEx" className="black-text">
              <h4>Your Name</h4>
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
            onChange={e=>{this.setState({name:e.target.value})}}

            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="black-text">
              <h4>Your Email</h4>
            </label>
            <input
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
              onChange={e=>{this.setState({email:e.target.value})}}

            />
            <br />
       
            <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="black-text"
            >
              <h4>Your password</h4>
            </label>
            <input
              type="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control"
             onChange={e=>{this.setState({password:e.target.value})}}

            />
            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit">
                Register
              </MDBBtn>
            </div>
          </form>
          <p style={{ color: "blue" }}>{this.state.resfromserver}</p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
    };
};

export default FormPage




import React, { Component } from "react";
import Product from "./productName";
import Item from "./items";
import Save from "./saveProduct";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../components/css/index.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

//Stepper component where we are given 3 steps
//first step is to select product
//second step is to choice items
//third step is to preview and save the product

class StepperForm extends Component {
  state = {
    title: "Select Product Name",
    step: 1,
    formcontent: "",
    selectedProductName: "",
    selectedItems: []
  };

  selectProductName = async val => {
    console.log(val)
    await this.setState({
      selectedProductName: val,
      selectedValues: [],
      selectedItems: []
    });
  };

  selectItems = async val => {
    const items = this.state.selectedItems;
    const arr = items.filter(item => {
      return Object.keys(item)[0] != Object.keys(val)[0] ? true : false;
    });
    if (arr.length == this.state.selectedItems.length) {
      this.setState({ selectedItems: [val, ...arr] });
    } else {
      this.setState({ selectedItems: [...arr] });
    }
  };

  ItemsQuantity = async val => {
    const items = this.state.selectedItems;
    const arr = items.filter(item => {
      return Object.keys(item)[0] != Object.keys(val)[0] ? true : false;
    });
    this.setState({ selectedItems: [val, ...arr] });
  };

  Increment = async () => {
    await this.setState({ step: this.state.step + 1 });
    this.onstatechange();
  };

  Decrement = async () => {
    await this.setState({ step: this.state.step - 1 });
    this.onstatechange();
  };

  async componentDidMount() {
    await this.setState({ token: this.props.token, selectedProductName:this.props.product });
    this.onstatechange();
  }

  onstatechange = () => {
    switch (this.state.step) {
      case 1:
        console.log(this.state)
        this.setState({
          formcontent: (
            <Product
              productname={this.selectProductName}
              product={this.state.selectedProductName}
            />
          ),
          title: "Select Product Name"
        });
        break;
      case 2:
        this.setState({
          formcontent: (
            <Item
              selectedItems={this.selectItems}
              ItemsQuantity={this.ItemsQuantity}
              clickeditems={this.state.selectedItems}
            />
          ),
          title: "Select Items"
        });
        break;
      case 3:
        this.setState({
          formcontent: (
            <Save
              product_id={this.state.selectedProductName}
              Itemlist={this.state.selectedItems}
              saveproduct={this.saveproduct}
            />
          ),
          title: "Save"
        });
        break;
      default:
        break;
    }
  };
  showbuttons = () => {
    if (this.state.step === 1) {
      return (
        <React.Fragment>
          <MDBBtn gradient="aqua" rounded onClick={this.Increment}>
            next
          </MDBBtn>
        </React.Fragment>
      );
    } else if (this.state.step === 3) {
      return (
        <React.Fragment>
          <MDBBtn gradient="blue" rounded onClick={this.Decrement}>
            prev
          </MDBBtn>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <MDBBtn gradient="blue" rounded onClick={this.Decrement}>
            prev
          </MDBBtn>
          <MDBBtn gradient="aqua" rounded onClick={this.Increment}>
            next
          </MDBBtn>
        </React.Fragment>
      );
    }
  };

  stepperprogress = () => {
    if (this.state.step == 1) {
      return (
        <div className="stepperstep">
          <span style={{ background: "orange" }}>1</span>
          <span style={{ background: "grey" }}>2</span>
          <span style={{ background: "grey" }}>3</span>
        </div>
      );
    } else if (this.state.step == 2) {
      return (
        <div className="stepperstep">
          <span style={{ background: "orange" }}>1</span>
          <span style={{ background: "orange" }}>2</span>
          <span style={{ background: "grey" }}>3</span>
        </div>
      );
    } else if (this.state.step == 3) {
      return (
        <div className="stepperstep">
          <span style={{ background: "orange" }}>1</span>
          <span style={{ background: "orange" }}>2</span>
          <span style={{ background: "orange" }}>3</span>
        </div>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.stepperprogress()}
        <div className="stepperform">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="3"></MDBCol>
              <MDBCol md="6">
                <h2 className="indigo-text">{this.state.title}</h2>
                {this.state.formcontent}
                <br />
                {this.state.btn}
                {this.showbuttons()}
              </MDBCol>
              <MDBCol md="3"></MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </React.Fragment>
    );
  }
}

export default StepperForm;

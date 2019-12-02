import React, { Component } from "react";
import Axios from "axios";
import {MDBBtn} from 'mdbreact';

//shows the selected items
class Item extends Component {
  state = { itemlist: [] };

  async componentDidMount() {
    const res = await Axios.get(`/itemlist`, {
      headers: {},
      params: {}
    });
    this.setState({ itemlist: [...res.data] });
  }

  Itemlist = () => {
    return this.state.itemlist.map(({ name, _id }) => {
      return (
        <React.Fragment>
          <MDBBtn
            style={{ width:"70%" }}
            key={_id}
            value={name}
            onClick={e => {
              this.props.selectedItems({[e.target.value]:1});
            }}
          >
            {name}
          </MDBBtn>
          <input type="number"  onChange={e=>this.props.ItemsQuantity({[name]:e.target.value})} min={1} style={{width:"20%"}}/>
         
          <br/>
        </React.Fragment>
      );
    });
  };

  clickeditem=()=>{
    return this.props.clickeditems.map((item)=>{
      return (<div>
        {item}
      </div>)
    })
  }

  render() {
    return (
      <React.Fragment>
        <div style={{height:"150px", overflow:"auto"}}>
          {this.Itemlist()}
        </div>
        <div>
          {this.clickeditem()}
        </div>
      </React.Fragment>
    );
  }
}

export default Item;

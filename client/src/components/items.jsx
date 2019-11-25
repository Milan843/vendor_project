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
            style={{ width:"100%" }}
            key={_id}
            value={name}
            onClick={e => {
              this.props.selectedItems(e.target.value);
            }}
          >
            {name}
          </MDBBtn><br/>
        </React.Fragment>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <div style={{height:"150px", overflow:"auto"}}>
          {this.Itemlist()}
        </div>
      </React.Fragment>
    );
  }
}

export default Item;

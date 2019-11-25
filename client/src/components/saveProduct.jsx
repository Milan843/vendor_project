import React, { Component } from 'react'
import Axios from 'axios'
import Cookie from 'js-cookie';
import {MDBBtn} from 'mdbreact';

//save the Product selected by the User to the db
export class saveProduct extends Component {
    handleShow=async()=>{
        const token= Cookie.get('token');
        await Axios.post("/save", {
            headers: { "Content-Type": "application/json" },
            params: {
              body: JSON.stringify({
                product_id: this.props.product_id,
                Itemlist: this.props.Itemlist,
                token: token
              })
            }
          });
        }
    showitems = () => {
            return this.props.Itemlist.map(item => {
              return <li key={item}>{item}</li>;
            });
          };
   

//render the product name and the selected items
    render() {
        return (
            <React.Fragment>
                <p>product name: {this.props.product_id}</p>
                     {this.showitems()}
                <MDBBtn color="warning"  onClick={this.handleShow}>save</MDBBtn>
            </React.Fragment>
        )
    }
}

export default saveProduct

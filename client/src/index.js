import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/navbar";
import Error from "./components/error";
import DashBoard from "./components/dashboard";
import Edit from "./components/edit";
import "../src/css/index.css";
import First from "./components/first";
import { BrowserRouter as Router, Redirect,Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Cookie from "js-cookie";
import ProtectedRoute from "../src/components/protectedroute";
import Axios from 'axios';

const mytoken = Cookie.get("token");
//sets the token to the headers
Axios.defaults.headers.common["Authorization"] = `${mytoken}`;

class App extends Component {
  state = { auth: false };

  componentDidMount = async () => {
    var token = Cookie.get("token");
    if (token !== "null") {
      this.setState({ auth: true });
    }
  };

  render() {
    return (
      <Router>
        <div className="bg">
          <NavBar />
         <Switch>
          <Route path="/" exact strict component={First} />
          <ProtectedRoute path="/dashboard" exact component={DashBoard} />
          <ProtectedRoute exact strict path="/edit/:product_id" exact component={Edit} />
          <Route path="*"  component={Error}></Route>
        </Switch>
        </div>
      </Router>
     
          
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));

import React from 'react';
import Cookie from 'js-cookie';
import { Route, Redirect } from "react-router-dom";
//Protected router only passes the valid component
//gives the dashboard component if token is present else redirected to home

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props => {
          if (Cookie.get("token") !== "null") {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/",
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          }
        }}
      />
    );
  };
  
  export default ProtectedRoute;

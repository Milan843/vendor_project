import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

//Navbar on the top of the page
class NavBar extends Component{
    
    render(){
          
    return(
        <div>
            <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant ="subtitle1" color="inherit">
                       <Link to="/">Product-Item Cart</Link>
                       &nbsp;&nbsp;&nbsp;
                       <Link to="/dashboard">Dashboard</Link>
                    </Typography>
                </Toolbar> 
            </AppBar>
      
       
        </div>
        </div>
    )
}
}

export default NavBar;

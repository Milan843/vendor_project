import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

//Navbar on the top of the page
class NavBar extends Component{
    
    render(){
          
    return(
        <div>
            <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant ="subtitle1" color="inherit">
                       Product-Item Cart
                    </Typography>
                </Toolbar> 
            </AppBar>
      
       
        </div>
        </div>
    )
}
}

export default NavBar;

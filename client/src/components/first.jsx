import React, { Component } from 'react';
import { NativeSelect } from '@material-ui/core';
import SignUp from './signup'
import SignIn from './signIn'

//The home page where signup and signin buttons appear
//Only return the option which is being clicked
export class first extends Component {
    state={counter:<SignUp />}

    signupHandle=()=>{
        this.setState({counter:<SignUp/>})
    }
    signInHandle=()=>{
        this.setState({counter:<SignIn/>})
    }
  
    render() {
         
        return (
            <div>
                <button onClick={this.signupHandle} >
            Signup
                </button>
            <  button onClick={this.signInHandle} >
            SignIn
            </button>
        {this.state.counter}
            </div>
        )
    }
}

export default first


import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Estate.module.css';
import Property from '../../components/Property/Property';

class Estate extends Component {
    
    state = {

    }

    render (){
        return (
            <Aux>
            <p className={classes.Welcome}>Welcome to the Estate app</p>
            <Property />
            </Aux>    

        );
    }
}

export default Estate;
import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Estate.module.css';
import Property from '../../components/Property/Property';
import axios from 'axios';

class Estate extends Component {
    
    state = {

    property: null,
    error:false   
    // property: {
    //    type:"FLAT",
    //    rooms:3,
    //    description:"a clean unfurnished flat",
    //    agent:"rightmove",
    //    address: {
    //        street: "121 Green Close",
    //        city: "London",
    //        postcode:"N10 5TL"
    //    },
    //    size: 60,
    //    price: 225000
    // }
}

componentDidMount () {
    axios.get('http://mydomain.com:3000/properties/5aa80cac3d8f918cb4b2b15d')
    .then(response=>{
       console.log('response:', response.data)
        this.setState({property: response.data})
    })
    .catch(error=>{
        console.log('error:',error)
        this.setState({error:true})
    });
}

    render (){
        let property = this.state.error ? <p>details can't be loaded!</p> : <p>Loading...</p>
        
        if (this.state.property){
            property=(
                <ul>
                <li><strong>Type:</strong> {this.state.property.type}</li>
                <li><strong>Rooms:</strong> {this.state.property.rooms}</li>
                <li><strong>Description:</strong> {this.state.property.description}</li>
                <li><strong>Agent:</strong> {this.state.property.agent}</li>
                <li><strong>Address:</strong></li>
                <ul>
                    <li><strong>Street:</strong> {this.state.property.address.street}</li>
                    <li><strong>City:</strong> {this.state.property.address.city}</li>
                    <li><strong>Post Code:</strong> {this.state.property.address.postcode}</li>
                </ul>
                <li><strong>Size:</strong> {this.state.property.size}sqm</li>
                <li><strong>Price:</strong> £{this.state.property.price}</li>    
            </ul>   
            )}
        
        return (
            <Aux>
            <p className={classes.Welcome}>Welcome to the Estate app</p>
            <Property property={property}/>
            </Aux>    

        );
    }
}

export default Estate;
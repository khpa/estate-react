import React from 'react';
import classes from './Property.module.css';


const property = ({property})=>{
    return (
        <div className={classes.Property}>
            <ul>
                <li><strong>Type:</strong> {property.type}</li>
                <li><strong>Rooms:</strong> {property.rooms}</li>
                <li><strong>Description:</strong> {property.description}</li>
                <li><strong>Agent:</strong> {property.agent}</li>
                <li><strong>Address:</strong></li>
                <ul>
                    <li><strong>Street:</strong> {property.address.street}</li>
                    <li><strong>City:</strong> {property.address.city}</li>
                    <li><strong>Post Code:</strong> {property.address.zipcode}</li>
                </ul>
                <li><strong>Size:</strong> {property.size}sqm</li>
                <li><strong>Price:</strong> £{property.price}</li>    
            </ul>
        </div>    
    );
};

export default property;

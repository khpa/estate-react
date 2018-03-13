import React from 'react';
import classes from './Property.module.css';


const property = (props)=>{

    return (
        <div className={classes.Property}>
            {props.property}
        </div>    
    );
};

export default property;

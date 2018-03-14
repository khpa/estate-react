import React from 'react';
import classes from './Property.module.css';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';


const property = ({property})=>{
  //  const { classes, theme } = props;


    return (
        <div>
            <div className={classes.outsidecard}>
        <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline">{property.description}</Typography>
            <Typography variant="subheading" color="textSecondary">
            {property.address.street}, {property.address.city}, {property.address.zipcode}
            </Typography>
            <Typography gutterBottom>
        {`
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        `}
      </Typography>
          </CardContent>
          <CardContent className={classes.content}>
            <Typography variant="headline">£{property.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
            <Typography variant="subheading" color="textSecondary">
            contact agent: {property.agent}
            </Typography>
          </CardContent>
        </div>

            <CardMedia
          className={classes.cover}
          image="img/property1.jpg"
          title="property main image"
        />
        </Card>
        </div>
         {/* <div className={classes.Property}>
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
        </div>  */}
        </div>   
    );
};

export default property;

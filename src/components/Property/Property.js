import React from 'react';
import classes from './Property.module.css';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';


const property = ({ property }) => {
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
        </div>
    );
};

export default property;

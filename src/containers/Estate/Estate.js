import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Estate.module.css';
import Property from '../../components/Property/Property';
import PropertyTypeCombo from '../../components/PropertyTypeCombo/PropertyTypeCombo';
import axios from 'axios';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';


class Estate extends Component {

    state = {

        property: null,
        isFetching: false,
        error: false,
        propertyTypeOption: 'ALL'
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

    componentDidMount() {
        this.setState({ isFetching: true })
        axios.get('http://mydomain.com:3000/properties/')
            .then(response => {
                console.log('response:', response.data)
                this.setState({ property: response.data, isFetching: false })
            })
            .catch(error => {
                console.log('error:', error)
                this.setState({ error: true, isFetching: false })
            });
    }
    onSearch = () => {
        axios.get(
            this.state.propertyTypeOption!=='ALL'?'http://mydomain.com:3000/properties/?type=' + this.state.propertyTypeOption:
        'http://mydomain.com:3000/properties/')
            .then(response => {
                console.log('response:', response.data)
                this.setState({ property: response.data, isFetching: false })
            })
            .catch(error => {
                console.log('error:', error)
                this.setState({ error: true, isFetching: false })
            });
    }
    render() {
        const { isFetching, property, propertyTypeOption } = this.state

        return (
            <Aux>
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <p className={classes.Welcome}>Welcome to the Estate app</p>
                    </Grid>
                    <Grid item xs={10}>
                        <div style={{ textAlign: 'center', marginBottom:'40px' }}>
                            <PropertyTypeCombo value={propertyTypeOption} onChange={(e) => this.setState({ propertyTypeOption: e.target.value })} />
                            <Button color="primary" variant="raised" onClick={this.onSearch}>Filter</Button>
                        </div>
                        {isFetching ? <p>Loading...</p> : renderProperty(property)}
                    </Grid>
                </Grid>
            </Aux>

        );
    }
}

const renderProperty = (property) => {
    if (property !== null)
        return property.map(p => <Property key={p._id} property={p} />)
}

export default Estate;
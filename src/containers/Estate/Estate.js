import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Estate.module.css';
import Property from '../../components/Property/Property';
import PropertyTypeCombo from '../../components/PropertyTypeCombo/PropertyTypeCombo';
import axios from 'axios';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import PropertySearchBar from '../../components/PropertySearchBar/PropertySearchBar';



class Estate extends Component {

    state = {

        property: null,
        isFetching: false,
        error: false,
        hightolow: false,
        sortlabel: 'PRICE LOW TO HIGH',
        propertyTypeOption: 'ALL',
        onSearchCollector: {

        }
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
    // onSearch = () => {
    //     axios.get(
    //         this.state.propertyTypeOption !== 'ALL' ? 'http://mydomain.com:3000/properties?type=' + this.state.propertyTypeOption :
    //             'http://mydomain.com:3000/properties/')
    //         .then(response => {
    //             console.log('response:', response.data)
    //             this.setState({ property: response.data, isFetching: false })
    //         })
    //         .catch(error => {
    //             console.log('error:', error)
    //             this.setState({ error: true, isFetching: false })
    //         });
    // }

    onSearchBar = () => {
        const keys = Object.keys(this.state.onSearchCollector);
        const buildedArr = [];
        let string = ""
        // keys.map(element => {
        //     if (this.state.onSearchCollector[element]!==undefined){string+=element+'='+this.state.onSearchCollector[element]}
        // });
        string = keys
            .filter((e) => {
                return (this.state.onSearchCollector[e] !== undefined || this.state.onSearchCollector[e] !== '')
            })
            .reduce((acc, value) => acc + value + '=' + this.state.onSearchCollector[value]+'&', '?')

        console.log('string', string.slice(0,-1));

        string = string.slice(0,-1);

        //const key = `description=${this.state.onSearchCollector.description}&type=${this.state.onSearchCollector.type}`
        //console.log("key", key);
        axios.get(
            'http://mydomain.com:3000/properties'+string)

            .then(response => {
                console.log('response:', response.data)
                this.setState({ property: response.data, isFetching: false })
            })
            .catch(error => {
                console.log('error:', error)
                this.setState({ error: true, isFetching: false })
            });
    }


    sortByPrice = () => {
        let objs = this.state.property;

        if (this.state.hightolow === false) {
            objs.sort(function (a, b) { return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0); });
            this.setState((prevState) => {
                return { property: objs, hightolow: !prevState.hightolow, sortlabel: 'PRICE HIGH TO LOW' }
            });
            console.log(this.state.hightolow);
        }
        else if (this.state.hightolow === true) {
            objs.sort(function (a, b) { return (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0); });
            this.setState((prevState) => { return { property: objs, hightolow: !prevState.hightolow, sortlabel: 'PRICE LOW TO HIGH' } });
            console.log(this.state.hightolow);
        }
    }

    propComboOnChange = (event) => {
        const onSearchCollector = { ...this.state.onSearchCollector, type: event.target.value }

        this.setState({ onSearchCollector })
    }
    render() {
        const { isFetching, property, propertyTypeOption, propertySearchKeyword } = this.state

        return (
            <Aux>

                <div className={classes.tools}>
                    <AppBar position="static" color="default">
                        <Toolbar>
                            <Typography variant="title" color="inherit">Estate - Property Market</Typography>
                        </Toolbar>
                    </AppBar>
                </div>

                <Grid container justify="center">
                    <Grid item xs={12}>
                        <p className={classes.Welcome}>Welcome to the Estate app</p>
                    </Grid>
                    <Grid item xs={10}>

                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <PropertySearchBar
                                value={propertySearchKeyword}
                                onChange={(event) => this.setState({ onSearchCollector: { description: event.target.value } })} />
                            {/* onChange={(e) => this.setState({ propertySearchKeyword: e.target.value })} */}
                            <Button color="primary" variant="raised" onClick={this.onSearchBar}>Search</Button>
                            <PropertyTypeCombo
                                value={propertyTypeOption}
                                onChange={this.propComboOnChange} />
                            <Button color="primary" variant="raised" onClick={this.onSearch}>Filter</Button>
                            <Button style={{ marginLeft: '10px' }} color="default" variant="raised" onClick={this.sortByPrice}>{this.state.sortlabel}</Button>
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
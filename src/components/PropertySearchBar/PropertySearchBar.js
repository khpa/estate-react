import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
  })


class PropertySearchBar extends Component {
   render()
   
   {
    const { classes } = this.props;
    return (
        <TextField
        id="search"
        label="Search something"
        type="search"
        className={classes.textField}
        margin="normal"
        onChange={this.props.onChange}


      />    
    )
}
}

PropertySearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(PropertySearchBar);
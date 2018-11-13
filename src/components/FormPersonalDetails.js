import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep()
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep()
  }
  render() {
    const { values } = this.props
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" />
          <TextField
            hintText="Enter your occupation"
            floatingLabeText="Occupation"
            onChange={this.props.handleChange('occupation')}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            hintText="Enter your city"
            floatingLabeText="City"
            onChange={this.props.handleChange('city')}
            defaultValue={values.city}
          />
          <br />
          <TextField
            hintText="Enter your bio"
            floatingLabeText="Bio"
            onChange={this.props.handleChange('bio')}
            defaultValue={values.bio}
          />
          <br />
          <RaisedButton
            label="Back"
            primary="false"
            style={styles.button}
            onClick={this.back}
          />
          <RaisedButton
            label="Continue"
            primary="true"
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>

    );
  }
}

const styles = {
  button: {
    margin: 15
  }
}

export default FormPersonalDetails;
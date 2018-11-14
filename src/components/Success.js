import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class Success extends Component {
  continue = e => {
    e.preventDefault();
    // Process Form on the backend //
    this.props.nextStep()
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep()
  }

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank you for completing this form!</h1>
        </React.Fragment>
      </MuiThemeProvider>

    );
  }
}

export default Success;
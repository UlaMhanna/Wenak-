//screen 1


import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }



    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details"/>
                    <TextField 
                        hintText="Enter Your Mobile Number"
                        floatingLabelText="Mobile"
                        onChange={handleChange('mobile')}
                        defaultValue={values.mobile}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter Password"
                        floatingLabelText="Password"
                        onChange={handleChange('password')}
                        defaultValue={values.password}
                    />
                    <br/>
                    <RadioGroup aria-label="position" name="position" defaultValue={values.userType} onChange={handleChange('userType')} row>                    
                        <FormControlLabel
                            value="Driver"
                            control={<Radio color="primary" />}
                            label="Driver"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            value="Customer"
                            control={<Radio color="primary" />}
                            label="Customer"
                            labelPlacement="start"
                        />
                    </RadioGroup>
                    <br/>
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
            
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails

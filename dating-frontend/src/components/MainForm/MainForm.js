import React, {Component} from 'react';
import {FormControl, InputLabel, MenuItem, Grid, Button} from '@material-ui/core';
// import Select from '@material-ui/core/Select';
import Select from '../UI/Select/Select';
import './MainForm.css';

export default class MainForm extends Component {

  state = {
    formControls: {
      gender: {
        label: 'I am',
        value: '',
        names: ['Male', 'Female']
      },
      lookingFor: {
        label: 'I am looking for',
        value: '',
        names: ['Parnter', 'Friends', 'Chat']
      },
      between: {
        label: 'Between',
        value: '',
        names: ['Parnter', 'Friends', 'Chat']
      },
      region: {
        label: 'That live in',
        value: '',
        names: ['Region1', 'Region2', 'Region3']
      }
    }
  }

  handleChange = (event, controlName) => {
    const formControls = {...this.state.formControls};
    const control = {...formControls[controlName]};

    control.value = event.target.value;
    formControls[controlName] = control;

    this.setState({
      formControls
    });
  }

  render() {
    return (
      <div className="MainForm">
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h2>Create your free profile</h2>
            </Grid>
            {Object.keys(this.state.formControls).map((controlName, index) => {
              const control = this.state.formControls[controlName];
              return (
                <Grid item xs key={index}>
                  {/*<FormControl className="formControl">*/}
                  {/*  <InputLabel id={'label-' + controlName}>{control.label}</InputLabel>*/}
                  {/*  <Select*/}
                  {/*    labelId={'label-' + controlName}*/}
                  {/*    id={'select' + controlName}*/}
                  {/*    value={control.value}*/}
                  {/*    onChange={event => this.handleChange(event, controlName)}*/}
                  {/*  >*/}
                  {/*    {control.names.map((name, index) => (*/}
                  {/*      <MenuItem key={index} value={index}>{name}</MenuItem>*/}
                  {/*    ))}*/}
                  {/*  </Select>*/}
                  {/*</FormControl>*/}
                  <Select
                    label={control.label}
                    value={control.value}
                    onChange={event => this.handleChange(event, controlName)}
                    options={control.names}
                  />
                </Grid>
              );
            })}
            <Grid item xs>
              <Button>Next</Button>
            </Grid>
            <Grid item xs={12}>
              <h4>Join us to meet people! Today we are more than 900,000 registered</h4>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Formik, Form, Field} from 'formik';
// import {TextField} from 'formik-material-ui';
// import {Button} from '@material-ui/core';
import Input from "../UI/Input/Input";
import {auth} from '../../actions/auth.actions';
import * as alertActions from "../../actions/alert.actions";
import * as Yup from 'yup';
import './AuthForm.css';

const SigninSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters!')
    .required('Password is required'),
});

class AuthForm extends Component {

  loginHandler = (values) => {
    console.log(values);
    this.props.login(values.username, values.password);
  };

  render() {
    return (
      <div className="AuthForm">
        <h6>If you already have a Profile</h6>
        <Formik
          initialValues={{
            username: '',
            password: ''
          }}
          validationSchema={SigninSchema}
          onSubmit={this.loginHandler}
        >
          {props => {
            const message = props.errors.username || props.errors.password;
            props.isSubmitting && this.props.alert(message);
            return (
              <form onSubmit={props.handleSubmit}>
                <Field
                  name="username"
                  label="Username"
                  type="text"
                  component={Input}/>
                <Field
                  name="password"
                  label="Password"
                  type="password"
                  component={Input}/>
                <div className="login-btn">
                  <button type="submit">Login</button>
                </div>
              </form>
            )
          }}
        </Formik>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) => dispatch(auth(email, password)),
    alert: (message) => dispatch(alertActions.error(message))
  }
}

export default connect(null, mapDispatchToProps)(AuthForm);
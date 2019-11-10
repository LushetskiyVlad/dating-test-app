import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Button, FormGroup } from '@material-ui/core';
import { register } from '../../actions/register.actions';
import * as Yup from 'yup';
import './RegisterForm.css'

const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .required('Username is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters!')
        .required('Password is required'),
});

const formControls = {
    username: {
        type: 'text',
        label: 'UserName'
    },
    email: {
        type: 'text',
        label: 'Email'
    },
    password: {
        type: 'password',
        label: 'Password'
    },
    confirmPassword: {
        type: 'password',
        label: 'Confirm password'
    },
    // gender: {
    //     type: '',
    //     label: 'Your gender'
    // },
    // birthDate: {
    //     type: 'text',
    //     label: 'Birth date'
    // }
}

class RegisterForm extends Component {

    registerHandler = (values) => {
        this.props.register(values)
    }

    renderInputs() {
        return Object.keys(formControls).map((controlName, index) => {
            const control = formControls[controlName];
            return (
                <Field
                    name={controlName}
                    label={control.label}
                    type={control.type}
                    variant="outlined"
                    margin="normal"
                    component={TextField} />
            );
        })
    }

    render() {
        return (
            <div className="register-form">
                <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={this.registerHandler}
                >
                    <Form>
                        <FormGroup>
                            {this.renderInputs()}
                            <Button type="submit">Register</Button>
                        </FormGroup>
                    </Form>
                </Formik>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        register: (userData) => dispatch(register(userData))
    }
}

export default connect(null, mapDispatchToProps)(RegisterForm);
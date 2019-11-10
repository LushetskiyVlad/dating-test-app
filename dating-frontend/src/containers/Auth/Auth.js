import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
// import { Typography } from '@material-ui/core';
import './Auth.css';

class Auth extends Component {

    render() {
        return (
            <div className="Auth">
                <div>
                    {/* <Typography variant="h5" component="h1">
                        SignIn
                    </Typography> */}
                    <Switch>
                        <Route path="/auth" component={AuthForm} />
                        <Route path="/register" component={RegisterForm} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Auth;
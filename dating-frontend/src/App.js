import React from 'react';
import {connect} from "react-redux";
import {Route, Switch} from 'react-router-dom';
import Home from './containers/Home/Home';
import Alert from "./components/UI/Alert";
import Header from './components/Header/Header';
import RegisterForm from './components/RegisterForm/RegisterForm';
import * as alertActions from "./actions/alert.actions";
import './App.css';

function App (props) {
    return (
      <div className="App">
        {props.alert &&
        <Alert
          variant={props.alert.type}
          message={props.alert.message}
          onClose={props.onAlertClose}
        />}
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/register" component={RegisterForm}/>
        </Switch>
      </div>
    );
}

function mapStateToProps(state) {
  return {
    alert: state.alert
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAlertClose: () => dispatch(alertActions.clear())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
import React from 'react';
// import { NavLink } from 'react-router-dom';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import { makeStyles } from '@material-ui/core/styles';
import AuthForm from '../AuthForm/AuthForm';
import './Header.css'
import {Container} from "@material-ui/core";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

export default function Header() {
  // const classes = useStyles();

  return (
    <header className="topbar-login row">
      <Container>
        <div className="topbar-logo">
          <img alt="datingchile Logo - Find your ideal match" className="color-logo"
               src="https://datingchile.cl/images/layouts/logo.svg"/>
          <h6>Find your Ideal Partner</h6>
        </div>
        <div className="topbar-login-form">
          <AuthForm/>
        </div>
        {/* <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
          <NavLink to="/auth"><Button color="inherit">Sign in</Button></NavLink>
          <NavLink to="/register"><Button color="inherit">Sign up</Button></NavLink>
        </Toolbar>
      </AppBar> */}
      </Container>
    </header>
  );
}
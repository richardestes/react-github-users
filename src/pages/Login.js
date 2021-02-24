import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loginImg from "../images/login-img.svg";
import { Typography, Grid, Button } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    height: "100vh",
    backgroundColor: theme.palette.common.white,
    textAlign: "center",
  },
  loginImage: {
    width: "50vw",
  },
}));
const Login = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" className={classes.main}>
      <Grid item xs={12}>
        <img src={loginImg} alt="github user" className={classes.loginImage} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3">Github User</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" style={{ width: "250px" }}>
          Login
        </Button>
      </Grid>
    </Grid>
  );
};
export default Login;

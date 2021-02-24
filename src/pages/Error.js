import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Typography, Grid, Button } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  errorContainer: {
    height: "100vh",
    backgroundColor: theme.palette.common.white,
  },
}));

const Error = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center" className={classes.errorContainer}>
      <Grid item xs={12}>
        <Typography variant="h1" style={{ textAlign: "center" }}>
          404
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" style={{ textAlign: "center" }}>
          Sorry, the page you tried cannot be found
        </Typography>
      </Grid>
      <Grid justify="center" item xs={12} style={{ textAlign: "center", backgroundColor: "" }}>
        <Link to="/">
          <Button variant="contained" color="primary">
            Back Home
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`;
export default Error;

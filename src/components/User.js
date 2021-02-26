import React from "react";
import styled from "styled-components";
import UserCard from "./UserCard";
import FollowersCard from "./FollowersCard";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
  },
  infoItem: {
    maxWidth: "500px",
    maxHeight: "350px",
  },
  followerContainer: {},
}));

const User = () => {
  const classes = useStyles();
  return (
    // TODO: Wrap this in grid
    <div className={classes.root}>
      <Grid container justify="space-evenly" alignItems="center">
        <Grid item xs={12} sm={6} className={classes.infoItem}>
          <UserCard></UserCard>
        </Grid>
        <Paper style={{ maxHeight: 315 }} elevation={0}>
          <Grid item xs={12} sm={6} className={classes.infoItem}>
            <FollowersCard></FollowersCard>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  /* align-items: start; */
`;

export default User;

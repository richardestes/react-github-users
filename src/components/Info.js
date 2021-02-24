import React, { useContext } from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";
import { GoRepo, GoGist } from "react-icons/go";
import StorageIcon from "@material-ui/icons/Storage";
import PeopleIcon from "@material-ui/icons/People";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import CodeIcon from "@material-ui/icons/Code";
import CountUp from "react-countup";
import { Typography, Grid } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
  },
  infoContainer: {
    marginTop: "10px",
    marginBottom: "10px",
  },
  infoItem: {
    maxWidth: "230px",
    padding: "16px 20px",
    backgroundColor: theme.palette.common.white,
    borderRadius: "5px",
    display: "flex",
  },
  icon: {
    width: "48px",
    borderRadius: "50%",
  },
  boldText: {
    fontWeight: 600,
  },
}));

const UserInfo = () => {
  const classes = useStyles();

  const { githubUser } = useContext(GithubContext);
  const { public_repos, followers, following, public_gists } = githubUser;

  const items = [
    { id: 1, icon: <StorageIcon className="icon" color="primary"></StorageIcon>, label: "repos", value: public_repos },
    { id: 2, icon: <PeopleIcon className="icon" color="secondary"></PeopleIcon>, label: "followers", value: followers },
    { id: 3, icon: <GroupAddIcon className="icon" color="action"></GroupAddIcon>, label: "following", value: following },
    { id: 4, icon: <CodeIcon className="icon" color="error"></CodeIcon>, label: "gists", value: public_gists },
  ];
  console.log(public_repos);

  return (
    <div className={classes.root}>
      <Grid className={classes.infoContainer} container justify="space-evenly">
        {items.map((item) => {
          return <Item key={item.id} {...item}></Item>;
        })}
      </Grid>
    </div>
  );
};
const Item = ({ icon, label, value, color }) => {
  const classes = useStyles();

  let countDuration = 0;
  switch (value) {
    case value < 10:
      countDuration = 5;
      break;
    case 100 > value > 10:
      countDuration = 3;
      break;
    case 1000 > value > 100:
      countDuration = 3;
      break;
    case value >= 1000:
      countDuration = 5;
    default:
      countDuration = 3;
  }

  return (
    <Grid item className={classes.infoItem} xs={12} sm={3}>
      <Grid container justify="center" alignContent="center">
        <div className={classes.icon}>{icon}</div>
      </Grid>
      <Grid item></Grid>
      <Grid item></Grid>
      <Grid container direction="column">
        <Typography variant="h5" className={classes.boldText}>
          <CountUp duration={countDuration} end={value}></CountUp>
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {label}
        </Typography>
      </Grid>
    </Grid>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;

export default UserInfo;

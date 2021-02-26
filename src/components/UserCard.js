import React, { useContext } from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Link,
} from "@material-ui/core";
import BusinessIcon from "@material-ui/icons/Business";
import RoomIcon from "@material-ui/icons/Room";
import LinkIcon from "@material-ui/icons/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "400px",
  },
  userBio: {
    padding: "20px",
  },
  userCardHeader: {},
}));
const UserCard = () => {
  const classes = useStyles();
  const buttonTheme = createMuiTheme({
    palette: {
      primary: green,
    },
  });
  const { githubUser } = useContext(GithubContext);
  const { avatar_url, html_url, name, company, blog, bio, location, twitter_username } = githubUser;
  return (
    <Card className={classes.root} elevation={0}>
      <CardHeader
        className={classes.userCardHeader}
        avatar={<Avatar alt="profile pic" src={avatar_url} />}
        title={<Typography variant="h5">{name}</Typography>}
        subheader={`@${twitter_username}`}
        action={
          <ThemeProvider theme={buttonTheme}>
            <Button variant="outlined" href={html_url} color="primary">
              Follow
            </Button>
          </ThemeProvider>
        }
      />
      <Divider />
      <CardContent className={classes.userBio}>
        <Typography variant="h6">{bio}</Typography>
      </CardContent>
      <CardActions>
        <List>
          <ListItem>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="caption" color="textSecondary">
                  {" "}
                  {company}
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RoomIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="caption" color="textSecondary">
                  {location}
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LinkIcon href={blog} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="caption">
                  <Link href={blog} color="textSecondary">
                    {blog}
                  </Link>
                </Typography>
              }
            />
          </ListItem>
        </List>
      </CardActions>
    </Card>
  );
};
const Wrapper = styled.article`
  background: var(--clr-white);
  padding: 1.5rem 2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  &::before {
    content: "user";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    p {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-primary-5);
      border: 1px solid var(--clr-primary-5);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-5);
        color: var(--clr-white);
      }
    }
  }
  .bio {
    color: var(--clr-grey-3);
  }
  .links {
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: var(--clr-primary-5);
      transition: var(--transition);
      svg {
        color: var(--clr-grey-5);
      }
      &:hover {
        color: var(--clr-primary-3);
      }
    }
  }
`;
export default UserCard;

import React, { useContext } from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  followersTitle: {
    padding: "15px 20px",
    fontWeight: "bold",
  },
  followerGithubLink: {
    textDecoration: "none",
  },
}));

const FollowersCard = () => {
  const classes = useStyles();
  const { followers } = useContext(GithubContext);
  console.log(followers);
  return (
    <List
      subheader={
        <Typography className={classes.followersTitle} variant="h5">
          Followers ({followers.length})
        </Typography>
      }
    >
      <Divider />
      <div style={{ overflow: "auto", maxHeight: "240px" }}>
        {followers.map((follower, index) => {
          const { avatar_url, html_url, login } = follower;
          return (
            <ListItem key={index} style={index % 2 ? { background: "#f6f6f6" } : { background: "white" }}>
              <ListItemAvatar>
                <Avatar src={avatar_url} className={classes.followerAvatar} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="body2" style={{ fontWeight: 600 }}>
                    {login}
                  </Typography>
                }
                secondary={
                  <Typography className={classes.followerGithub} variant="caption">
                    <Link href={html_url} color="textSecondary">
                      {html_url}
                    </Link>
                  </Typography>
                }
              />
              <Divider />
            </ListItem>
          );
        })}
      </div>
    </List>
  );
};

const Wrapper = styled.article`
  background: var(--clr-white);
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;

  &::before {
    content: " followers";
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
  .followers {
    overflow: scroll;
    height: 260px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
    gap: 1.25rem 1rem;
    padding: 1rem 2rem;
  }
  article {
    transition: var(--transition);
    padding: 0.15rem 0.5rem;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;
    img {
      height: 100%;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
    }
    h4 {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-grey-5);
    }
  }
`;
export default FollowersCard;

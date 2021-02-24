import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockUserRichard from "./mockData.js/mockUserRichard";
import mockReposRichard from "./mockData.js/mockReposRichard";
import mockFollowersRichard from "./mockData.js/mockFollowersRichard";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext(); // gives us access to provider and consumer

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  return <GithubContext.Provider value={{ githubUser, repos, followers }}>{children}</GithubContext.Provider>;
};

export { GithubProvider, GithubContext };

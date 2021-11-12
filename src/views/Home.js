import React from "react";
import AddGroup from "../components/AddGroup";
import { Typography } from "@mui/material";
import classes from "./styles/Home.module.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className={classes.topPart}>
        <Typography align="center" variant="h3">
          Moe's Bookmarks
        </Typography>
        <div className={classes.buttons}>
          <AddGroup />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;

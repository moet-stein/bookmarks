import React from "react";
import AddGroup from "../components/AddGroup";
import { Typography, Button, IconButton } from "@mui/material";
import classes from "./styles/Home.module.css";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

const Home = () => {
  return (
    <React.Fragment>
      <div className={classes.topPart}>
        <div className={classes.flex}>
          <Typography align="center" variant="h3">
            Moe's Bookmarks
          </Typography>
          <IconButton
            onClick={() => console.log("hello")}
            variant="outlined"
            className={classes.buttonMargin}
          >
            <ArrowDropDownCircleIcon />
          </IconButton>
        </div>
        <div className={classes.buttons}>
          <AddGroup />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;

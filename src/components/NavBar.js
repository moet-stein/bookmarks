import React from "react";
import classes from "./NavBar.module.css";
import Logo from "../img/logo.png";
import { Typography } from "@mui/material";
import favicon from "../../public/favicon.ico";

export default function NavBar() {
  return (
    <React.Fragment>
      <div className={classes.logPos}>
        <img src={Logo} alt="logo" className={classes.logo} />
        <div className={classes.bookmarkLogo}>
          <img src={favicon} alt="logo" />
          <Typography variant="h6"> Bookmarks </Typography>
        </div>
      </div>
    </React.Fragment>
  );
}

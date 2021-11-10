import React from "react";
import Logo from "../img/logo.png";
import { Typography } from "@mui/material";
import BookmarksIcon from "@mui/icons-material/Bookmarks";

export default function NavBar() {
  return (
    <React.Fragment>
      <img src={Logo} alt="logo" />
      <div>
        <BookmarksIcon />
        <Typography> Bookmarks </Typography>
      </div>
    </React.Fragment>
  );
}

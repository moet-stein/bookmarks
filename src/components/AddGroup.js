import React from "react";
import Button from "@mui/material/Button";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

export default function AddGroup() {
  const handleClick = () => {
    console.log("You clicked add group btn");
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleClick}
        startIcon={<ControlPointIcon />}
        variant="outlined"
      >
        Add Group
      </Button>
    </React.Fragment>
  );
}

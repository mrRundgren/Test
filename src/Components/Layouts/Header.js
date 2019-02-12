import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default props => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" noWrap>
        Excersise Database
      </Typography>
    </Toolbar>
  </AppBar>
);

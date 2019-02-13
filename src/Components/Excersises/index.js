import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 16,
    marginBottom: 16
  }
};

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default ({ excersises }) => (
  <Grid container spacing={16}>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {excersises.map(([group, excersises]) => (
          <Fragment>
            <Typography
              variant="headline"
              style={{ textTransform: "capitalize" }}
            >
              {group}
            </Typography>
            <List component="nav">
              <ListItem button>
                <ListItemText primary="Trash" />
              </ListItem>
              <ListItem button a href="#simple-list">
                <ListItemText primary="Spam" />
              </ListItem>
            </List>
          </Fragment>
        ))}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>Right Pane</Paper>
    </Grid>
  </Grid>
);

import {
  AppBar,
  Button,
  Container,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import React from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontFamily: "'Luckiest Guy', cursive",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar color="primary" position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              InMinds
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;

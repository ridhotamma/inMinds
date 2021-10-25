import {
  AppBar,
  Container,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuDropdown from "./MenuDropdown";
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
      <AppBar color="primary" position="sticky">
        <Container>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              InMinds
            </Typography>
            <MenuDropdown />
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;

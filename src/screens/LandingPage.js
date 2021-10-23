import React from "react";
import "../App.css";
import {
  Button,
  Box,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Astronaut from "../components/Astronaut";
import LoginForm from "../components/LoginForm";
import LeftSection from "../components/LeftSection";

const useStyles = makeStyles((theme) => ({
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },

  left: {
    backgroundColor: theme.palette.primary.dark,
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },

  title: {
    fontFamily: "'Luckiest Guy', cursive",
    fontWeight: 500,
    color: "white",
  },

  subtitle: {
    fontFamily: "'Asap Condensed', sans-serif",
    fontWeight: 500,
    fontStyle: "italic",
    color: "white",
  },

  form: {
    marginBottom: theme.spacing(2),
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container className={classes.container}>
        <Grid
          item
          className={`${classes.item} ${classes.left}`}
          lg={8}
          md={8}
          sm={6}
        >
          <LeftSection />
        </Grid>
        <Grid
          item
          className={`${classes.right} ${classes.item}`}
          lg={4}
          md={4}
          sm={6}
        >
          <LoginForm />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default LandingPage;

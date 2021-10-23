import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Astronaut from "./Astronaut";

const useStyles = makeStyles((theme) => ({
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
}));

function LeftSection() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h2" className={classes.title}>
        InMinds
      </Typography>
      <Typography variant="body1" className={classes.subtitle}>
        Keep your notes accessable anywhere
      </Typography>
      <Astronaut />
    </React.Fragment>
  );
}

export default LeftSection;

import {
  Box,
  Container,
  IconButton,
  makeStyles,
  Paper,
} from "@material-ui/core";
import React from "react";
import Navbar from "../components/Navbar";
import NoteGrid from "../components/NoteGrid";
import AddIcon from "@material-ui/icons/Create";

const useStyles = makeStyles((theme) => ({
  add: {
    color: "white",
    fontSize: "50px",
  },

  icon: {
    position: "absolute",
    down: 0,
    right: 0,
    margin: theme.spacing(8),
  },

  container: {},
}));
const Dashboard = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Navbar />
      <Container className={classes.container}>
        <NoteGrid />
        <IconButton style={{ backgroundColor: "red" }} className={classes.icon}>
          <AddIcon className={classes.add} />
        </IconButton>
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;

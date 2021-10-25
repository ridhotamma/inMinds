import { Container, IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "../components/Navbar";
import NoteGrid from "../components/NoteGrid";
import AddButton from "../components/AddButton";
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
const Dashboard = ({ notes }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Navbar />
      <Container className={classes.container}>
        <NoteGrid notes={notes} />
        <AddButton />
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;

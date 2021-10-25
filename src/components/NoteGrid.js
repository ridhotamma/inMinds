import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
  },
  card: {
    padding: theme.spacing(2),
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}));

const NoteGrid = ({ notes }) => {
  console.log(notes);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={2} className={classes.container}>
        {notes.map((note) => (
          <Grid item lg={4} md={4} sm={6} xs={12} key={note._id}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6" className={classes.title}>
                  {note.title}
                </Typography>
                <Typography variant="body1">{note.content}</Typography>
              </CardContent>
              <CardActions className={classes.actions}>
                <Button color="inherit">Read more</Button>
                <Toolbar>
                  <IconButton color="secondary">
                    <Delete />
                  </IconButton>
                  <IconButton color="primary">
                    <Edit />
                  </IconButton>
                </Toolbar>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default NoteGrid;

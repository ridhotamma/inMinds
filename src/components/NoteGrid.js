import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
  },
}));

const NoteGrid = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={2} className={classes.container}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Card>
            <CardContent>
              <Typography>notes 1</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Card>
            <CardContent>
              <Typography>notes 1</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Card>
            <CardContent>
              <Typography>notes 1</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Card>
            <CardContent>
              <Typography>notes 1</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default NoteGrid;

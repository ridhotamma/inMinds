import {
  Box,
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  form: {
    marginBottom: theme.spacing(2),
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container>
        <Box component="form" noValidate autoComplete="off">
          <Typography
            variant="h5"
            className={`${classes.form}`}
            color="textPrimary"
          >
            Login to your account
          </Typography>
          <TextField
            id="outlined-basic"
            label="Your email"
            variant="outlined"
            style={{ width: "100%" }}
            className={classes.form}
          />
          <TextField
            id="outlined-basic"
            label="password"
            type="password"
            variant="outlined"
            style={{ width: "100%" }}
            className={classes.form}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ width: "100%" }}
            className={classes.form}
          >
            Login
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default LoginForm;

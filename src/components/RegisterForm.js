import {
  Box,
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import LoginGoogleButton from "./LoginGoogleButton";

const useStyles = makeStyles((theme) => ({
  form: {
    marginBottom: theme.spacing(2),
  },
}));

const RegisterForm = () => {
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
            create new account
          </Typography>
          <TextField
            id="outlined-basic-username"
            label="username"
            variant="outlined"
            style={{ width: "100%" }}
            className={classes.form}
          />
          <TextField
            id="outlined-basic-email"
            label="Your email"
            variant="outlined"
            style={{ width: "100%" }}
            className={classes.form}
          />
          <TextField
            id="outlined-basic-password"
            label="password"
            type="password"
            variant="outlined"
            style={{ width: "100%" }}
            className={classes.form}
          />
          <TextField
            id="outlined-basic-cpassword"
            label="confirm password"
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

export default RegisterForm;

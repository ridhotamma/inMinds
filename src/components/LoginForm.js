import {
  Box,
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { validateEmail, validatePassword } from "../helpers/validation";

const useStyles = makeStyles((theme) => ({
  form: {
    marginBottom: theme.spacing(2),
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
  });
  const [errorStatus, setErrorStatus] = useState({
    email: false,
    password: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data submitted");

    window.location.href = "http://localhost:3000/dashboard";
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);

    const isValid = validateEmail(email);

    setErrorStatus({ ...errorStatus, email: true });
    setErrorMessage({ ...errorMessage, email: "email must be valid" });
    if (isValid) {
      setErrorStatus({ ...errorStatus, email: false });
      setErrorMessage({ ...errorMessage, email: "" });
    }
    console.log(isValid);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);

    const isValid = validatePassword(password);

    setErrorStatus({ ...errorStatus, password: true });
    setErrorMessage({
      ...errorMessage,
      password: "password at least have 8 character",
    });
    if (isValid) {
      setErrorStatus({ ...errorStatus, password: false });
      setErrorMessage({ ...errorMessage, password: "" });
    }
    console.log(isValid);
  };

  return (
    <React.Fragment>
      <Container>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
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
            error={errorStatus.email}
            helperText={errorMessage.email}
            onChange={onChangeEmail}
          />
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            style={{ width: "100%" }}
            className={classes.form}
            error={errorStatus.password}
            helperText={errorMessage.password}
            onChange={onChangePassword}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ width: "100%" }}
            className={classes.form}
            type="submit"
          >
            Login
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default LoginForm;

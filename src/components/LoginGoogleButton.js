import { Button, Container } from "@material-ui/core";
import GoogleIcon from "@material-ui/icons/Send";

import React from "react";

function LoginGoogleButton() {
  return (
    <React.Fragment>
      <Container>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          endIcon={<GoogleIcon />}
        >
          login with google
        </Button>
      </Container>
    </React.Fragment>
  );
}

export default LoginGoogleButton;

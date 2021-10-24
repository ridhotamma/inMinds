import React from "react";
import "../App.css";
import { Box, Grid, makeStyles, Tab } from "@material-ui/core";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import LoginForm from "../components/LoginForm";
import LeftSection from "../components/LeftSection";
import RegisterForm from "../components/RegisterForm";
import LoginGoogleButton from "../components/LoginGoogleButton";

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
  right: {
    flexDirection: "column",
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange} aria-label="Login and Register">
                <Tab label="Login" value="1" />
                <Tab label="Register" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <LoginForm />
              <LoginGoogleButton />
            </TabPanel>
            <TabPanel value="2">
              <RegisterForm />
              <LoginGoogleButton />
            </TabPanel>
          </TabContext>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default LandingPage;

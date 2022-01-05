import { Box, IconButton, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { IoApps } from "react-icons/io5";

const useStyles = makeStyles({
  boxContainer: {
    width: 48,
    display: "flex",
  },
  appsIcon: {
    position: "relative",
    width: 40,
    height: 40,
    margin: 5,
    color: "#fff",
  },
  outlookLink: {
    color: "#fff",
    fontSize: 16,
    height: 40,
    marginTop: 5,
    marginLeft: 5,
    fontWeight: "bold",
    fontFamily: "Arial, Helvetica, sans-serif",
    justifyContent: "flex-start",
    position: "relative",
  },
});

const AppbarLeft = () => {
  const classes = useStyles();

  return (
    <Box className={classes.boxContainer}>
      <IconButton className={classes.appsIcon}>
        <IoApps />
      </IconButton>
      <Link
        className={classes.outlookLink}
        component="button"
        underline="false"
        variant="body2"
        onclick={() => {
          console.log("I'm a button");
        }}
      >
        Outlook
      </Link>
    </Box>
  );
};

export default AppbarLeft;

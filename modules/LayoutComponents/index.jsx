import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Head from "next/head";
import AppBar from "./appbar/AppBar";
import SideBar from "./sideBar/SideBar";
import MainContainer from "./container/MainContainer";

const useStyles = makeStyles({
  appbar: {
    position: 'relative',
    width: '100%',
  },


  containermain: {
    display: "flex",
    flexDirection: "row",
  },
  sidebar:{
    width: '20%',
  },
  mainContent:{
    display: "flex",
    flexDirection: "row",
    backgroundColor: '#fdfdfd',
    width: '80%',
  }
});

const Layout = () => {
  const classes = useStyles();

  return (
    <Box>
      <Head>
        <title>Microsoft To Do</title>
        <meta name="description" content="Created by TJ" />
        <link rel="icon" href="/todo.ico" />
      </Head>
      <Box>
        <Box className={classes.appbar}>
          <AppBar />
        </Box>
        <Box className={classes.containermain}>
          <Box className={classes.sidebar}>
            <SideBar />
          </Box>
          <Box className={classes.mainContent}>
            <MainContainer />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;

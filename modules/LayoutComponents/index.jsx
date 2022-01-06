import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Head from "next/head";
import AppBar from "./appbar/AppBar";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import SideBar from "./sideBar/SideBar";
import MainContainer from "./container/MainContainer";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
  },
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding:0,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Layout = () => {
  const classes = useStyles();

  return (
    <Box>
      <Head>
        <title>Microsoft To Do</title>
        <meta name="description" content="Created by TJ" />
        <link rel="icon" href="/todo.ico" />
      </Head>

      {/* appbar */}
      <AppBar />

      {/* main */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container >
          <Grid item xs>
            <Item>
              <SideBar />
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <MainContainer />
            </Item>
          </Grid>
          {/* <Grid item xs>
            <Item>xs</Item>
          </Grid> */}
        </Grid>
      </Box>

      {/* footer */}
    </Box>
  );
};

export default Layout;

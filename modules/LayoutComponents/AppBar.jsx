import { AppsRounded } from "@mui/icons-material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";

const useStyles = makeStyles({
  appBar: {
    height: 48,
    backgroundColor: "#0078D7",
    zIndex: 100,
    justifyContent: "space-between",
  },
  appIconBox: {
    width: 48,
    height: 48,
    display: "flex",
  },
  appsIcon: {
    position: "relative",
    color: "#fff",
  },
  TypoName: {
    fontFamily: "SegoeUI-Regular-final",
    fontSize: 16,
    color: "#fff",
  },
});

function AppBar() {
  const classes = useStyles();

  return (
    <Box className={classes.appBar}>
      {/* logo box */}
      <Box className={classes.appIconBox}>
        <IconButton className={classes.appsIcon}>
          <AppsRounded />
        </IconButton>
        {/* <Typography className={classes.TypoName}>Outlook</Typography> */}
      </Box>
      {/* search box */}
      {/* icons box */}
    </Box>
  );
}

export default AppBar;

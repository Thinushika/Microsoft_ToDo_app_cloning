import { AppsRounded } from "@mui/icons-material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Avatar, Box, IconButton, Link } from "@mui/material";

const useStyles = makeStyles({
  appBar: {
    height: 48,
    backgroundColor: "#0078D7",
    zIndex: 100,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },
  appbarLeft: {
    width: 48,
    display: "inline",
  },
  appbarRight: {
    width: 48,
    display: "inline",
  },
  appbarCenter: {
    display: "inline",
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
  outlookLink: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
});

function AppBar() {
  const classes = useStyles();

  return (
    <Box className={classes.appBar}>
      {/* logo box */}
      <Box className={classes.appbarLeft}>
        <IconButton className={classes.appsIcon}>
          <AppsRounded />
        </IconButton>
      </Box>
      {/* search box */}
      <Box className={classes.appbarCenter}>
        <Link
          className={classes.outlookLink}
          component="button"
          variant="body2"
          onclick={() => {
            console.log("I'm a button");
          }}
        >
          Outlook
        </Link>
      </Box>
      {/* icons box */}
      <Box className={classes.appbarRight}>
      <Avatar sx={{ 
        bgcolor: deepOrange[500], 
        width:30, 
        height:30,
         }}>N</Avatar>
      </Box>
    </Box>
  );
}

export default AppBar;

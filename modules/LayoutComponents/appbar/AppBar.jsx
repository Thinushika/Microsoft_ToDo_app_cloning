import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import AppbarLeft from "./AppbarLeft";
import AppbarRight from "./AppbarRight";
import AppbarCenter from "./AppbarCenter";

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
    display: "flex",
  },
  appbarRight: {
    width: 192,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    boxSizing: "border-box",
  },
  appbarCenter: {
    display: "flex",
    justifyContent: "space-between",
  },
});

function AppBar() {
  const classes = useStyles();

  return (
    <Box className={classes.appBar}>
      {/* logo box */}
      <Box className={classes.appbarLeft}>
        <AppbarLeft />
      </Box>

      <Box className={classes.appbarCenter}>
        <AppbarCenter />
      </Box>

      {/* icons box */}
      <Box className={classes.appbarRight}>
        <AppbarRight />
      </Box>
    </Box>
  );
}

export default AppBar;

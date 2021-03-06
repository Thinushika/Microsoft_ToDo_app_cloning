import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import SidebarHeader from "./SidebarHeader";
import SidebarContent from "./SidebarContent";
import SidebarFooter from "./SidebarFooter";

const useStyles = makeStyles({
  leftColumn: {
    borderRight: "1px solid #eaeaea",
    zIndex: 60,
    height: 648,
    display: "flex",
    flexDirection: "column",
  },
  sideBar: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    position: "relative",
    boxSizing: "border-box",
    overflow: "hidden",
  },
  sidebarContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    overflow: "hidden",
    paddingTop: 1,
    position: "relative",
  },
  sidebarFooter: {
    borderTop: "1px solid #eaeaea",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    height: 48,
    margin: 0,
    position: "relative",
  },
});

function SideBar() {
  const classes = useStyles();
  return (
    <Box className={classes.leftColumn}>
      <Box className={classes.sideBar}>
        <SidebarHeader />

        {/* nevigation menu */}
        <SidebarContent />

        {/* side bar footer */}
        <SidebarFooter />
      </Box>
    </Box>
  );
}

export default SideBar;

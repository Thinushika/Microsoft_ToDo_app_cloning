import { Box, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { IoMenuOutline } from "react-icons/io5";

const useStyles = makeStyles({
  sidebarHeader: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    height: 48,
    marginTop: 12,
    padding: "0 8px",
    position: "relative",
  },
  sidebarNavButton: {
    padding: 0,
    margin: 0,
  },
  menuIcmenuIconButtonon: {
    cursor: "pointer",
    padding: 4,
    width: 32,
    height: 32,
    transition: "background-color 0.1s",
    fontFamily: "Segoe UI",
  },
});

const SidebarHeader = () => {
  const classes = useStyles();

  return (
    <Box className={classes.sidebarHeader}>
      {/* menu colappse */}
      <Box className={classes.sidebarNavButton}>
        <IconButton className={classes.menuIconButton}>
          <IoMenuOutline />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SidebarHeader;

import { Box, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SwapVertIcon from '@mui/icons-material/SwapVert';

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 80,
    justifyContent: "center",
    backgroundColor: "#fafafa",
  },
  containerLeft: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
  },
  containerRight: {
    width: "10%",
    float: "right",
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
  left: {
    width: "10%",
    fontSize: "1.3rem",
    whiteSpace: "nowrap",
    color: "#0078D7",
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
  right: {
    width: "10%",
    marginTop: "auto",
    marginBottom: "auto",
  },
});

const TaskToolbar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.containerLeft}>
        <Box className={classes.left}>
          <span>Tasks</span>
        </Box>
        <Box className={classes.right}>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </Box>
      </Box>
      <Box className={classes.containerRight}>
          <IconButton>
              <SwapVertIcon style={{fontSize: '20px', color: '#0078D7'}} />
              <span style={{fontSize: '16px', color: '#0078D7'}}>Sort</span>
          </IconButton>
      </Box>
    </Box>
  );
};

export default TaskToolbar;

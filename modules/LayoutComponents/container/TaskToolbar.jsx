import { Box, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    width: '100%',
    height: 80,
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
  },
  containerLeft: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    backgroundColor: '#bbb',
  },
  containerRight: {
    width: "10%",
    float: 'right',
    backgroundColor: '#545657',
  },
  left: {
    backgroundColor: "#fff",
    width: "10%",
  },
  right: {
    backgroundColor: "#fafafa",
    width: "10%",
  },
});

const TaskToolbar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.containerLeft}>
        <Box className={classes.left}>
            <Typography>
            Tasks
            </Typography>
        </Box>
        <Box className={classes.right}>icon</Box>
      </Box>
      <Box className={classes.containerRight}>sort icon</Box>
    </Box>
  );
};

export default TaskToolbar;

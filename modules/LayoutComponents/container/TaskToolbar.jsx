import { Box, Grid, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const useStyles = makeStyles({
    container: {
        backgroundColor: "#fff",
        display: 'flex',
        flexDirection: 'row',
    }
});

const Item = styled(Paper)(({ theme }) => ({
  //   ...theme.typography.body2,
  padding: 0,
  textAlign: "center",
  backgroundColor: "transparent", //#efefef
  borderColor: "transparent",
}));

const TaskToolbar = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.container}>
        <Typography variant="h5" sx={{ color: "#0078D7" }}>
          Tasks
        </Typography>
        <IconButton>
            <MoreHorizIcon/>
        </IconButton>
      </Box>
    </Box>
  );
};

export default TaskToolbar;

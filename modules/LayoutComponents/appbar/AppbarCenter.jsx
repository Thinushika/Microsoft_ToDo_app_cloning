
import {  Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled, alpha } from '@mui/material/styles';
import React from "react";
import InputBase from '@mui/material/InputBase';
import { IoSearchOutline } from "react-icons/io5";

const useStyles = makeStyles({
  appbarCenter: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.8),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.95),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  color: "#444",
  borderRadius: 1,
  height: 30,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  fontSize: "12px",
  width: 300,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const AppbarLeft = () => {
  const classes = useStyles();

  return (
    <Box className={classes.appbarCenter}>
      <Box>
        <Search sx={{ justifyContent: "center", marginTop: "10px" }}>
          <SearchIconWrapper>
            <IoSearchOutline sx={{ color: "#fff" }} />
          </SearchIconWrapper>
          <StyledInputBase inputProps={{ "aria-label": "search" }} />
        </Search>
      </Box>
    </Box>
  );
};

export default AppbarLeft;

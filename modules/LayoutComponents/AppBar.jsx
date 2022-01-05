import React from "react";
import { makeStyles } from "@mui/styles";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { Avatar, Box, IconButton, Link } from "@mui/material";
import {
  IoApps,
  IoAppsOutline,
  IoAppsSharp,
  IoMegaphoneOutline,
  IoPeopleOutline,
  IoSearchOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { RiQuestionMark } from "react-icons/ri";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

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
    justifyContent: 'space-between',
  },
  appsIcon: {
    position: "relative",
    width: 40,
    height: 40,
    marginTop: 5,
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
    height: 40,
    marginTop: 5,
    marginLeft: 5,
    fontWeight: "bold",
    fontFamily: "Arial, Helvetica, sans-serif",
    justifyContent: "flex-start",
    position: "relative",
  },
  appAvatar: {
    bgcolor: deepOrange[500],
    width: 30,
    height: 30,
    margin: 8,
    position: "relative",
  },

  footerIconLink: {
    padding: "12 0",
    height: 48,
    flex: "1 1 0",
    boxSizing: "border-box",
    cursor: "pointer",
    textAlign: "center",
  },
  footerIconButton: {
    lineHeight: "2rem",
    fontSize: "1.2rem",
    textAlign: "center",
    marginTop: 5,
    width: 40,
    height: 40,
    color: "#fff",
    display: "inline-block",
    fontStyle: "normal",
    fontWeight: "normal",
    speak: "none",
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
  color: "#fff",
  width: 400,
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

function AppBar() {
  const classes = useStyles();

  return (
    <Box className={classes.appBar}>
      {/* logo box */}
      <Box className={classes.appbarLeft}>
        <IconButton className={classes.appsIcon}>
          <IoApps />
        </IconButton>
        <Link
            className={classes.outlookLink}
            component="button"
            underline="false"
            variant="body2"
            onclick={() => {
              console.log("I'm a button");
            }}
          >
            Outlook
          </Link>
      </Box>

     
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
        

      {/* icons box */}
      <Box className={classes.appbarRight}>
            <Link href={"#"} className={classes.footerIconLink}>
              <a>
                <IconButton className={classes.footerIconButton}>
                  <IoSettingsOutline />
                </IconButton>
              </a>
            </Link>

            <Link href={"#"} className={classes.footerIconLink}>
              <a>
                <IconButton className={classes.footerIconButton}>
                  <RiQuestionMark />
                </IconButton>
              </a>
            </Link>

            <Link href={"#"} className={classes.footerIconLink}>
              <a>
                <IconButton className={classes.footerIconButton}>
                  <IoMegaphoneOutline />
                </IconButton>
              </a>
            </Link>
          <Avatar className={classes.appAvatar}>N</Avatar>
      </Box>
        
      </Box>
  );
}

export default AppBar;

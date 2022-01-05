import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  IconButton,
} from "@mui/material";
import {
  IoAttach,
  IoCheckmark,
  IoCalendarOutline,
  IoMailOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import Link from "next/link";

const useStyles = makeStyles({
  sidebarFooter: {
    borderTop: "1px solid #eaeaea",
    padding: 0,
    display: 'flex',
    flexDirection:'column',
    height: 48,
    margin: 0,
    position: 'relative',
  },
  officeIcons: {
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    boxSizing: "border-box",
    width: "100%",
    padding: 0,
    margin: 0,
  },
  footerIconLink: {
    padding: "12 0",
    height: 48,
    flex: "1 1 0",
    display: "inline-block",
    boxSizing: "border-box",
    width: "100%",
    cursor: "pointer",
    textAlign: "center",
  },
  footerIconButton: {
    lineHeight: "2rem",
    fontSize: "1.2rem",
    textAlign: "center",
    color: "#767678",
    display: "inline-block",
    fontStyle: "normal",
    fontWeight: "normal",
    speak: "none",
  },
});

function SidebarFooter() {
  const classes = useStyles();
  return (

        <Box className={classes.sidebarFooter}>
          {/* side bar footer */}
          <Box className={classes.officeIcons}>
            <Link href={"#"} className={classes.footerIconLink}>
              <a>
                <IconButton className={classes.footerIconButton}>
                  <IoMailOutline />
                </IconButton>
              </a>
            </Link>

            <Link href={"#"} className={classes.footerIconLink}>
              <a>
                <IconButton className={classes.footerIconButton}>
                  <IoCalendarOutline />
                </IconButton>
              </a>
            </Link>

            <Link href={"#"} className={classes.footerIconLink}>
              <a>
                <IconButton className={classes.footerIconButton}>
                  <IoPeopleOutline />
                </IconButton>
              </a>
            </Link>

            <Link href={"#"} className={classes.footerIconLink}>
              <a>
                <IconButton className={classes.footerIconButton}>
                  <IoAttach />
                </IconButton>
              </a>
            </Link>

            <Link href={"#"} className={classes.footerIconLink}>
              <a>
                <IconButton className={classes.footerIconButton}>
                  <IoCheckmark />
                </IconButton>
              </a>
            </Link>
          </Box>
        </Box>
  );
}

export default SidebarFooter;

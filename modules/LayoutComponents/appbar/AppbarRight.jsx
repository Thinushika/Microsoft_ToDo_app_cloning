import { Avatar, Box, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import React from 'react'
import { IoMegaphoneOutline, IoSettingsOutline } from 'react-icons/io5';
import { RiQuestionMark } from 'react-icons/ri';
import { deepOrange } from "@mui/material/colors";


const useStyles = makeStyles({
    appAvatar: {
        bgcolor: deepOrange[500],
        width: 30,
        height: 30,
        margin: 8,
        position: "relative",
      },
      appbarRight: {
        width: 192,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        boxSizing: "border-box",
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
})


const AppbarRight = () => {

    const classes = useStyles();

    return (
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
    )
}

export default AppbarRight

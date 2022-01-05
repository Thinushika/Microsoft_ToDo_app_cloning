import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, IconButton, List, ListItem, ListItemButton } from "@mui/material";
import { IoAttach, IoCalendar, IoCheckmark, IoFileTray, IoHome, IoMail, IoMenuOutline, IoPeople, IoStar, IoSunny } from "react-icons/io5";
import Link from "next/link";

const useStyles = makeStyles({
  leftColumn: {
    borderRight: "1px solid #eaeaea",
    width: 290,
    zIndex: 60,
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
  sidebarHeader: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    height: 48,
    marginTop: 12,
    justifyContent: "space-between",
    padding: "0 8px",
  },
  sidebarContent: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    overflow: "hidden",
    paddingTop: 1,
  },
  sidebarFooter: {
    borderRight: "1px solid #eaeaea",
    padding: 0,
    margin: 0,
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
    padding: '12 0',
    height: 48,
    flex: '1 1 0',
    display: 'inline-block',
    boxSizing: 'border-box',
    width: '100%',
    cursor: 'pointer',
    textAlign: 'center',
  },
  footerIconButton: {
    lineHeight: '2rem',
    fontSize: '1.2rem',
    textAlign: 'center',
    color: '#767678',
    display: 'inline-block',
    fontStyle: 'normal',
    fontWeight: 'normal',
    speak: 'none',
  },

  
  ListsNav: {
    position: 'relative',
    overflowX: 'auto',
    overflowY: 'hidden',
  },
  ListBoxOneItem: {
    padding: 0,
  },
  listItemBox: {
    minHeight: '1.6rem',
    position: 'relative',
    "&:hover":{
      backgroundColor: 'white',
    },
  },
  listIconButton: {
    cursor:'pointer',
    boxSizing: 'border-box',
    height: '1.6rem',
    minHeight: '1.6rem',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: '0 12px',
    "&:hover":{
      backgroundColor: 'white',
    },
  },
  listIcon: {
    lineHeight: '1.6rem',
    fontSize: '0.9rem',
    textAlign: 'center',
    color: '#767678',
    // display: 'inline-block',
    // fontStyle: 'normal',
    // fontWeight: 'normal',
    // speak: 'none',
  },
  ListNameText: {
    margin: '0 8px',
    color: '#34373d',
    fontSize: '0.9rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  active: {
    backgroundColor: '#ededed !important',
  },
  hover: {
    "&:hover":{
      backgroundColor: 'white',
    },
  }
});

function SideBar() {
  const classes = useStyles();
  return (
    <Box className={classes.leftColumn}>
      <Box className={classes.sideBar}>
        <Box className={classes.sidebarHeader}>
          {/* menu colappse */}
          <Box className={classes.sidebarNavButton}>
            <IconButton className={classes.menuIconButton}>
              <IoMenuOutline />
            </IconButton>
          </Box>
        </Box>






        {/* nevigation menu */}
        <Box className={classes.sidebarContent}>
          <Box className={classes.ListsNav}>
          <nav sx={{paddingTop: 8}}>
            <List className={classes.ListBoxOneItem}>
              <ListItem selected={true} className={classes.listItemBox, classes.active, classes.hover}>
                <ListItemButton className={classes.listIconButton}>
                  <IoSunny className={classes.listIcon}/>
                  <Box className={classes.ListNameText}>
                  <span>My Day</span>
                  </Box>
                </ListItemButton>
              </ListItem>
            </List>

            <List className={classes.ListBoxOneItem}>
              <ListItem selected={false} className={classes.listItemBox}>
                <ListItemButton className={classes.listIconButton}>
                  <IoStar className={classes.listIcon}/>
                  <Box className={classes.ListNameText}>
                  <span>Important</span>
                  </Box>
                </ListItemButton>
              </ListItem>
            </List>

            <List className={classes.ListBoxOneItem}>
              <ListItem selected={false} className={classes.listItemBox}>
                <ListItemButton className={classes.listIconButton}>
                  <IoCalendar className={classes.listIcon}/>
                  <Box className={classes.ListNameText}>
                  <span>Planned</span>
                  </Box>
                </ListItemButton>
              </ListItem>
            </List>

            <List className={classes.ListBoxOneItem}>
              <ListItem selected={false} className={classes.listItemBox}>
                <ListItemButton className={classes.listIconButton}>
                  <IoPeople className={classes.listIcon}/>
                  <Box className={classes.ListNameText}>
                  <span>Assigned to me</span>
                  </Box>
                </ListItemButton>
              </ListItem>
            </List>

            <List className={classes.ListBoxOneItem}>
              <ListItem selected={false} className={classes.listItemBox}>
                <ListItemButton className={classes.listIconButton}>
                  <IoHome className={classes.listIcon}/>
                  <Box className={classes.ListNameText}>
                  <span>Tasks</span>
                  </Box>
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
          </Box>
        </Box>






        <Box className={classes.sidebarFooter}>
          {/* side bar footer */}
          <Box className={classes.officeIcons}>
            <Link href={'#'} className={classes.footerIconLink}>
              <a>
                <IconButton className={classes.footerIconButton}>
                  <IoMail />
                </IconButton>
              </a>
            </Link>

            <Link href={'#'} className={classes.footerIconLink}>
              <a>
                <IconButton className={classes.footerIconButton}>
                  <IoCalendar />
                </IconButton>
              </a>
            </Link>

            <Link href={'#'} className={classes.footerIconLink}>
              <a>
                <IconButton className={classes.footerIconButton}>
                  <IoPeople />
                </IconButton>
              </a>
            </Link>

            <Link href={'#'} className={classes.footerIconLink}>
              <a>
                <IconButton className={classes.footerIconButton}>
                  <IoAttach />
                </IconButton>
              </a>
            </Link>

            <Link href={'#'} className={classes.footerIconLink}>
              <a>
                <IconButton className={classes.footerIconButton}>
                  <IoCheckmark />
                </IconButton>
              </a>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SideBar;

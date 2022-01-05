import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import {
  IoAttach,
  IoCalendar,
  IoCheckmark,
  IoCalendarOutline,
  IoHome,
  IoMail,
  IoMenuOutline,
  IoPeople,
  IoStar,
  IoSunny,
  IoSunnyOutline,
  IoMailOutline,
  IoPeopleOutline,
  IoAddOutline,
} from "react-icons/io5";
import Link from "next/link";
import { IoMdStarOutline } from "react-icons/io";
import { AiOutlineFolderAdd, AiOutlineUser } from "react-icons/ai";
import { VscHome } from "react-icons/vsc";

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
    position: 'relative',
  },
  sidebarContent: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    overflow: "hidden",
    paddingTop: 1,
    position: 'relative',
  },
  sidebarFooter: {
    borderTop: "1px solid #eaeaea",
    padding: 0,
    margin: 0,
    position: 'relative',
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

  ListsNav: {
    position: "relative",
    overflowX: "auto",
    overflowY: "hidden",
  },
  ListBoxOneItem: {
    padding: 0,
  },
  listItemBox: {
    minHeight: "1.6rem",
    position: "relative",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  listItemBoxSelected: {
    minHeight: "1.6rem",
    position: "relative",
    "&:hover": {
      backgroundColor: "#ededed !important",
    },
  },
  listIconButton: {
    cursor: "pointer",
    boxSizing: "border-box",
    height: "1.6rem",
    minHeight: "1.6rem",
    userSelect: "none",
    display: "flex",
    alignItems: "center",
    padding: "0 12px",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  listIconButtonSelected: {
    cursor: "pointer",
    boxSizing: "border-box",
    height: "1.6rem",
    minHeight: "1.6rem",
    userSelect: "none",
    display: "flex",
    alignItems: "center",
    fontWeight: 500,
    padding: "0 12px",
    "&:hover": {
      backgroundColor: "#ededed !important",
    },
  },
  listIcon: {
    lineHeight: "1.6rem",
    fontSize: "1.2rem",
    textAlign: "center",
    color: "#767678",
  },
  ListNameText: {
    margin: "0 8px",
    color: "#34373d",
    fontSize: "0.9rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  active: {
    backgroundColor: "#ededed !important",
  },
  hover: {
    "&:hover": {
      backgroundColor: "#ededed !important",
    },
  },

  newItemContainer: {
    flexShrink: 0,
    transform: 'none',
    zIndex: 1,
    display: "flex",
  },
  addItemBox: {
    overflow: "hidden",
    transform: 'none',
    display: "flex",
    alignItems: "center",
    "&:hover": {
      color: "#324bdf",
      height: 48,
      transform: 'none',
      fontSize: "0.9rem",
      padding: "0.8px",
      minHeight: "1.6rem",
      position: "relative",
      flex: 1,
    },
  },
  addIcon: {
    lineHeight: "2rem",
    textAlign: "center",
    transform: 'none',
    "&:hover &:active": {
      color: "#324bdf",
      fontSize: "0.8rem",
    },
  },
  addInput: {
    transform: 'none',
    "&:hover, &:active": {
      border: "none !important",
      background: "none !important",
      boxShadow: "none !important",
      borderRadious: "none !important",
    },
    fontSize: "0.8rem",
    justifyContent: 'space-between',
    width: 200,
    transition: "none",
    color: "#34373d",
  },
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
            <nav sx={{ paddingTop: 8 }}>
              <List className={classes.ListBoxOneItem}>
                <ListItem
                  selected={true}
                  className={
                    (classes.listItemBoxSelected, classes.active, classes.hover)
                  }
                >
                  <ListItemButton className={classes.listIconButtonSelected}>
                    <IoSunnyOutline className={classes.listIcon} />
                    <Box className={classes.ListNameText}>
                      <span>My Day</span>
                    </Box>
                  </ListItemButton>
                </ListItem>
              </List>

              <List className={classes.ListBoxOneItem}>
                <ListItem selected={false} className={classes.listItemBox}>
                  <ListItemButton className={classes.listIconButton}>
                    <IoMdStarOutline className={classes.listIcon} />
                    <Box className={classes.ListNameText}>
                      <span>Important</span>
                    </Box>
                  </ListItemButton>
                </ListItem>
              </List>

              <List className={classes.ListBoxOneItem}>
                <ListItem selected={false} className={classes.listItemBox}>
                  <ListItemButton className={classes.listIconButton}>
                    <IoCalendarOutline className={classes.listIcon} />
                    <Box className={classes.ListNameText}>
                      <span>Planned</span>
                    </Box>
                  </ListItemButton>
                </ListItem>
              </List>

              <List className={classes.ListBoxOneItem}>
                <ListItem selected={false} className={classes.listItemBox}>
                  <ListItemButton className={classes.listIconButton}>
                    <AiOutlineUser className={classes.listIcon} />
                    <Box className={classes.ListNameText}>
                      <span>Assigned to me</span>
                    </Box>
                  </ListItemButton>
                </ListItem>
              </List>

              <List className={classes.ListBoxOneItem}>
                <ListItem selected={false} className={classes.listItemBox}>
                  <ListItemButton className={classes.listIconButton}>
                    <VscHome className={classes.listIcon} />
                    <Box className={classes.ListNameText}>
                      <span>Tasks</span>
                    </Box>
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>

          <Box className={classes.newItemContainer}>
            <Box className={classes.addItemBox}>
              <IconButton>
                <IoAddOutline className={classes.addIcon} />
              </IconButton>
              <Input 
              placeholder="New list" 
              className={classes.addInput} 
              disableUnderline
              />
              <IconButton>
              <AiOutlineFolderAdd className={classes.addIcon} />
              </IconButton>
            </Box>
          </Box>
        </Box>

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
      </Box>
    </Box>
  );
}

export default SideBar;

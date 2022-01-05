import { IconButton, Input, List, ListItem, ListItemButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react'
import { AiOutlineFolderAdd, AiOutlineUser } from 'react-icons/ai';
import { IoMdStarOutline } from 'react-icons/io';
import { IoAddOutline, IoCalendarOutline, IoSunnyOutline } from 'react-icons/io5';
import { VscHome } from 'react-icons/vsc';


const useStyles = makeStyles({

    sidebarContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: 'space-between',
      flex: 1,
      overflow: "hidden",
      paddingTop: 1,
      position: 'relative',
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


const SidebarContent = () => {

    const classes = useStyles();

    return (
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
    )
}

export default SidebarContent

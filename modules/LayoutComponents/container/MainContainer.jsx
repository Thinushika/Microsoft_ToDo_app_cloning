import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import React from 'react'
import TaskContent from './TaskContent'
import TaskToolbar from './TaskToolbar'


const useStyles = makeStyles({
    container: {
        display: 'flex',
        position: 'absolute',
        margin: 20,
    }
})

const MainContainer = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <TaskToolbar />
            <TaskContent />
        </Box>
    )
}

export default MainContainer

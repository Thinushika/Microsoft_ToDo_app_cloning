import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import Head from 'next/head'
import AppBar from '../modules/LayoutComponents/appbar/AppBar'
import MainContainer from '../modules/LayoutComponents/container/MainContainer'
import SideBar from '../modules/LayoutComponents/sideBar/SideBar'
import styles from '../styles/Home.module.css'


const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  }
})


export default function Home() {

  const classes = useStyles();

  return (
    <div className={styles.container}>
      <Head>
        <title>Microsoft To Do</title>
        <meta name="description" content="Created by TJ" />
        <link rel="icon" href="/todo.ico" />
      </Head>

      {/* appbar */}
      <AppBar />
      <Box className={classes.content}>
      <SideBar />
      <MainContainer />
      </Box>
      

      {/* main */}
      

      {/* footer */}
    </div>
  )
}

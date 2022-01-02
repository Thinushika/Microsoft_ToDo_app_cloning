import Head from 'next/head'
import AppBar from '../modules/LayoutComponents/AppBar'
import SideBar from '../modules/LayoutComponents/SideBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Microsoft To Do</title>
        <meta name="description" content="Created by TJ" />
        <link rel="icon" href="/todo.ico" />
      </Head>

      {/* appbar */}
      <AppBar />

      {/* main */}
      <SideBar />

      {/* footer */}
    </div>
  )
}

import Head from 'next/head'
import styles from '../../styles/Dashboard.module.css'
import NavBar from '../../components/NavBar.js'
import SideBar from '../../components/SideBar.js'
import { Container } from 'react-bootstrap'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar brand="ZeroCords"></NavBar>

      <main className={styles.main}>
        <SideBar activekey="/dashboard"></SideBar>
        <main className={styles.submain}>

          <h1>
            Helloooo there!
          </h1>
        </main>
      </main>
    </div>
  )
}

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'

const Home: NextPage = () => {
  return (
    <div className={styles.btn}>
      <button className={styles.read_more}>Read More</button>
      <button className={styles.trade_now}>Trade now</button>
    </div>
  )
}

export default Home

// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return (
//     <>
//       <h1>hello</h1>
//     </>
//   )
// }

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Event Planner App</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Event Planner App!</h1>

        <p className={styles.description}>
          This app helps you plan, manage, and attend events with ease.
        </p>

        <div className={styles.grid}>
          <Link href="/signup" className={styles.card}>
            <h3>View Events &rarr;</h3>
            <p>See a list of upcoming events and RSVP.</p>
          </Link>

          <Link href="/signup" className={styles.card}>
            <h3>Sign Up &rarr;</h3>
            <p>Create an account to plan and manage your own events.</p>
          </Link>

          <Link href="/login" className={styles.card}>
            <h3>Log In &rarr;</h3>
            <p>Access your account and manage your events.</p>
          </Link>
        </div>
      </main>

      <footer style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <p>Event Planner App &copy; 2023</p>
      </footer>
    </div>
  );
}


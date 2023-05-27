import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import React from 'react';
import Link from 'next/link';
import CustomHead from '@/components/head';

interface User {
  name: string,
  id: string,
}

export default function Home() {
  // This will become the login page
  let user: User = {
    name: 'Wayne Wasatch',
    id: 'abc123xyz'
  };

  return (
    <>
      {/* <Head>
        <title>{title}</title>
        <meta name="description" content="Kanban for Task Management" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <CustomHead title={'Login'}/>
      <main className={styles.loginContainer}>
        <h1>KANBANDY</h1>
        <p>Login to continue</p>
        <input type="text" />
        <button>Login</button>
        <Link href="/boards">Go To Boards</Link>
      </main>
    </>
  )
}

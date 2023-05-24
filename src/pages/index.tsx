import { Inter } from 'next/font/google';
import Head from 'next/head';
import styles from '@/styles/Boards.module.css';
import LeftNav from '../components/left-nav';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';

const inter = Inter({ subsets: ['latin'] });

interface User {
  name: string,
  id: string,
}

export default function Boards() {
  const [open, setOpen] = React.useState(false);

  let user: User = {
    name: 'Wayne Wasatch',
    id: 'abc123xyz'
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <>
      <Head>
        <title>Kanban: ${user.name ? user.name + 'Boards' : 'User Boards'}</title>
        <meta name="description" content="Kanban for Task Management" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.boardsContainer}>
        <LeftNav 
          open={open}
          handleDrawerClose={handleDrawerClose}
        />
        <div>User's Home Page: All Kanban boards are listed.</div>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ m: 2, ...(open && { display: 'none' }) }}
          >
          <VisibilityIcon />
        </IconButton>
      </main>
    </>
  )
}

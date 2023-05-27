import Head from 'next/head';
import styles from '@/styles/Boards.module.css';
import LeftNav from '../components/left-nav';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CustomHead from '@/components/head';

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

  const title = user.name ? `Kanban: ${user.name} Boards` : 'Kanban';

  return (
    <>
      <CustomHead title={title}/>
      <main className={styles.boardsContainer}>
        <LeftNav 
          open={open}
          handleDrawerClose={handleDrawerClose}
        />
        <div>
          <p>User's Home Page: All Kanban boards are listed.</p>
          <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ m: 2, ...(open && { display: 'none' }) }}
            >
            <VisibilityIcon />
          </IconButton>
        </div>
      </main>
    </>
  )
}

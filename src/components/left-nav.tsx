import Link from 'next/link';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import styles from '@/styles/LeftNav.module.css';

const drawerWidth = 200;

//TODO: Need to figure out how type these props
export default function LeftNav({ open, handleDrawerClose }) {
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            // boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        >
        {/* TODO: figure out how to dynamically build these href links */}
        <Link href="/board/[1]">Platform Launch</Link>
        <Link href="/board/[2]">Marketing Plan</Link>
        <Link href="/board/[3]">Road Map</Link>

        <IconButton 
          color="inherit"
          aria-label="close drawer"
          onClick={handleDrawerClose}
        >
          <VisibilityOffIcon/>
        </IconButton>
      </Drawer>
    </>
  )
}
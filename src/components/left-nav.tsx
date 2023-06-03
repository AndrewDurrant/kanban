import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { NavLink } from 'react-router-dom';

import '../styles/index.css';

interface Props {
  open: boolean;
  handleDrawerClose: () => void
}

const drawerWidth = 200;

export default function LeftNav({ open, handleDrawerClose }: Props) {
  const boards = ['Cat', 'Dog', 'Bird']
  return (
    <div className="nav">
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            position: 'absolute'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        >
        {boards.length ? (
          <ul>
            {boards.map((board) => (
              <li key={board}>
                <NavLink
                  to={'#'}
                >
                  { board }
                </NavLink>
              </li>
            ))}
          </ul>) : (
            <i>No Name</i>
          )
        }
        <div className="closeDrawerBtn">
          <IconButton 
            color="inherit"
            aria-label="close drawer"
            onClick={handleDrawerClose}
          >
            <VisibilityOffIcon/>
          </IconButton>
        </div>
      </Drawer>
    </div>
  )
}

export { LeftNav };
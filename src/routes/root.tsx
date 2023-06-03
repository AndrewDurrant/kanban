import React from 'react';
import { 
  Outlet,
} from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from "@mui/material/IconButton";

import LeftNav from "../components/left-nav";
import TopNav from "../components/top-nav";
import '../styles/index.css';



//TODO: Type this interface all down through the columns:
interface Board {
  name: string;
  columns: Array<object>;
}

async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  // const boards: Array<Board> = await getBoards(q);
}

//TODO: This is not very scalable making a call for something the user may change their mind about. Figure something else out here
async function action() {
  // const board = await createBoard();
  // return redirect(`/boards/${board.id}/edit`);
}

function Root() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TopNav />
      <section className="boardsContainer">
        <LeftNav 
          open={open}
          handleDrawerClose={handleDrawerClose}
        />
        <Outlet />
        <div className="openDrawerBtn">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{ m: 2, ...(open && { display: 'none' }) }}
          >
            <VisibilityIcon />
          </IconButton>
        </div>
      </section>
    </>
  )
}

export { Root, loader, action };